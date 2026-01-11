import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { parseIntent, searchPhones } from '@/data/phones';
import { Product } from '@/types/chat';

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing GEMINI_API_KEY. Please check your .env.local file.');
}

const genAI = new GoogleGenerativeAI(API_KEY);

const systemPrompt = `You are an expert AI shopping assistant specializing in mobile phones. Your role is to help customers discover, compare, and make informed decisions about mobile phones.

Guidelines:
1. Answer natural-language shopping queries about mobile phones (e.g., "Best camera phone under ₹30k?")
2. When phone data is provided, use it to give specific recommendations with exact model names and prices
3. Provide clear rationales explaining WHY each recommendation fits the user's needs
4. Compare models when asked, explaining trade-offs clearly
5. Be friendly, professional, and conversational
6. If asked about irrelevant topics or adversarial prompts, politely redirect to mobile phone discussions
7. Use Indian Rupee (₹) for pricing - always include the ₹ symbol
8. Structure your recommendations with:
   - A brief summary of what the user is looking for
   - Top 2-3 recommendations with model names and prices
   - Clear rationale for each recommendation (why it fits their needs)
   - Key specifications that matter for their use case
9. Explain technical specifications in simple terms
10. IMPORTANT: Format your responses using simple markdown - use **bold** for emphasis, use bullet points with - or *, and use line breaks for readability. Avoid LaTeX syntax, complex formatting, or code blocks.

Keep responses concise but informative. Focus on helping users make the best purchase decision with clear reasoning.`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Parse user intent
    const intent = parseIntent(message);
    
    // Search for relevant phones based on intent
    const relevantPhones = searchPhones(intent, 5);
    
    // Build context about available phones
    let phoneContext = '';
    if (relevantPhones.length > 0) {
      phoneContext = '\n\nAvailable phones matching your criteria:\n';
      relevantPhones.forEach((phone, index) => {
        phoneContext += `${index + 1}. ${phone.brand} ${phone.name} - ₹${phone.price.toLocaleString('en-IN')}\n`;
        phoneContext += `   Specs: ${phone.specifications.processor || 'N/A'}, ${phone.specifications.ram || 'N/A'}, ${phone.specifications.storage || 'N/A'}\n`;
        phoneContext += `   Camera: ${phone.specifications.camera || 'N/A'}\n`;
        phoneContext += `   Battery: ${phone.specifications.battery || 'N/A'}\n`;
        phoneContext += `   Rating: ${phone.rating || 'N/A'}/5\n`;
        if (phone.pros.length > 0) {
          phoneContext += `   Pros: ${phone.pros.slice(0, 2).join(', ')}\n`;
        }
      });
      phoneContext += '\nUse this information to provide specific recommendations with model names and prices.';
    }

    // Build the full prompt with system instruction and conversation history
    let fullPrompt = systemPrompt + phoneContext + '\n\n';
    
    if (history && Array.isArray(history)) {
      // Filter to only user and assistant messages
      const filteredHistory = history.filter(
        (msg: { role: string }) => msg.role === 'user' || msg.role === 'assistant'
      );
      
      // Skip any leading assistant messages
      let startIndex = 0;
      while (startIndex < filteredHistory.length && filteredHistory[startIndex].role === 'assistant') {
        startIndex++;
      }
      
      // Build conversation context
      for (let i = startIndex; i < filteredHistory.length; i++) {
        const msg = filteredHistory[i];
        fullPrompt += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}\n`;
      }
    }
    
    fullPrompt += `User: ${message}\nAssistant:`;

    // Use generateContent directly - more compatible
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ 
      message: text,
      products: relevantPhones.length > 0 ? relevantPhones : undefined,
      intent: intent,
      success: true 
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to get response from AI',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

