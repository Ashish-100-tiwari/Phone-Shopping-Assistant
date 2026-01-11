# 📱 PhoneShop AI - AI-Powered Phone Shopping Assistant

An intelligent shopping assistant built with Next.js that helps users discover, compare, and make informed decisions about mobile phones using AI-powered natural language queries.

## ✨ Features

- **🤖 AI-Powered Search** - Natural language queries that understand your needs
- **📊 Smart Comparisons** - Compare multiple phones side-by-side with detailed specifications
- **💰 Budget Filtering** - Find the best phones within your budget
- **🔐 Firebase Authentication** - Secure sign in/sign up with Google and Email
- **💬 Conversational Interface** - Chat-based interface for easy interaction
- **📱 Product Database** - Comprehensive database of mobile phones with specs, prices, and ratings
- **💾 Supabase for Short-Term Memory** - Conversation history and chat sessions stored in Supabase
- **🎨 Classic Elegant Design** - Beautiful, modern UI with dark mode support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project with Authentication enabled
- Google Gemini API key
- Supabase project (for conversation history storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mykaarma-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id

   # Gemini API Key
   GEMINI_API_KEY=your-gemini-api-key

   # Supabase Configuration (for short-term memory)
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Configure Firebase**
   
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project or use an existing one
   - Enable Authentication → Sign-in method
   - Enable **Email/Password** and **Google** sign-in methods

5. **Set up Supabase (for Short-Term Memory)**
   
   - Go to [Supabase](https://supabase.com) and create a new project
   - Create a table for storing conversation history:
     ```sql
     CREATE TABLE conversations (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       user_id TEXT NOT NULL,
       message TEXT NOT NULL,
       role TEXT NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
     );
     ```
   - Get your Supabase URL and anon key from Project Settings → API
   - Add them to your `.env.local` file

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mykaarma-assignment/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/          # Chat API route with Gemini integration
│   │   ├── auth/
│   │   │   ├── signin/        # Sign in page
│   │   │   └── signup/        # Sign up page
│   │   ├── chat/              # Chat interface page
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── ChatInterface.tsx  # Main chat component
│   │   ├── ChatMessage.tsx    # Message display component
│   │   ├── ChatInput.tsx      # Input component
│   │   ├── ProductCard.tsx    # Product card component
│   │   ├── ComparisonView.tsx # Comparison view component
│   │   ├── Header.tsx         # Header component
│   │   └── Footer.tsx         # Footer component
│   ├── contexts/
│   │   └── AuthContext.tsx    # Firebase authentication context
│   ├── data/
│   │   └── phones.ts          # Phone database and search functions
│   ├── lib/
│   │   └── firebase.ts        # Firebase configuration
│   └── types/
│       └── chat.ts            # TypeScript type definitions
├── .env.local                 # Environment variables (not in git)
├── .gitignore
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: Firebase Auth
- **AI**: Google Gemini API
- **Database**: Supabase (for conversation history and short-term memory)
- **UI Components**: Custom components with React
- **Markdown**: react-markdown for message formatting

## 🎯 Key Features Explained

### Conversational Search & Recommendation

- **Intent Parsing**: Automatically extracts budget, brand, features, and use case from natural language queries
- **Smart Search**: Filters and scores phones based on user intent
- **Structured Responses**: Provides recommendations with clear rationales

### Example Queries

- "Best camera phone under ₹30k?"
- "Compare iPhone 15 and Samsung S24"
- "Gaming phone with good battery under ₹50k"
- "OnePlus phones with fast charging"
- "Budget phone with good display"

### Authentication

- Email/Password authentication
- Google Sign-In
- Protected routes
- User session management

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Security

- All API keys are stored in `.env.local` (not committed to git)
- Firebase security rules should be configured in Firebase Console
- Environment variables are validated on startup

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Make sure to:
- Set all environment variables in your hosting platform
- Configure Firebase Authentication authorized domains
- Update CORS settings if needed

## 📄 License

This project is part of an assignment.

## 🤝 Contributing

This is an assignment project. For questions or issues, please contact the repository owner.

## 📧 Contact

For support, email: support@phoneshop.ai

---

Built with ❤️ using Next.js and Firebase
