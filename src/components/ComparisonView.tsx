'use client';

import { ComparisonData } from '@/types/chat';
import ProductCard from './ProductCard';

interface ComparisonViewProps {
  comparison: ComparisonData;
}

export default function ComparisonView({ comparison }: ComparisonViewProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] border-2 border-[#e8e6e3] dark:border-[#3a3835] rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-[#e8e6e3] dark:border-[#3a3835]">
        <svg className="w-6 h-6 text-[#8b7355] dark:text-[#a68b6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h3 className="font-bold text-xl text-gray-900 dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
          Product Comparison
        </h3>
      </div>
      
      <div className="space-y-4 mb-6">
        {comparison.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {comparison.comparisonPoints && comparison.comparisonPoints.length > 0 && (
        <div className="mt-6 pt-6 border-t-2 border-[#e8e6e3] dark:border-[#3a3835]">
          <h4 className="font-bold text-base text-[#8b7355] dark:text-[#a68b6f] mb-3 uppercase tracking-wide">
            Key Differences
          </h4>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {comparison.comparisonPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#8b7355] dark:text-[#a68b6f] mt-1 font-bold">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

