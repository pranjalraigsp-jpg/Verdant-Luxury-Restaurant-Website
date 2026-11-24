import React from 'react';
import { ArrowUp, MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import type { NavigationPage } from '../types';
import { RESTAURANT_CONFIG } from '../config/restaurant';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (page: NavigationPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#C8A96B]/20 bg-[#0A1915] text-[#F2EBDD] overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-56 w-[500px] rounded-full bg-[#1D493A]/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-10 sm:pt-12 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left">
          {/* Brand Info (Column 1) */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A96B]/50 bg-[#102A24] text-[#C8A96B]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="font-playfair text-xl tracking-[0.25em] font-semibold text-[#F2EBDD]">
                  VERDANT
                </span>
              </div>
              <p className="font-cormorant text-[13px] font-medium uppercase tracking-[0.2em] text-[#C8A96B]">
                The Art of Fine Dining
              </p>
              <p className="font-inter text-[14px] text-[rgba(240,235,225,0.88)] leading-relaxed font-light">
                An international luxury culinary destination celebrating seasonal botanical purity, exceptional ingredients, and Michelin-starred gastronomy.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {/* Three Thematic Gold Social Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={RESTAURANT_CONFIG.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A96B]/40 bg-[#102A24] text-[#C8A96B] transition-all duration-300 hover:border-[#C8A96B] hover:text-[#F2EBDD] hover:shadow-[0_0_12px_rgba(200,169,107,0.45)] hover:scale-105"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href={RESTAURANT_CONFIG.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A96B]/40 bg-[#102A24] text-[#C8A96B] transition-all duration-300 hover:border-[#C8A96B] hover:text-[#F2EBDD] hover:shadow-[0_0_12px_rgba(200,169,107,0.45)] hover:scale-105"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={RESTAURANT_CONFIG.social.tripadvisor}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A96B]/40 bg-[#102A24] text-[#C8A96B] transition-all duration-300 hover:border-[#C8A96B] hover:text-[#F2EBDD] hover:shadow-[0_0_12px_rgba(200,169,107,0.45)] hover:scale-105"
                  aria-label="TripAdvisor"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.1c1.8 0 3.3.9 4.3 2.2l-1.3 1.1c-.7-.9-1.8-1.5-3-1.5s-2.3.6-3 1.5l-1.3-1.1c1-1.3 2.5-2.2 4.3-2.2zm-5.5 11.9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm11 0c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM6.5 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm11 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                  </svg>
                </a>
              </div>

              {/* Accreditation Badge balancing the column height */}
              <div className="pt-2 border-t border-[#C8A96B]/15 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[13px] font-cormorant font-medium uppercase tracking-[0.16em] text-[#D8BD83]">
                  <span className="text-[#C8A96B]">★★★</span>
                  <span>Three Michelin Stars 2026</span>
                </div>
                <p className="font-inter text-[12.5px] text-[rgba(240,235,225,0.8)] font-light tracking-normal">
                  14 Berkeley Square · Mayfair, London
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-cormorant text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C8A96B]">
              Navigation
            </div>
            <ul className="font-inter text-[14px] text-[rgba(240,235,225,0.88)] space-y-2.5 font-light">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  About the Restaurant
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('menu')}
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Culinary Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Contact & Table Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-cormorant text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C8A96B]">
              <MapPin className="h-4 w-4" />
              Mayfair Sanctuary
            </div>
            <p className="font-inter text-[14px] text-[rgba(240,235,225,0.88)] leading-relaxed font-light">
              {RESTAURANT_CONFIG.address.full}
            </p>

            <div className="pt-2 flex items-center gap-2 font-cormorant text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C8A96B]">
              <Clock className="h-4 w-4" />
              Service Hours
            </div>
            <p className="font-inter text-[14px] text-[rgba(240,235,225,0.88)] font-light">
              Dinner: {RESTAURANT_CONFIG.openingHours.dinner}
            </p>
            <p className="font-inter text-[14px] text-[rgba(240,235,225,0.88)] font-light">
              Lunch: {RESTAURANT_CONFIG.openingHours.lunch}
            </p>
          </div>

          {/* Direct Concierge & Reservations */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-cormorant text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C8A96B]">
              <Phone className="h-4 w-4" />
              Private Concierge
            </div>
            <a
              href={`tel:${RESTAURANT_CONFIG.phone}`}
              className="block font-playfair text-base text-gold-pure hover:underline"
            >
              {RESTAURANT_CONFIG.displayPhone}
            </a>
            <a
              href={`mailto:${RESTAURANT_CONFIG.email}`}
              className="block font-inter text-[14px] text-[rgba(240,235,225,0.88)] hover:text-[#C8A96B] font-light"
            >
              {RESTAURANT_CONFIG.email}
            </a>
            <button
              onClick={() => handleLink('contact')}
              className="w-full rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] py-2.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-md transition-transform hover:scale-102"
            >
              Reserve a Table
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#C8A96B]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[13px] text-[rgba(240,235,225,0.85)] tracking-normal sm:tracking-wide text-center sm:text-left">
            © 2026 VERDANT Gastronomy Group. All rights reserved. Michelin Guide ★★★
          </p>

          <div className="flex items-center gap-4 text-[13px] text-[rgba(240,235,225,0.88)] font-inter">
            <span className="hover:text-[#C8A96B] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="inline-block h-1 w-1 rounded-full bg-[#C8A96B]/50 select-none" aria-hidden="true" />
            <span className="hover:text-[#C8A96B] cursor-pointer transition-colors">
              Terms &amp; Conditions
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[13px] font-inter uppercase tracking-[0.16em] text-[#D8BD83] hover:text-[#FFFFFF] transition-colors focus:outline-none"
          >
            <span>Back to Top</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C8A96B]/40 hover:border-[#C8A96B]">
              <ArrowUp className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
