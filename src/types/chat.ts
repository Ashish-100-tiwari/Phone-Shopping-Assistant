export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  products?: Product[];
  comparison?: ComparisonData;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image?: string;
  specifications: {
    display?: string;
    processor?: string;
    ram?: string;
    storage?: string;
    camera?: string;
    battery?: string;
    os?: string;
  };
  pros: string[];
  cons: string[];
  rating?: number;
}

export interface ComparisonData {
  products: Product[];
  comparisonPoints: string[];
}

