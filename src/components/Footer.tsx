'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#252320] to-[#1f1d1b] dark:from-[#1a1816] dark:to-[#1f1d1b] border-t-2 border-[#3a3835] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b7355] to-[#a68b6f] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  PhoneShop AI
                </h3>
                <p className="text-sm text-[#a68b6f]">Smart Phone Assistant</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Your intelligent shopping companion for finding the perfect mobile phone. 
              Get personalized recommendations, compare models, and make informed decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-[#a68b6f] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-sm text-gray-400 hover:text-[#a68b6f] transition-colors">
                  Chat Assistant
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-sm text-gray-400 hover:text-[#a68b6f] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-gray-400 hover:text-[#a68b6f] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">support@phoneshop.ai</li>
              <li className="text-sm text-gray-400">+91 123 456 7890</li>
              <li className="text-sm text-gray-400">Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#3a3835] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 PhoneShop AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-[#a68b6f] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-[#a68b6f] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

