import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { parseIntent, searchPhones, findPhonesByName, extractPhoneNamesFromComparison } from '@/data/phones';
import { Product } from '@/types/chat';

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing GEMINI_API_KEY. Please check your .env.local file.');
}

const genAI = new GoogleGenerativeAI(API_KEY);

const systemPrompt = `You are an expert AI shopping assistant specializing in mobile phones. Your role is to help customers discover, compare, and make informed decisions about mobile phones.

Guidelines:
1. **CRITICAL**: For greetings (hi, hello, hey, etc.), respond warmly and naturally WITHOUT mentioning or recommending any specific phones. Just greet them and ask how you can help. Do NOT list phones, show product cards, or make recommendations for greetings.
2. Answer natural-language shopping queries about mobile phones (e.g., "Best camera phone under ₹30k?", "Compact Android with good one-hand use", "Battery king with fast charging around ₹15k")
3. **Handle comparison queries**: When users ask to compare phones (e.g., "Compare Pixel 8a vs OnePlus 12R"), provide side-by-side comparison with key differences, pros/cons, and clear recommendations
4. **Handle educational queries**: When asked to explain technical terms (e.g., "Explain OIS vs EIS"), provide clear, simple explanations with examples
5. **Handle follow-up queries**: When users say "tell me more" or "I like this phone", provide detailed information about the phone they're referring to
6. When phone data is provided in the context, use it to give specific recommendations with exact model names and prices
7. Provide clear rationales explaining WHY each recommendation fits the user's needs
8. Be friendly, professional, and conversational - maintain a natural conversation flow
9. If asked about irrelevant topics or adversarial prompts, politely redirect to mobile phone discussions
10. Use Indian Rupee (₹) for pricing - always include the ₹ symbol
11. Structure your recommendations with:
   - A brief summary of what the user is looking for
   - Top 2-3 recommendations with model names and prices
   - Clear rationale for each recommendation (why it fits their needs)
   - Key specifications that matter for their use case
12. Explain technical specifications in simple terms
13. IMPORTANT: Format your responses using simple markdown - use **bold** for emphasis, use bullet points with - or *, and use line breaks for readability. Avoid LaTeX syntax, complex formatting, or code blocks.

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

    // Check if message is a greeting or casual conversation
    const lowerMessage = message.toLowerCase().trim();
    
    // Check if it contains EXPLICIT phone-related keywords
    // Only trigger phone search if user explicitly mentions phones or phone-related terms
    const explicitPhoneKeywords = /\b(phone|mobile|smartphone|cellphone|cell phone|handset|device)\b/i.test(message);
    const phoneBrandKeywords = /\b(iphone|samsung|oneplus|xiaomi|vivo|realme|google pixel|nothing|redmi|oppo|motorola|nokia)\b/i.test(message);
    const phoneQueryKeywords = /\b(best|top|recommend|suggest|compare|show|find|search|looking for|want|need|buy|purchase|price|cost|₹|rupee|rs\.?|budget|under|above|between)\b/i.test(message);
    const phoneSpecKeywords = /\b(camera|battery|ram|storage|processor|display|screen|specs|specifications|features)\b/i.test(message);
    
    // It's a phone query if it has explicit phone keywords OR (phone query keywords AND phone spec/brand keywords)
    const isPhoneQuery = explicitPhoneKeywords || 
                         phoneBrandKeywords || 
                         (phoneQueryKeywords && (phoneSpecKeywords || phoneBrandKeywords));
    
    // Greeting patterns
    const greetingPatterns = [
      /^(hi|hello|hey|greetings|good morning|good afternoon|good evening|what's up|howdy|sup|hola|namaste)$/i,
      /^(hi|hello|hey)[\s,!.]*$/i,
      /^how are you/i,
      /^what's up/i,
      /^good (morning|afternoon|evening)/i,
      /^(thanks|thank you|bye|goodbye|see you)$/i
    ];
    
    // It's a greeting if it matches greeting pattern and is NOT a phone query
    const isGreeting = !isPhoneQuery && (
      greetingPatterns.some(pattern => pattern.test(lowerMessage)) || 
      (lowerMessage.length <= 20 && /^(hi|hello|hey|thanks|thank you|good)/i.test(lowerMessage))
    );
    
    // Debug log (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('Message:', message, '| isGreeting:', isGreeting, '| isPhoneQuery:', isPhoneQuery);
    }
    
    // Check for comparison query
    const isComparisonQuery = /\b(compare|vs|versus|comparison)\b/i.test(message);
    const comparisonPhoneNames = isComparisonQuery ? extractPhoneNamesFromComparison(message) : [];
    
    // Check for follow-up query (tell me more, I like this phone, etc.)
    const isFollowUpQuery = /\b(tell me more|more details|more info|I like this|details about|info about|show details)\b/i.test(message);
    
    // Check for educational query (explain OIS vs EIS, etc.)
    const isEducationalQuery = /\b(explain|what is|what's|tell me about|difference between|difference|vs|versus)\b/i.test(message) && 
                               /\b(ois|eis|optical|electronic|image stabilization|ram|storage|processor|camera|battery|display)\b/i.test(message);
    
    // Parse user intent and search phones ONLY if it's a phone query
    let intent = null;
    let relevantPhones: Product[] = [];
    
    if (isPhoneQuery && !isGreeting) {
      // Handle comparison queries
      if (isComparisonQuery && comparisonPhoneNames.length >= 2) {
        relevantPhones = findPhonesByName(comparisonPhoneNames);
      }
      // Handle follow-up queries - try to find phones mentioned in conversation history
      else if (isFollowUpQuery && history && Array.isArray(history)) {
        // Look for phone names in recent messages
        const recentMessages = history.slice(-5).map((msg: any) => msg.content || '').join(' ');
        const phoneNamePattern = /\b(?:iPhone|Samsung|OnePlus|Google Pixel|Pixel|Xiaomi|Redmi|Vivo|Realme|Nothing)\s+[\w\s]+/gi;
        const matches = recentMessages.match(phoneNamePattern);
        if (matches) {
          relevantPhones = findPhonesByName(matches);
        }
      }
      // Handle educational queries - don't search for phones, just provide explanation
      else if (!isEducationalQuery) {
        // Regular search query
        intent = parseIntent(message);
        // Only search if there's actual intent (budget, brand, features, etc.)
        const hasActualIntent = intent && (
          (intent.budget && (intent.budget.min || intent.budget.max)) ||
          (intent.brands && intent.brands.length > 0) ||
          (intent.features && intent.features.length > 0) ||
          intent.useCase
        );
        
        // If no specific intent but it's a phone query, still search (user might ask "show me phones")
        if (hasActualIntent || explicitPhoneKeywords || phoneBrandKeywords) {
          relevantPhones = searchPhones(intent || {}, 5);
        }
      }
    }
    
    // Build context about available phones (only for phone-related queries)
    let phoneContext = '';
    if (!isGreeting && relevantPhones.length > 0) {
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

    // Extract phone names from AI response to show product cards for recommended phones
    // This ensures that whatever phones the AI recommends will show up as cards
    const phoneNamePattern = /\b(?:iPhone|Samsung|OnePlus|Google Pixel|Pixel|Xiaomi|Redmi|Vivo|Realme|Nothing|Apple)\s+[\w\s]+(?:Pro|Max|Ultra|FE|Plus|Mini|SE)?/gi;
    const mentionedPhones = text.match(phoneNamePattern);
    
    let finalProducts: Product[] = [];
    
    // If AI mentioned specific phones, try to find them
    if (mentionedPhones && mentionedPhones.length > 0) {
      const foundPhones = findPhonesByName(mentionedPhones);
      if (foundPhones.length > 0) {
        finalProducts = foundPhones;
      }
    }
    
    // If no phones found from AI response, use the search results
    if (finalProducts.length === 0 && relevantPhones.length > 0) {
      finalProducts = relevantPhones;
    }
    
    // Only return products if it's a phone query (not greeting) AND we have phones to show
    const shouldReturnProducts = isPhoneQuery && !isGreeting && finalProducts.length > 0;
    
    return NextResponse.json({ 
      message: text,
      products: shouldReturnProducts ? finalProducts : undefined,
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

