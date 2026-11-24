export type NavigationPage = 'home' | 'about' | 'menu' | 'contact';

export type MenuCategoryType = 
  | 'starters' 
  | 'mains' 
  | 'pasta' 
  | 'desserts' 
  | 'beverages' 
  | 'specials';

export interface MenuItem {
  id: string;
  categoryNumber: string; // e.g. "01", "02", "03"
  category: MenuCategoryType;
  categoryLabel: string;
  name: string;
  frenchName: string;
  description: string;
  price: number;
  featured: boolean; // featured on homepage
  image: string;
  tags: string[];
  ingredients: string[];
  dietary?: string[]; // e.g. "Gluten-Free", "Vegan", "Organic", "Halal Option"
  sommelierPairing?: {
    wine: string;
    vintage: string;
    notes: string;
  };
  flavorProfile?: {
    umami: number;
    richness: number;
    delicacy: number;
    aroma: number;
  };
  chefNotes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'cuisine' | 'chef' | 'ambience' | 'moments';
  image: string;
  description: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface TableBookingFormState {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}

export interface EventEnquiryFormState {
  fullName: string;
  phone: string;
  email: string;
  eventType: 'birthday' | 'anniversary' | 'private-dining' | 'corporate' | 'special-occasion';
  date: string;
  guests: number;
  message: string;
}
