'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f7] via-[#f5f3f0] to-[#f0ede8] dark:from-[#1a1816] dark:via-[#1f1d1b] dark:to-[#252320]">
      <Header />
      
      {/* Hero Section 1 - Main */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-[#8b7355] to-[#a68b6f] text-white rounded-full text-sm font-semibold shadow-lg">
                  AI-Powered Shopping Assistant
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Find Your Perfect
                <span className="block text-[#8b7355] dark:text-[#a68b6f] mt-2">Phone in Minutes</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                Get personalized recommendations, compare models, and make informed decisions with our intelligent AI assistant. 
                No more endless browsing—just ask and discover.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/chat"
                  className="bg-gradient-to-r from-[#8b7355] to-[#a68b6f] hover:from-[#7a6345] hover:to-[#957a5f] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  Start Chatting →
                </Link>
                <Link 
                  href="/#features"
                  className="bg-white dark:bg-[#252320] border-2 border-[#8b7355] dark:border-[#a68b6f] text-[#8b7355] dark:text-[#a68b6f] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/20 to-[#a68b6f]/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] rounded-3xl p-8 shadow-2xl border-2 border-[#e8e6e3] dark:border-[#3a3835]">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="bg-white dark:bg-[#1f1d1b] rounded-2xl px-4 py-3 shadow-lg border border-[#e8e6e3] dark:border-[#3a3835]">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Best camera phone under ₹30k?</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 justify-end">
                    <div className="bg-gradient-to-r from-[#8b7355] to-[#a68b6f] rounded-2xl px-4 py-3 text-white shadow-lg">
                      <p className="text-sm">I recommend the OnePlus Nord 3 and Redmi Note 13 Pro+...</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">
                      You
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - Features */}
      <section id="features" className="py-20 px-6 bg-white/50 dark:bg-[#1f1d1b]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to find your perfect phone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] rounded-2xl p-8 border-2 border-[#e8e6e3] dark:border-[#3a3835] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">AI-Powered Search</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Natural language queries that understand your needs. Just ask in plain English and get intelligent recommendations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] rounded-2xl p-8 border-2 border-[#e8e6e3] dark:border-[#3a3835] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Smart Comparisons</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Compare multiple phones side-by-side with detailed specifications, pros, cons, and price analysis.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] rounded-2xl p-8 border-2 border-[#e8e6e3] dark:border-[#3a3835] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Budget Filtering</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Find the best phones within your budget. Our AI considers price, features, and value for money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 3 - How It Works */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simple, fast, and intelligent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] rounded-2xl p-8 border-2 border-[#e8e6e3] dark:border-[#3a3835] shadow-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4">Ask Your Question</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Simply type what you're looking for. Examples: "Best camera phone under ₹30k?" or "Compare iPhone 15 and Samsung S24"
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] rounded-2xl p-8 border-2 border-[#e8e6e3] dark:border-[#3a3835] shadow-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4">AI Analyzes</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our AI understands your intent, filters through our database, and finds the best matches based on your criteria.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] rounded-2xl p-8 border-2 border-[#e8e6e3] dark:border-[#3a3835] shadow-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4">Get Recommendations</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Receive detailed recommendations with specifications, pros, cons, and clear rationales to help you decide.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/chat"
              className="inline-block bg-gradient-to-r from-[#8b7355] to-[#a68b6f] hover:from-[#7a6345] hover:to-[#957a5f] text-white px-12 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Try It Now - It's Free →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
