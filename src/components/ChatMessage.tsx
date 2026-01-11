'use client';

import { Message } from '@/types/chat';
import ProductCard from './ProductCard';
import ComparisonView from './ComparisonView';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''} animate-fade-in`}>
      {/* Avatar */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg ${
          isUser
            ? 'bg-gradient-to-br from-gray-700 to-gray-900'
            : 'bg-gradient-to-br from-[#8b7355] to-[#a68b6f]'
        }`}
      >
        {isUser ? 'You' : 'AI'}
      </div>

      {/* Message Content */}
      <div className={`flex-1 ${isUser ? 'flex flex-col items-end' : ''}`}>
        <div
          className={`rounded-2xl px-5 py-4 shadow-lg max-w-[85%] border-2 ${
            isUser
              ? 'bg-gradient-to-br from-[#8b7355] to-[#a68b6f] text-white border-[#6b5a42]'
              : 'bg-white dark:bg-[#252320] text-gray-900 dark:text-white border-[#e8e6e3] dark:border-[#3a3835]'
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap break-words">{message.content}</p>
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none break-words">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  strong: ({ children }) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="ml-2">{children}</li>,
                  h1: ({ children }) => <h1 className="text-lg font-bold mb-2 mt-3 first:mt-0">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-base font-bold mb-2 mt-3 first:mt-0">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-sm font-semibold mb-1 mt-2 first:mt-0">{children}</h3>,
                  code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">{children}</code>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-3 italic my-2">{children}</blockquote>,
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Products Display - Only show if products exist and array is not empty */}
        {message.products && Array.isArray(message.products) && message.products.length > 0 && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            {message.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Comparison Display */}
        {message.comparison && (
          <div className="mt-3 w-full">
            <ComparisonView comparison={message.comparison} />
          </div>
        )}

        {/* Timestamp */}
        <span className="text-xs text-[#8b7355] dark:text-[#a68b6f] mt-2 block font-medium">
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}

