import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { BotanicalBadge, BotanicalWatermark } from '../components/BotanicalElements';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import type { MenuItem, NavigationPage } from '../types';

interface MenuPageProps {
  onSelectDish: (dish: MenuItem) => void;
  onNavigate: (page: NavigationPage) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onSelectDish, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="relative w-full overflow-hidden bg-[#0A1915] pt-32 sm:pt-36 pb-12 sm:pb-14">
      {/* Ambient Radial Lighting */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[600px] w-[600px] rounded-full bg-[#1D493A]/25 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[600px] w-[600px] rounded-full bg-[#C8A96B]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center relative">
          <BotanicalWatermark variant="branch" className="-top-12 left-1/2 -translate-x-1/2 w-80 h-56 opacity-[0.09]" />
          <BotanicalBadge label="Our Culinary Repertoire" />

          <h1 className="font-playfair mt-3 text-4xl sm:text-6xl font-medium tracking-tight text-[#F2EBDD]">
            Crafted to{' '}
            <span className="font-cormorant italic font-normal text-gold-pure">
              Delight.
            </span>
          </h1>

          <p className="font-inter mt-5 text-base sm:text-[17px] font-light leading-[1.75] text-[rgba(240,235,225,0.88)] max-w-2xl">
            Explore our curated menu of fine dining creations. Select any dish to inspect its ingredients, flavor profile, sommelier notes, and order directly via WhatsApp.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 max-w-full overflow-x-auto flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 rounded-full border border-[#C8A96B]/25 bg-[#102A24]/80 p-2 backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group shrink-0 relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-inter text-xs sm:text-[13px] font-medium uppercase tracking-[0.14em] transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] text-[#0A1915] shadow-[0_4px_18px_rgba(200,169,107,0.35)] font-semibold'
                      : 'text-[#F2EBDD]/85 hover:text-[#C8A96B] hover:bg-white/5'
                  }`}
                >
                  <span className={`text-[11px] ${isActive ? 'text-[#0A1915]' : 'text-[#C8A96B]'}`}>
                    {cat.number}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Menu Grid: By Default Displays ONLY Food Image and Food Name */}
        <motion.div
          layout
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence>
            {filteredItems.map((dish, idx) => (
              <motion.div
                layout
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => onSelectDish(dish)}
                className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-[#C8A96B]/20 bg-gradient-to-b from-[#102A24] via-[#0E251F] to-[#0A1915] p-3.5 shadow-xl transition-all duration-500 hover:border-[#C8A96B] hover:shadow-[0_20px_45px_rgba(200,169,107,0.22)] hover:-translate-y-2"
              >
                {/* Food Image with Hover Zoom */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-xl bg-[#0A1915]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 rounded-full border border-[#C8A96B]/40 bg-[#0A1915]/80 px-3 py-1 font-cormorant text-xs text-[#D8BD83] backdrop-blur-md">
                    {dish.categoryLabel}
                  </div>

                  {/* Click to open badge on hover */}
                  <div className="absolute bottom-3 right-3 rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-3.5 py-1 font-inter text-[10px] font-semibold uppercase tracking-wider text-[#0A1915] shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Details & Order
                  </div>
                </div>

                {/* Food Name ONLY (Strict adherence to prompt rule) */}
                <div className="p-4 text-center">
                  <h3 className="font-playfair text-xl sm:text-2xl font-medium text-[#F2EBDD] transition-colors group-hover:text-gold-pure">
                    {dish.name}
                  </h3>
                  <p className="font-cormorant italic text-xs text-[#D8BD83]/80 mt-1">
                    {dish.frenchName}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tasting Menu Experience Banner */}
        <div className="mt-12 sm:mt-14 relative overflow-hidden rounded-3xl border border-[#C8A96B]/35 bg-gradient-to-r from-[#102A24] via-[#16382F] to-[#102A24] p-8 sm:p-12 shadow-2xl">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#C8A96B]/15 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#C8A96B] font-cormorant">
                <Sparkles className="h-3.5 w-3.5" />
                The Grand Degustation Experience
              </div>
              <h3 className="font-playfair mt-2 text-2xl sm:text-3xl font-medium text-[#F2EBDD]">
                A 12-Course Symphony of Senses
              </h3>
              <p className="font-inter mt-3 text-base sm:text-[17px] leading-[1.75] text-[rgba(240,235,225,0.88)] font-light">
                Chef Aurélien Vance presents the evening degustation paired with rarest vintages from our temperature-controlled cellar vaults in France and Japan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center sm:text-right">
                <span className="font-cormorant text-[12.5px] uppercase tracking-[0.16em] text-[rgba(240,235,225,0.88)]">
                  Per Guest
                </span>
                <div className="font-playfair text-3xl font-semibold text-gold-pure">
                  $385
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-8 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-lg transition-transform hover:scale-105"
              >
                Book Table for Degustation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
