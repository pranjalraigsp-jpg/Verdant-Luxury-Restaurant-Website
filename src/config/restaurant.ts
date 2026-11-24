export interface RestaurantConfig {
  name: string;
  tagline: string;
  michelinStars: number;
  phone: string;
  displayPhone: string;
  email: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    postcode: string;
    country: string;
    full: string;
  };
  googleMaps: {
    embedUrl: string;
    directionsUrl: string;
    latitude: number;
    longitude: number;
  };
  googleReviews: {
    rating: number;
    totalReviews: number;
    profileUrl: string;
    badgeLabel: string;
    reviews: Array<{
      id: string;
      author: string;
      rating: number;
      timeAgo: string;
      reviewText: string;
      verified: boolean;
      avatar: string;
    }>;
  };
  openingHours: {
    lunch: string;
    dinner: string;
    sundayLunch: string;
    closed: string;
    schedule: Array<{ days: string; hours: string; service: string }>;
  };
  social: {
    instagram: string;
    facebook: string;
    tripadvisor: string;
    x: string;
    pinterest: string;
  };
  executiveChef: {
    name: string;
    title: string;
    bio: string;
  };
}

export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: 'VERDANT',
  tagline: 'The Art of Fine Dining',
  michelinStars: 3,
  phone: '+442079460888',
  displayPhone: '+44 (0) 20 7946 0888',
  email: 'concierge@verdant-dining.com',
  whatsappNumber: '442079460888',
  whatsappDisplay: '+44 20 7946 0888',
  address: {
    street: '14 Berkeley Square',
    neighborhood: 'Mayfair',
    city: 'London',
    postcode: 'W1J 5AR',
    country: 'United Kingdom',
    full: '14 Berkeley Square, Mayfair, London W1J 5AR, United Kingdom',
  },
  googleMaps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.284814838612!2d-0.14774312338006834!3d51.50796331065171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d7c079f539%3A0xc3f835b0e0085a85!2sBerkeley%20Square%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk',
    directionsUrl: 'https://maps.google.com/?q=14+Berkeley+Square+Mayfair+London+W1J+5AR',
    latitude: 51.50796,
    longitude: -0.14774,
  },
  googleReviews: {
    rating: 4.9,
    totalReviews: 382,
    profileUrl: 'https://search.google.com/local/reviews?placeid=ChIJOfV5wNcEdkgRhVoI4LA1-MM',
    badgeLabel: 'Google Verified Dining Experience',
    reviews: [
      {
        id: 'rev-1',
        author: 'Lady Eleanor Vance-Montgomery',
        rating: 5,
        timeAgo: '2 weeks ago',
        reviewText: 'An unforgettable evening. The Wagyu A5 with Périgord truffle jus was nothing short of transcendent. The sommelier pairing from their rare Burgundy cellar made every course feel like a private performance.',
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      },
      {
        id: 'rev-2',
        author: 'Julian Thorne',
        rating: 5,
        timeAgo: '1 month ago',
        reviewText: 'VERDANT sets a standard few restaurants in the world achieve. The botanical purity of their organic estate vegetables combined with theatrical tableside service is extraordinary. Truly worthy of three Michelin stars.',
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      },
      {
        id: 'rev-3',
        author: 'Camilla Dupont',
        rating: 5,
        timeAgo: '3 weeks ago',
        reviewText: 'We celebrated our 20th anniversary in the intimate Salon Vert. From the personalized gold calligraphy menus to the Hokkaido scallop crudo, every detail was immaculate.',
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      },
      {
        id: 'rev-4',
        author: 'Dr. Marcus Sterling',
        rating: 5,
        timeAgo: '2 months ago',
        reviewText: 'The Sphère Noire dessert alone justifies the reservation months in advance. The balance of smoked tonka bean, dark single-origin Guanaja, and 24-karat gold crisp is pure culinary genius.',
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
  openingHours: {
    lunch: '12:00 – 14:30 (Thursday – Sunday)',
    dinner: '17:30 – 23:30 (Tuesday – Sunday)',
    sundayLunch: '12:00 – 15:30',
    closed: 'Mondays (Estate Harvest & Kitchen Research)',
    schedule: [
      { days: 'Tuesday – Wednesday', hours: '17:30 – 23:30', service: 'Evening Degustation' },
      { days: 'Thursday – Saturday', hours: '12:00 – 14:30 & 17:30 – 23:30', service: 'Luncheon & Grand Service' },
      { days: 'Sunday', hours: '12:00 – 16:00 & 18:00 – 22:30', service: 'Sunday Salon & Dinner' },
      { days: 'Monday', hours: 'Closed', service: 'Private Harvest Day' },
    ],
  },
  social: {
    instagram: 'https://instagram.com/verdantdining',
    facebook: 'https://facebook.com/verdantdining',
    tripadvisor: 'https://tripadvisor.com/Restaurant_Review-Verdant_Dining_Mayfair_London',
    x: 'https://x.com/verdantdining',
    pinterest: 'https://pinterest.com/verdantdining',
  },
  executiveChef: {
    name: 'Aurélien Vance',
    title: 'Executive Chef & Culinary Director',
    bio: 'Mentored in Paris’s historic 3-star institutions and recipient of the Bocuse d’Or, Chef Aurélien Vance views gastronomy as an ephemeral sensory canvas, orchestrating seasonal harvests with avant-garde culinary architecture.',
  },
};
