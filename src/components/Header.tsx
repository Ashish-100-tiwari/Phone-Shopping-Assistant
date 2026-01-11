'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const pathname = usePathname();
  const { currentUser, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#252320]/95 backdrop-blur-md border-b-2 border-[#e8e6e3] dark:border-[#3a3835] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
                PhoneShop AI
              </h1>
              <p className="text-xs text-[#8b7355] dark:text-[#a68b6f] font-medium">Smart Phone Assistant</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className={`text-sm font-semibold transition-colors ${
                pathname === '/' 
                  ? 'text-[#8b7355] dark:text-[#a68b6f]' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#8b7355] dark:hover:text-[#a68b6f]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/chat" 
              className={`text-sm font-semibold transition-colors ${
                pathname === '/chat' 
                  ? 'text-[#8b7355] dark:text-[#a68b6f]' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#8b7355] dark:hover:text-[#a68b6f]'
              }`}
            >
              Chat Assistant
            </Link>
            <Link 
              href="/#features" 
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#8b7355] dark:hover:text-[#a68b6f] transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/#about" 
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#8b7355] dark:hover:text-[#a68b6f] transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Auth Buttons */}
          {currentUser ? (
            <div className="flex items-center gap-3">
              <Link 
                href="/chat"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#8b7355] dark:hover:text-[#a68b6f] transition-colors"
              >
                Chat
              </Link>
              <button
                onClick={logout}
                className="bg-gradient-to-r from-[#8b7355] to-[#a68b6f] hover:from-[#7a6345] hover:to-[#957a5f] text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                href="/auth/signin"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#8b7355] dark:hover:text-[#a68b6f] transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/signup"
                className="bg-gradient-to-r from-[#8b7355] to-[#a68b6f] hover:from-[#7a6345] hover:to-[#957a5f] text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

