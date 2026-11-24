import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wine, ChevronRight, Eye } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import type { MenuItem } from '../types';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onOpenReservation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems =
    selectedCategory === 'all'
      ? MENU_ITEMS.filter((item) => item.featured)
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="menu"
      className="relative w-full overflow-hidden bg-[#0A1915] py-24 sm:py-32"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-[#1D493A]/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[600px] w-[600px] rounded-full bg-[#C8A96B]/8 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C8A96B]" />
            <span className="font-cormorant text-xs sm:text-sm font-medium tracking-[0.35em] uppercase text-[#D8BD83]">
              Our Culinary Collection
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C8A96B]" />
          </div>

          {/* Main Section Heading */}
          <h2 className="font-playfair mt-4 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F2EBDD]">
            Crafted to{' '}
            <span className="font-cormorant italic font-normal text-gold-pure">
              Delight.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="font-inter mt-5 text-base sm:text-lg font-light leading-relaxed text-[#B9C5BC]/85">
            Explore a collection of signature creations prepared with passion and the finest ingredients. Each plate is an orchestration of seasonal terroir, rare vintages, and culinary precision.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-10 max-w-full overflow-x-auto flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 rounded-full border border-[#C8A96B]/20 bg-[#102A24]/80 p-1.5 backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group shrink-0 relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-inter text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] text-[#0A1915] shadow-[0_4px_18px_rgba(200,169,107,0.35)] font-semibold'
                      : 'text-[#F2EBDD]/75 hover:text-[#C8A96B] hover:bg-white/5'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#0A1915]' : 'text-[#C8A96B]'}`}>
                    {cat.number}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Culinary Cards Grid */}
        <motion.div
          layout
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
        >
          <AnimatePresence>
            {filteredItems.map((dish, idx) => (
              <motion.article
                layout
                key={dish.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#C8A96B]/20 bg-gradient-to-b from-[#102A24]/90 via-[#0E251F]/90 to-[#0A1915]/95 shadow-[0_15px_45px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-500 hover:border-[#C8A96B]/60 hover:shadow-[0_20px_60px_rgba(200,169,107,0.15)]"
              >
                {/* Visual Image Container with 3D Tilt Zoom */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A1915]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:contrast-105"
                  />

                  {/* Gradient overlays for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A24] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    {/* Category Number Pill */}
                    <div className="flex items-center gap-1.5 rounded-full border border-[#C8A96B]/40 bg-[#0A1915]/85 px-3 py-1 font-playfair text-xs font-semibold text-[#D8BD83] backdrop-blur-md">
                      <span className="font-cormorant text-[11px] uppercase tracking-wider text-[#B9C5BC]/80">
                        Course
                      </span>
                      <span>{dish.categoryNumber}</span>
                    </div>

                    {/* Price Pill */}
                    <div className="rounded-full border border-[#C8A96B] bg-[#0A1915]/90 px-4 py-1 font-playfair text-sm font-semibold text-gold-pure shadow-md backdrop-blur-md">
                      ${dish.price}
                    </div>
                  </div>

                  {/* Quick Sommelier Pairing Badge */}
                  {dish.sommelierPairing && (
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1915]/80 px-3 py-1 text-[11px] text-[#F2EBDD]/90 backdrop-blur-md">
                      <Wine className="h-3.5 w-3.5 text-[#C8A96B]" />
                      <span className="font-cormorant truncate max-w-[220px]">
                        {dish.sommelierPairing.wine}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Editorial Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    {/* Category & French Culinary Title */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-cormorant text-xs font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
                        {dish.categoryLabel}
                      </span>
                      {dish.featured && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#D8BD83] font-inter">
                          <Sparkles className="h-3 w-3 text-[#C8A96B]" />
                          Signature
                        </span>
                      )}
                    </div>

                    {/* English Main Dish Title */}
                    <h3 className="font-playfair mt-2 text-2xl font-medium tracking-tight text-[#F2EBDD] transition-colors group-hover:text-gold-pure">
                      {dish.name}
                    </h3>

                    {/* French Heritage Subtitle */}
                    <p className="font-cormorant italic text-sm text-[#D8BD83]/85 mt-0.5">
                      {dish.frenchName}
                    </p>

                    {/* Description */}
                    <p className="font-inter mt-3.5 text-sm font-light leading-relaxed text-[#B9C5BC]/90">
                      {dish.description}
                    </p>

                    {/* Key Ingredient Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[#C8A96B]/20 bg-[#1D493A]/30 px-2.5 py-0.5 font-inter text-[10px] tracking-wider text-[#D8BD83]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="mt-8 flex items-center justify-between border-t border-[#C8A96B]/15 pt-5">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="group/btn inline-flex items-center gap-2 font-inter text-xs font-medium uppercase tracking-[0.18em] text-[#D8BD83] transition-colors hover:text-[#FFFFFF] focus:outline-none"
                    >
                      <Eye className="h-3.5 w-3.5 text-[#C8A96B] transition-transform group-hover/btn:scale-125" />
                      <span>Discover Story & Notes</span>
                      <ChevronRight className="h-3.5 w-3.5 text-[#C8A96B] transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <button
                      onClick={onOpenReservation}
                      className="rounded-full border border-[#C8A96B]/40 bg-[#102A24] px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-wider text-[#F2EBDD] transition-all hover:border-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#0A1915]"
                    >
                      Reserve Dish
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Sommelier Tasting Menu Callout Banner */}
        <div className="mt-16 sm:mt-24 relative overflow-hidden rounded-3xl border border-[#C8A96B]/35 bg-gradient-to-r from-[#102A24] via-[#16382F] to-[#102A24] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#C8A96B]/15 blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A96B] font-cormorant">
                <Sparkles className="h-3.5 w-3.5" />
                The Grand Degustation Experience
              </div>
              <h3 className="font-playfair mt-2 text-2xl sm:text-3xl font-medium text-[#F2EBDD]">
                A 12-Course Symphony of Senses
              </h3>
              <p className="font-inter mt-3 text-sm text-[#B9C5BC]/90 leading-relaxed font-light">
                For the ultimate connoisseur, Chef Aurélien Vance presents the evening degustation paired with rarest vintages from our temperature-controlled cellar vaults in France and Japan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center sm:text-right">
                <span className="font-cormorant text-xs uppercase tracking-widest text-[#B9C5BC]/80">
                  Per Guest
                </span>
                <div className="font-playfair text-3xl font-semibold text-gold-pure">
                  $385
                </div>
              </div>

              <button
                onClick={onOpenReservation}
                className="rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-8 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-lg transition-transform hover:scale-105"
              >
                Book Degustation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
