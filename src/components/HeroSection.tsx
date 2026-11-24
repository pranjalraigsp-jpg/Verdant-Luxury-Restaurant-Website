import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, CalendarDays } from 'lucide-react';
import { Hero3DVisual } from './Hero3DVisual';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onExploreMenu,
}) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#102A24] pt-32 sm:pt-36 pb-12 sm:pb-16"
    >
      {/* Cinematic Ambient Glows & Lighting */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#1D493A]/30 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[650px] w-[650px] rounded-full bg-[#C8A96B]/12 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-[#0A1915]/80 blur-[100px]" />

      {/* Decorative Botanical Flourish (Subtle background vectors) */}
      <div className="pointer-events-none absolute top-20 right-10 opacity-5 select-none hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 20C100 80 50 110 50 160C75 160 100 135 100 100C100 135 125 160 150 160C150 110 100 80 100 20Z"
            stroke="#C8A96B"
            strokeWidth="1.5"
          />
          <path d="M100 20V180" stroke="#C8A96B" strokeWidth="1" />
          <circle cx="100" cy="20" r="4" fill="#C8A96B" />
          <circle cx="100" cy="180" r="4" fill="#C8A96B" />
        </svg>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 mx-auto my-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        {/* Left Column: Premium Typography & CTAs (Cols 1-7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-left lg:col-span-7"
        >
          {/* Small Luxury Tag / Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6">
            <span className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#C8A96B]" />
            <span className="font-cormorant text-xs sm:text-sm font-medium tracking-[0.32em] uppercase text-[#D8BD83]">
              An Extraordinary Dining Experience
            </span>
            <span className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#C8A96B]" />
          </div>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium leading-[1.08] tracking-tight text-[#F2EBDD]">
            Where Flavour <br />
            Meets{' '}
            <span className="relative inline-block font-cormorant italic font-normal text-gold-pure">
              Art.
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#C8A96B]/80 via-[#D8BD83] to-transparent" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter mt-6 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed font-light text-[#B9C5BC]/90 sm:leading-relaxed">
            Discover a world where exceptional ingredients, artistic presentation, and unforgettable flavours come together. An immersive celebration of haute gastronomy.
          </p>

          {/* Two Attractive CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            {/* Primary CTA: EXPLORE OUR MENU */}
            <button
              onClick={onExploreMenu}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] via-[#D8BD83] to-[#C8A96B] px-8 py-4 font-inter text-xs font-semibold uppercase tracking-[0.22em] text-[#0A1915] shadow-[0_8px_25px_rgba(200,169,107,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(200,169,107,0.5)] focus:outline-none"
            >
              <Utensils className="h-4 w-4 text-[#0A1915] transition-transform duration-300 group-hover:-rotate-12" />
              <span className="relative z-10">Explore Our Menu</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
            </button>

            {/* Secondary CTA: RESERVE YOUR TABLE */}
            <button
              onClick={onOpenReservation}
              className="group relative flex items-center justify-center gap-3 rounded-full border border-[#C8A96B]/50 bg-[#0A1915]/60 px-8 py-4 font-inter text-xs font-semibold uppercase tracking-[0.22em] text-[#F2EBDD] backdrop-blur-md transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#1D493A]/60 hover:text-white hover:shadow-[0_4px_20px_rgba(200,169,107,0.2)] focus:outline-none"
            >
              <CalendarDays className="h-4 w-4 text-[#C8A96B] transition-transform duration-300 group-hover:scale-110" />
              <span>Reserve Your Table</span>
            </button>
          </div>

          {/* Luxury Accolades Ribbon */}
          <div className="mt-12 sm:mt-14 pt-8 border-t border-[#C8A96B]/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <div className="font-playfair text-xl sm:text-2xl font-semibold text-[#D8BD83]">
                3 Stars
              </div>
              <p className="font-cormorant text-xs uppercase tracking-widest text-[#B9C5BC]/70 mt-0.5">
                Michelin Guide 2026
              </p>
            </div>

            <div>
              <div className="font-playfair text-xl sm:text-2xl font-semibold text-[#D8BD83]">
                No. 04
              </div>
              <p className="font-cormorant text-xs uppercase tracking-widest text-[#B9C5BC]/70 mt-0.5">
                World's 50 Best
              </p>
            </div>

            <div>
              <div className="font-playfair text-xl sm:text-2xl font-semibold text-[#D8BD83]">
                100%
              </div>
              <p className="font-cormorant text-xs uppercase tracking-widest text-[#B9C5BC]/70 mt-0.5">
                Estate Biodynamic
              </p>
            </div>

            <div>
              <div className="font-playfair text-xl sm:text-2xl font-semibold text-[#D8BD83]">
                1,850+
              </div>
              <p className="font-cormorant text-xs uppercase tracking-widest text-[#B9C5BC]/70 mt-0.5">
                Grand Cru Cellar
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D-Inspired Food Parallax Composition (Cols 8-12) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative lg:col-span-5 flex items-center justify-center"
        >
          <Hero3DVisual />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center pt-6">
        <a
          href="#menu"
          onClick={(e) => {
            e.preventDefault();
            onExploreMenu();
          }}
          className="group flex flex-col items-center gap-2 text-[#D8BD83]/70 transition-colors duration-300 hover:text-[#C8A96B]"
        >
          <span className="font-cormorant text-[11px] uppercase tracking-[0.35em]">
            Scroll to Discover
          </span>
          <div className="relative flex h-8 w-5 justify-center rounded-full border border-[#C8A96B]/40 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="h-1.5 w-1 rounded-full bg-[#C8A96B]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
