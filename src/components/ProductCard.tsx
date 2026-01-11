'use client';

import { Product } from '@/types/chat';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getBrandColor = (brand: string) => {
    const colors: { [key: string]: string } = {
      'Apple': 'from-gray-900 to-gray-700',
      'Samsung': 'from-blue-600 to-blue-800',
      'OnePlus': 'from-red-600 to-red-800',
      'Google': 'from-blue-500 to-green-500',
      'Xiaomi': 'from-orange-500 to-orange-700',
      'Vivo': 'from-blue-500 to-blue-700',
      'Realme': 'from-yellow-500 to-yellow-700',
      'Nothing': 'from-gray-800 to-black',
    };
    return colors[brand] || 'from-gray-600 to-gray-800';
  };

  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-[#252320] dark:to-[#1f1d1b] border-2 border-[#e8e6e3] dark:border-[#3a3835] rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 animate-fade-in">
      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${getBrandColor(product.brand)} opacity-5 rounded-bl-full`}></div>
      
      <div className="relative">
        {/* Header Section - Compact */}
        <div className="flex items-start justify-between mb-3 pb-3 border-b border-[#e8e6e3] dark:border-[#3a3835]">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r ${getBrandColor(product.brand)} text-white uppercase tracking-wider`}>
                {product.brand}
              </span>
              {product.rating && (
                <div className="flex items-center gap-0.5">
                  <svg className="w-3 h-3 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{product.rating}</span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5 tracking-tight truncate">
              {product.name}
            </h3>
            <p className="text-xl font-bold text-[#8b7355] dark:text-[#a68b6f]">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>

        {/* Compact Specifications Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {product.specifications.processor && (
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#1f1d1b] dark:to-[#252320] p-2 rounded-lg border border-[#e8e6e3] dark:border-[#3a3835]">
              <p className="text-[10px] font-bold text-[#8b7355] dark:text-[#a68b6f] mb-0.5 uppercase tracking-wide">CPU</p>
              <p className="text-xs font-medium text-gray-800 dark:text-gray-200 line-clamp-1">{product.specifications.processor}</p>
            </div>
          )}
          {product.specifications.ram && (
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#1f1d1b] dark:to-[#252320] p-2 rounded-lg border border-[#e8e6e3] dark:border-[#3a3835]">
              <p className="text-[10px] font-bold text-[#8b7355] dark:text-[#a68b6f] mb-0.5 uppercase tracking-wide">RAM</p>
              <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{product.specifications.ram}</p>
            </div>
          )}
          {product.specifications.storage && (
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#1f1d1b] dark:to-[#252320] p-2 rounded-lg border border-[#e8e6e3] dark:border-[#3a3835]">
              <p className="text-[10px] font-bold text-[#8b7355] dark:text-[#a68b6f] mb-0.5 uppercase tracking-wide">Storage</p>
              <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{product.specifications.storage}</p>
            </div>
          )}
          {product.specifications.camera && (
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#1f1d1b] dark:to-[#252320] p-2 rounded-lg border border-[#e8e6e3] dark:border-[#3a3835]">
              <p className="text-[10px] font-bold text-[#8b7355] dark:text-[#a68b6f] mb-0.5 uppercase tracking-wide">Camera</p>
              <p className="text-xs font-medium text-gray-800 dark:text-gray-200 line-clamp-1">{product.specifications.camera}</p>
            </div>
          )}
        </div>

        {/* Compact Pros and Cons */}
        {(product.pros.length > 0 || product.cons.length > 0) && (
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#e8e6e3] dark:border-[#3a3835]">
            {product.pros.length > 0 && (
              <div>
                <p className="text-[10px] font-bold text-green-700 dark:text-green-400 mb-1.5 uppercase tracking-wide flex items-center gap-1">
                  <span className="text-sm">✓</span> Pros
                </p>
                <ul className="space-y-1">
                  {product.pros.slice(0, 2).map((pro, idx) => (
                    <li key={idx} className="text-[11px] text-gray-600 dark:text-gray-400 flex items-start gap-1.5 leading-tight">
                      <span className="text-[#8b7355] dark:text-[#a68b6f] mt-0.5 text-xs">▸</span>
                      <span className="line-clamp-1">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.cons.length > 0 && (
              <div>
                <p className="text-[10px] font-bold text-red-700 dark:text-red-400 mb-1.5 uppercase tracking-wide flex items-center gap-1">
                  <span className="text-sm">✗</span> Cons
                </p>
                <ul className="space-y-1">
                  {product.cons.slice(0, 2).map((con, idx) => (
                    <li key={idx} className="text-[11px] text-gray-600 dark:text-gray-400 flex items-start gap-1.5 leading-tight">
                      <span className="text-[#8b7355] dark:text-[#a68b6f] mt-0.5 text-xs">▸</span>
                      <span className="line-clamp-1">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
