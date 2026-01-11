import { Product } from '@/types/chat';

export const phoneDatabase: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 134900,
    specifications: {
      display: '6.1" Super Retina XDR OLED',
      processor: 'A17 Pro',
      ram: '8GB',
      storage: '128GB',
      camera: '48MP + 12MP + 12MP',
      battery: '3274 mAh',
      os: 'iOS 17',
    },
    pros: ['Excellent camera system', 'Powerful A17 Pro chip', 'Premium build quality', 'Long software support'],
    cons: ['Expensive', 'No charger included', 'Limited customization'],
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 124999,
    specifications: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      camera: '200MP + 50MP + 12MP + 10MP',
      battery: '5000 mAh',
      os: 'Android 14',
    },
    pros: ['Outstanding camera', 'S Pen support', 'Large display', 'Excellent battery life'],
    cons: ['Very expensive', 'Large size may not suit everyone', 'Heavy'],
    rating: 4.7,
  },
  {
    id: '3',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 64999,
    specifications: {
      display: '6.82" LTPO AMOLED',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      camera: '50MP + 64MP + 48MP',
      battery: '5400 mAh',
      os: 'OxygenOS 14',
    },
    pros: ['Fast charging', 'Great performance', 'Good value for money', 'Smooth software'],
    cons: ['Camera not as good as flagships', 'No wireless charging in base model'],
    rating: 4.6,
  },
  {
    id: '4',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 106999,
    specifications: {
      display: '6.7" LTPO OLED',
      processor: 'Google Tensor G3',
      ram: '12GB',
      storage: '128GB',
      camera: '50MP + 48MP + 48MP',
      battery: '5050 mAh',
      os: 'Android 14',
    },
    pros: ['Best-in-class camera software', 'Pure Android experience', 'AI features', 'Long updates'],
    cons: ['Tensor chip less powerful than Snapdragon', 'Expensive', 'Limited availability in India'],
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Xiaomi 14',
    brand: 'Xiaomi',
    price: 69999,
    specifications: {
      display: '6.36" LTPO AMOLED',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '512GB',
      camera: '50MP + 50MP + 50MP',
      battery: '4610 mAh',
      os: 'MIUI 15',
    },
    pros: ['Flagship performance', 'Great cameras', 'Fast charging', 'Good build quality'],
    cons: ['MIUI has ads', 'Software updates can be slow', 'Limited service network'],
    rating: 4.4,
  },
  {
    id: '6',
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    price: 44999,
    specifications: {
      display: '6.7" LTPO OLED',
      processor: 'Snapdragon 8+ Gen 1',
      ram: '12GB',
      storage: '256GB',
      camera: '50MP + 50MP',
      battery: '4700 mAh',
      os: 'Nothing OS 2.5',
    },
    pros: ['Unique design', 'Clean software', 'Good performance', 'Glyph interface'],
    cons: ['Camera could be better', 'Limited availability', 'Smaller brand'],
    rating: 4.3,
  },
  {
    id: '7',
    name: 'Vivo X100 Pro',
    brand: 'Vivo',
    price: 89999,
    specifications: {
      display: '6.78" LTPO AMOLED',
      processor: 'MediaTek Dimensity 9300',
      ram: '16GB',
      storage: '512GB',
      camera: '50MP + 50MP + 64MP',
      battery: '5400 mAh',
      os: 'Funtouch OS 14',
    },
    pros: ['Excellent camera system', 'Powerful chipset', 'Fast charging', 'Premium design'],
    cons: ['Expensive', 'Heavy UI skin', 'Limited global availability'],
    rating: 4.6,
  },
  {
    id: '8',
    name: 'Realme GT 5 Pro',
    brand: 'Realme',
    price: 39999,
    specifications: {
      display: '6.78" AMOLED',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      camera: '50MP + 8MP + 2MP',
      battery: '5400 mAh',
      os: 'Realme UI 5.0',
    },
    pros: ['Great value', 'Flagship processor', 'Good battery life', 'Fast charging'],
    cons: ['Camera not flagship level', 'UI has bloatware', 'Build quality could be better'],
    rating: 4.2,
  },
  {
    id: '9',
    name: 'iPhone 15',
    brand: 'Apple',
    price: 79900,
    specifications: {
      display: '6.1" Super Retina XDR OLED',
      processor: 'A16 Bionic',
      ram: '6GB',
      storage: '128GB',
      camera: '48MP + 12MP',
      battery: '3349 mAh',
      os: 'iOS 17',
    },
    pros: ['Great camera', 'Reliable performance', 'Long software support', 'Premium build'],
    cons: ['60Hz display', 'No fast charger', 'Expensive for specs'],
    rating: 4.5,
  },
  {
    id: '10',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    price: 79999,
    specifications: {
      display: '6.2" Dynamic AMOLED 2X',
      processor: 'Exynos 2400',
      ram: '8GB',
      storage: '256GB',
      camera: '50MP + 12MP + 10MP',
      battery: '4000 mAh',
      os: 'Android 14',
    },
    pros: ['Compact size', 'Good camera', 'AI features', 'Premium build'],
    cons: ['Exynos chip less efficient', 'Smaller battery', 'Expensive'],
    rating: 4.4,
  },
  {
    id: '11',
    name: 'OnePlus Nord 3',
    brand: 'OnePlus',
    price: 33999,
    specifications: {
      display: '6.74" AMOLED',
      processor: 'MediaTek Dimensity 9000',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP + 8MP + 2MP',
      battery: '5000 mAh',
      os: 'OxygenOS 13',
    },
    pros: ['Great value', 'Good performance', 'Fast charging', 'Clean software'],
    cons: ['Average camera', 'Plastic build', 'Limited updates'],
    rating: 4.1,
  },
  {
    id: '12',
    name: 'Redmi Note 13 Pro+',
    brand: 'Xiaomi',
    price: 27999,
    specifications: {
      display: '6.67" AMOLED',
      processor: 'MediaTek Dimensity 7200 Ultra',
      ram: '12GB',
      storage: '256GB',
      camera: '200MP + 8MP + 2MP',
      battery: '5000 mAh',
      os: 'MIUI 14',
    },
    pros: ['Excellent value', 'Great camera for price', 'Fast charging', 'Good display'],
    cons: ['MIUI ads', 'Average performance', 'Software updates'],
    rating: 4.0,
  },
  {
    id: '13',
    name: 'Samsung Galaxy A54',
    brand: 'Samsung',
    price: 38999,
    specifications: {
      display: '6.4" Super AMOLED',
      processor: 'Exynos 1380',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP + 12MP + 5MP',
      battery: '5000 mAh',
      os: 'Android 13',
    },
    pros: ['Good camera', 'Reliable brand', 'Water resistant', 'Good display'],
    cons: ['Average performance', 'Exynos chip', 'Pricey for mid-range'],
    rating: 4.2,
  },
  {
    id: '14',
    name: 'iPhone 14',
    brand: 'Apple',
    price: 69900,
    specifications: {
      display: '6.1" Super Retina XDR OLED',
      processor: 'A15 Bionic',
      ram: '6GB',
      storage: '128GB',
      camera: '12MP + 12MP',
      battery: '3279 mAh',
      os: 'iOS 16',
    },
    pros: ['Great camera', 'Reliable', 'Long support', 'Premium build'],
    cons: ['60Hz display', 'Older chip', 'No fast charger'],
    rating: 4.4,
  },
  {
    id: '15',
    name: 'iPhone 13',
    brand: 'Apple',
    price: 59900,
    specifications: {
      display: '6.1" Super Retina XDR OLED',
      processor: 'A15 Bionic',
      ram: '4GB',
      storage: '128GB',
      camera: '12MP + 12MP',
      battery: '3240 mAh',
      os: 'iOS 15',
    },
    pros: ['Great value', 'Good camera', 'Reliable', 'Long support'],
    cons: ['60Hz display', 'Older design', 'Smaller RAM'],
    rating: 4.3,
  },
  {
    id: '16',
    name: 'Google Pixel 8a',
    brand: 'Google',
    price: 52999,
    specifications: {
      display: '6.1" OLED',
      processor: 'Google Tensor G3',
      ram: '8GB',
      storage: '128GB',
      camera: '64MP + 13MP',
      battery: '4492 mAh',
      os: 'Android 14',
    },
    pros: ['Excellent camera software', 'Pure Android', 'AI features', 'Good value'],
    cons: ['Tensor chip less powerful', 'Average battery', 'Limited availability'],
    rating: 4.4,
  },
  {
    id: '17',
    name: 'OnePlus 12R',
    brand: 'OnePlus',
    price: 39999,
    specifications: {
      display: '6.78" LTPO AMOLED',
      processor: 'Snapdragon 8 Gen 2',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP + 8MP + 2MP',
      battery: '5500 mAh',
      os: 'OxygenOS 14',
    },
    pros: ['Great value', 'Fast charging', 'Good battery', 'Smooth performance'],
    cons: ['Average camera', 'No wireless charging', 'Plastic frame'],
    rating: 4.3,
  },
  {
    id: '18',
    name: 'Samsung Galaxy A15',
    brand: 'Samsung',
    price: 14999,
    specifications: {
      display: '6.5" Super AMOLED',
      processor: 'MediaTek Helio G99',
      ram: '6GB',
      storage: '128GB',
      camera: '50MP + 5MP + 2MP',
      battery: '5000 mAh',
      os: 'Android 14',
    },
    pros: ['Great display', 'Good battery', 'Affordable', 'Reliable brand'],
    cons: ['Average performance', 'Basic camera', 'Plastic build'],
    rating: 4.0,
  },
  {
    id: '19',
    name: 'Redmi Note 13',
    brand: 'Xiaomi',
    price: 14999,
    specifications: {
      display: '6.67" AMOLED',
      processor: 'Snapdragon 685',
      ram: '6GB',
      storage: '128GB',
      camera: '108MP + 8MP + 2MP',
      battery: '5000 mAh',
      os: 'MIUI 14',
    },
    pros: ['Great camera for price', 'Good display', 'Fast charging', 'Value for money'],
    cons: ['MIUI ads', 'Average performance', 'Software updates'],
    rating: 4.1,
  },
  {
    id: '20',
    name: 'Samsung Galaxy S23 FE',
    brand: 'Samsung',
    price: 49999,
    specifications: {
      display: '6.4" Dynamic AMOLED 2X',
      processor: 'Exynos 2200',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP + 12MP + 8MP',
      battery: '4500 mAh',
      os: 'Android 13',
    },
    pros: ['Premium build', 'Vibrant display', 'Versatile camera', 'Samsung ecosystem'],
    cons: ['Exynos chip less powerful', 'No charger included', 'Older Android version'],
    rating: 4.3,
  },
];

export interface SearchIntent {
  budget?: { min?: number; max?: number };
  brands?: string[];
  features?: string[];
  useCase?: string;
}

export function parseIntent(query: string): SearchIntent {
  const lowerQuery = query.toLowerCase();
  const intent: SearchIntent = {};

  // Parse budget
  const budgetPatterns = [
    /(?:under|below|less than|max|maximum|upto|up to)\s*(?:₹|rs|rupees?)?\s*(\d+)\s*(?:k|thousand|000)?/gi,
    /(?:above|over|more than|min|minimum|from)\s*(?:₹|rs|rupees?)?\s*(\d+)\s*(?:k|thousand|000)?/gi,
    /(?:₹|rs|rupees?)?\s*(\d+)\s*(?:k|thousand|000)?\s*(?:to|-|and)\s*(?:₹|rs|rupees?)?\s*(\d+)\s*(?:k|thousand|000)?/gi,
  ];

  for (const pattern of budgetPatterns) {
    const matches = lowerQuery.matchAll(pattern);
    for (const match of matches) {
      const amount = parseInt(match[1]) * (match[1].length <= 3 ? 1000 : 1);
      if (pattern.source.includes('under') || pattern.source.includes('below') || pattern.source.includes('max')) {
        intent.budget = { max: amount };
      } else if (pattern.source.includes('above') || pattern.source.includes('over') || pattern.source.includes('min')) {
        intent.budget = { min: amount };
      } else if (pattern.source.includes('around') || pattern.source.includes('about') || pattern.source.includes('approximately')) {
        // For "around ₹15k", set a range of ±20%
        intent.budget = { min: Math.floor(amount * 0.8), max: Math.ceil(amount * 1.2) };
      } else if (match[2]) {
        const amount2 = parseInt(match[2]) * (match[2].length <= 3 ? 1000 : 1);
        intent.budget = { min: Math.min(amount, amount2), max: Math.max(amount, amount2) };
      }
    }
  }

  // Parse brands
  const brandKeywords: { [key: string]: string } = {
    'apple': 'Apple',
    'iphone': 'Apple',
    'samsung': 'Samsung',
    'oneplus': 'OnePlus',
    'google': 'Google',
    'pixel': 'Google',
    'xiaomi': 'Xiaomi',
    'redmi': 'Xiaomi',
    'mi': 'Xiaomi',
    'vivo': 'Vivo',
    'realme': 'Realme',
    'nothing': 'Nothing',
  };

  const foundBrands: string[] = [];
  for (const [keyword, brand] of Object.entries(brandKeywords)) {
    if (lowerQuery.includes(keyword)) {
      foundBrands.push(brand);
    }
  }
  if (foundBrands.length > 0) {
    intent.brands = [...new Set(foundBrands)];
  }

  // Parse features
  const featureKeywords: { [key: string]: string } = {
    'camera': 'camera',
    'photography': 'camera',
    'photo': 'camera',
    'gaming': 'gaming',
    'game': 'gaming',
    'performance': 'performance',
    'battery': 'battery',
    'display': 'display',
    'screen': 'display',
    'fast charging': 'fast charging',
    'wireless charging': 'wireless charging',
    'waterproof': 'waterproof',
    'water resistant': 'waterproof',
    'compact': 'compact',
    'one-hand': 'compact',
    'one hand': 'compact',
    'small': 'compact',
    'lightweight': 'compact',
    'ois': 'ois',
    'optical image stabilization': 'ois',
    'eis': 'eis',
    'electronic image stabilization': 'eis',
  };

  const foundFeatures: string[] = [];
  for (const [keyword, feature] of Object.entries(featureKeywords)) {
    if (lowerQuery.includes(keyword)) {
      foundFeatures.push(feature);
    }
  }
  if (foundFeatures.length > 0) {
    intent.features = [...new Set(foundFeatures)];
  }

  // Parse use case
  if (lowerQuery.includes('best') || lowerQuery.includes('top') || lowerQuery.includes('recommend')) {
    if (lowerQuery.includes('camera') || lowerQuery.includes('photo')) {
      intent.useCase = 'camera';
    } else if (lowerQuery.includes('gaming') || lowerQuery.includes('game')) {
      intent.useCase = 'gaming';
    } else if (lowerQuery.includes('battery')) {
      intent.useCase = 'battery';
    } else if (lowerQuery.includes('budget') || lowerQuery.includes('cheap') || lowerQuery.includes('affordable')) {
      intent.useCase = 'budget';
    }
  }

  return intent;
}

export function searchPhones(intent: SearchIntent, limit: number = 5): Product[] {
  // If there's no actual intent, return empty array (don't show all phones)
  const hasActualIntent = 
    (intent.budget && (intent.budget.min || intent.budget.max)) ||
    (intent.brands && intent.brands.length > 0) ||
    (intent.features && intent.features.length > 0) ||
    intent.useCase;
  
  if (!hasActualIntent) {
    return [];
  }
  
  let results = [...phoneDatabase];

  // Filter by budget
  if (intent.budget) {
    if (intent.budget.min) {
      results = results.filter(phone => phone.price >= intent.budget!.min!);
    }
    if (intent.budget.max) {
      results = results.filter(phone => phone.price <= intent.budget!.max!);
    }
  }

  // Filter by brands
  if (intent.brands && intent.brands.length > 0) {
    results = results.filter(phone => 
      intent.brands!.some(brand => 
        phone.brand.toLowerCase() === brand.toLowerCase()
      )
    );
  }

  // Score and sort by relevance
  const scoredResults = results.map(phone => {
    let score = phone.rating || 0;

    // Boost score based on features
    if (intent.features) {
      intent.features.forEach(feature => {
        const featureLower = feature.toLowerCase();
        if (featureLower === 'camera' && phone.specifications.camera) {
          score += 0.5;
        }
        if (featureLower === 'gaming' && phone.specifications.processor) {
          if (phone.specifications.processor.includes('Snapdragon 8') || phone.specifications.processor.includes('A17') || phone.specifications.processor.includes('A16')) {
            score += 0.5;
          }
        }
        if (featureLower === 'battery' && phone.specifications.battery) {
          const batteryMatch = phone.specifications.battery.match(/(\d+)/);
          if (batteryMatch && parseInt(batteryMatch[1]) >= 4500) {
            score += 0.3;
          }
        }
        if (featureLower === 'fast charging' && phone.specifications.battery) {
          // Boost phones with larger batteries (likely to have fast charging)
          const batteryMatch = phone.specifications.battery.match(/(\d+)/);
          if (batteryMatch && parseInt(batteryMatch[1]) >= 4500) {
            score += 0.3;
          }
        }
        if (featureLower === 'compact') {
          // Boost smaller phones (display size < 6.3")
          const displayMatch = phone.specifications.display?.match(/(\d+\.?\d*)"/);
          if (displayMatch && parseFloat(displayMatch[1]) < 6.3) {
            score += 0.5;
          }
        }
      });
    }

    // Boost score based on use case
    if (intent.useCase === 'camera') {
      if (phone.specifications.camera && phone.specifications.camera.includes('MP')) {
        score += 0.3;
      }
    } else if (intent.useCase === 'gaming') {
      if (phone.specifications.processor && (phone.specifications.processor.includes('Snapdragon 8') || phone.specifications.processor.includes('A17') || phone.specifications.processor.includes('A16'))) {
        score += 0.5;
      }
    } else if (intent.useCase === 'battery') {
      const batteryMatch = phone.specifications.battery?.match(/(\d+)/);
      if (batteryMatch && parseInt(batteryMatch[1]) >= 5000) {
        score += 0.4;
      }
    } else if (intent.useCase === 'budget') {
      if (phone.price < 50000) {
        score += 0.3;
      }
    }

    return { phone, score };
  });

  // Sort by score (descending) and then by price (ascending for budget, descending for premium)
  scoredResults.sort((a, b) => {
    if (Math.abs(a.score - b.score) > 0.1) {
      return b.score - a.score;
    }
    // If scores are close, prefer lower price for budget queries, higher for others
    if (intent.useCase === 'budget' || (intent.budget && intent.budget.max && intent.budget.max < 50000)) {
      return a.phone.price - b.phone.price;
    }
    return b.phone.price - a.phone.price;
  });

  return scoredResults.slice(0, limit).map(item => item.phone);
}

// Find phones by name (for comparison and follow-up queries)
export function findPhonesByName(names: string[]): Product[] {
  const found: Product[] = [];
  const lowerNames = names.map(n => n.toLowerCase().trim());
  
  for (const phone of phoneDatabase) {
    const phoneName = `${phone.brand} ${phone.name}`.toLowerCase();
    for (const searchName of lowerNames) {
      // Check if search name matches phone name or brand
      if (phoneName.includes(searchName) || 
          phone.brand.toLowerCase().includes(searchName) ||
          phone.name.toLowerCase().includes(searchName)) {
        found.push(phone);
        break;
      }
    }
  }
  
  return found;
}

// Extract phone names from comparison query (e.g., "Pixel 8a vs OnePlus 12R")
export function extractPhoneNamesFromComparison(query: string): string[] {
  const comparisonPatterns = [
    /compare\s+(.+?)\s+vs\s+(.+?)(?:\?|$)/i,
    /(.+?)\s+vs\s+(.+?)(?:\?|$)/i,
    /compare\s+(.+?)\s+and\s+(.+?)(?:\?|$)/i,
  ];
  
  for (const pattern of comparisonPatterns) {
    const match = query.match(pattern);
    if (match) {
      return [match[1].trim(), match[2].trim()];
    }
  }
  
  return [];
}

export function getPhoneById(id: string): Product | undefined {
  return phoneDatabase.find(phone => phone.id === id);
}

export function comparePhones(ids: string[]): Product[] {
  return ids.map(id => getPhoneById(id)).filter(Boolean) as Product[];
}

