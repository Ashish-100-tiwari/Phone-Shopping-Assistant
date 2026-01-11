'use client';

import { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-3 bg-white dark:bg-[#252320] rounded-2xl p-3 border-2 border-[#e8e6e3] dark:border-[#3a3835] focus-within:border-[#8b7355] dark:focus-within:border-[#a68b6f] focus-within:ring-2 focus-within:ring-[#8b7355]/20 dark:focus-within:ring-[#a68b6f]/20 transition-all shadow-lg">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Ask about phones, compare models, get recommendations... (e.g., 'Best camera phone under ₹30k?')"
        disabled={disabled}
        rows={1}
        className="flex-1 resize-none bg-transparent border-none outline-none px-4 py-3 text-gray-900 dark:text-white placeholder-[#8b7355] dark:placeholder-[#a68b6f] text-base max-h-32 overflow-y-auto"
        style={{ minHeight: '48px', maxHeight: '128px' }}
      />
      <button
        onClick={handleSend}
        disabled={!input.trim() || disabled}
        className="bg-gradient-to-r from-[#8b7355] to-[#a68b6f] hover:from-[#7a6345] hover:to-[#957a5f] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white rounded-xl px-6 py-3 font-semibold transition-all flex items-center gap-2 min-w-[100px] justify-center shadow-md hover:shadow-lg disabled:shadow-none"
      >
        {disabled ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            <span>Sending</span>
          </>
        ) : (
          <>
            <span>Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}

