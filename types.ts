
export interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  week: string;
  dates: string;
  status: 'active' | 'expired' | 'completed' | 'pending';
  celebrity?: string;
  contractId?: string;
  price?: number;
  remainingDays?: number;
  totalDays?: number;
}

export interface Celebrity {
  id: string;
  name: string;
  image: string;
  status: 'active' | 'inactive';
}

export type AppRoute = 
  | 'calendar' 
  | 'edition' 
  | 'gallery' 
  | 'signature' 
  | 'payment' 
  | 'confirmation' 
  | 'all-campaigns' 
  | 'history' 
  | 'rights' 
  | 'financial'
  | 'media-library';
