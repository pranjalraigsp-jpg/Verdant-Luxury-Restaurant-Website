import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { SoundAtmosphere } from './SoundAtmosphere';
import type { NavigationPage } from '../types';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenReservation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: Array<{ page: NavigationPage; label: string }> = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'menu', label: 'Menu' },
    { page: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReserveClick = () => {
    onNavigate('contact');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById('table-booking-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-[padding,background-color,box-shadow,backdrop-filter] duration-500 ease-in-out ${
          isScrolled
            ? 'bg-[#102A24]/95 py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.65)] backdrop-blur-md'
            : 'bg-transparent py-5 sm:py-6 shadow-none'
        }`}
      >
        <div className="mx-auto flex h-12 sm:h-14 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Left: Brand Logo & Minimal Botanical Emblem */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-3.5 text-left focus:outline-none overflow-visible"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8A96B]/40 bg-[#0A1915]/60 transition-transform duration-500 group-hover:scale-105 group-hover:border-[#C8A96B] group-hover:shadow-[0_0_15px_rgba(200,169,107,0.3)]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#C8A96B] transition-transform duration-500 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8.3 7 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.3-1-1.3-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4" opacity="0.15" />
                <path d="M12 3c0 7-5 10-5 15 3.5 0 5-3 5-6 0 3 1.5 6 5 6 0-5-5-8-5-15z" fill="#C8A96B" fillOpacity="0.25" />
                <path d="M12 3v18" stroke="#D8BD83" strokeWidth="1.2" />
                <path d="M12 9c-2 1-3.5 3-3.5 5" stroke="#C8A96B" strokeWidth="1" />
                <path d="M12 13c2 1 3.5 3 3.5 5" stroke="#C8A96B" strokeWidth="1" />
              </svg>
              <div className="absolute inset-0 rounded-full border border-[#D8BD83]/20 animate-ping opacity-20 pointer-events-none" />
            </div>

            <div className="flex flex-col justify-center overflow-visible">
              <span className="font-playfair text-xl sm:text-2xl font-semibold tracking-[0.22em] text-[#F2EBDD] leading-none transition-colors duration-300 group-hover:text-gold-pure">
                VERDANT
              </span>
              <span className="mt-1 font-cormorant text-xs sm:text-[11px] font-medium uppercase tracking-[0.26em] text-[#D8BD83] opacity-90 leading-normal whitespace-nowrap overflow-visible">
                The Art of Fine Dining
              </span>
            </div>
          </button>

          {/* Center: HOME | ABOUT | MENU | CONTACT */}
          <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleLinkClick(item.page)}
                  className={`group relative font-inter text-xs uppercase tracking-[0.22em] transition-colors duration-300 focus:outline-none ${
                    isActive ? 'text-[#C8A96B] font-medium' : 'text-[#F2EBDD]/85 hover:text-[#C8A96B]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right: Audio Ambience & Reserve A Table CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <SoundAtmosphere />

            <button
              onClick={handleReserveClick}
              className="group relative overflow-hidden rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] via-[#D8BD83] to-[#C8A96B] px-6 py-2.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-[0_4px_20px_rgba(200,169,107,0.25)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_6px_28px_rgba(200,169,107,0.45)] focus:outline-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#0A1915]" />
                Reserve a Table
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <SoundAtmosphere />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#0A1915]/60 text-[#F2EBDD] transition-colors hover:border-[#C8A96B] hover:text-[#C8A96B] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-between bg-[#0A1915]/95 px-8 py-24 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-6'
        }`}
      >
        <div className="flex flex-col gap-7 text-center pt-8">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
            <span>✦</span>
            <span>Michelin-Starred Gastronomy</span>
            <span>✦</span>
          </div>

          {navLinks.map((item) => (
            <button
              key={item.page}
              onClick={() => handleLinkClick(item.page)}
              className={`font-playfair text-2xl tracking-widest transition-colors ${
                currentPage === item.page ? 'text-[#C8A96B]' : 'text-[#F2EBDD] hover:text-[#C8A96B]'
              }`}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 pb-12">
          <button
            onClick={handleReserveClick}
            className="w-full rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] py-4 font-inter text-xs font-semibold uppercase tracking-[0.25em] text-[#0A1915] shadow-lg"
          >
            Reserve a Table
          </button>
          <p className="text-center font-cormorant text-xs text-[#B9C5BC]/60">
            Mayfair • Place Vendôme • Ginza
          </p>
        </div>
      </div>
    </>
  );
};
