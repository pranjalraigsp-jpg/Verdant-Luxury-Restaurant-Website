import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, CalendarDays, ArrowRight, Star, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Hero3DVisual } from '../components/Hero3DVisual';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { BotanicalBadge, BotanicalWatermark, BotanicalDivider } from '../components/BotanicalElements';
import { GALLERY_ITEMS } from '../data/galleryData';
import { MENU_ITEMS } from '../data/menuData';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import type { MenuItem, GalleryItem, NavigationPage } from '../types';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectDish: (dish: MenuItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectDish }) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Featured dishes for homepage signature grid (displaying only Image + Name as strictly specified)
  const signatureDishes = MENU_ITEMS.filter((item) => item.featured).slice(0, 4);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION 01: CINEMATIC HERO SECTION WITH VIDEO BACKGROUND & 3D FOOD VISUAL */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#0A1915] pt-32 sm:pt-36 pb-12 sm:pb-16"
      >
        {/* Full-Screen Luxury Restaurant Interior Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1920&auto=format&fit=crop"
            className="h-full w-full object-cover object-center filter brightness-[0.45] contrast-[1.1] scale-105 transition-all duration-1000"
          >
            {/* Reliable royalty-free luxury restaurant interior video streams */}
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-dining-room-in-a-luxury-restaurant-41441-large.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.coverr.co/videos/coverr-fine-dining-in-a-restaurant-9154/1080p.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark Emerald & Vignette Overlays for Maximum Contrast & Luxury Ambience */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1915]/95 via-[#102A24]/80 to-[#0A1915]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,25,21,0.85)_100%)]" />
        </div>

        {/* Ambient Radial Glows */}
        <div className="pointer-events-none absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-[#1D493A]/40 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/3 -right-20 h-[600px] w-[600px] rounded-full bg-[#C8A96B]/15 blur-[160px]" />

        {/* Hero Grid Container */}
        <div className="relative z-10 mx-auto my-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
          {/* Left Column: Premium Typography & CTAs (Cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col text-left lg:col-span-7 relative"
          >
            {/* Faint gold line-art botanical watermark */}
            <BotanicalWatermark variant="branch" className="-top-14 -left-10 w-96 h-64 opacity-[0.10]" />

            {/* Small Label with botanical leaf ornament */}
            <BotanicalBadge label="An Extraordinary Dining Experience" className="mb-5 sm:mb-6" />

            {/* Main Heading */}
            <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium leading-[1.08] tracking-tight text-[#F2EBDD]">
              Where Flavour <br />
              Meets{' '}
              <span className="relative inline-block font-cormorant italic font-normal text-gold-pure">
                Art.
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#C8A96B]/80 via-[#D8BD83] to-transparent" />
              </span>
            </h1>

            {/* Description */}
            <p className="font-inter mt-6 sm:mt-7 max-w-xl text-base sm:text-[17px] leading-[1.75] font-light text-[rgba(240,235,225,0.88)]">
              Discover a world of exceptional flavours, artistic presentation, and unforgettable hospitality.
            </p>

            {/* Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <button
                onClick={() => onNavigate('menu')}
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] via-[#D8BD83] to-[#C8A96B] px-8 py-4 font-inter text-xs font-semibold uppercase tracking-[0.22em] text-[#0A1915] shadow-[0_8px_25px_rgba(200,169,107,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(200,169,107,0.5)] focus:outline-none"
              >
                <Utensils className="h-4 w-4 text-[#0A1915] transition-transform duration-300 group-hover:-rotate-12" />
                <span className="relative z-10">Explore Our Menu</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="group relative flex items-center justify-center gap-3 rounded-full border border-[#C8A96B]/50 bg-[#0A1915]/70 px-8 py-4 font-inter text-xs font-semibold uppercase tracking-[0.22em] text-[#F2EBDD] backdrop-blur-md transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#1D493A]/60 hover:text-white hover:shadow-[0_4px_20px_rgba(200,169,107,0.2)] focus:outline-none"
              >
                <CalendarDays className="h-4 w-4 text-[#C8A96B] transition-transform duration-300 group-hover:scale-110" />
                <span>Reserve Your Table</span>
              </button>
            </div>

            {/* Michelin Accolades Strip */}
            <div className="mt-12 sm:mt-14 pt-8 border-t border-[#C8A96B]/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <div className="font-playfair text-xl sm:text-2xl font-semibold text-[#D8BD83]">
                  3 Stars
                </div>
                <p className="font-cormorant text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[rgba(240,235,225,0.88)] mt-1">
                  Michelin Guide 2026
                </p>
              </div>

              <div>
                <div className="font-playfair text-xl sm:text-2xl font-semibold text-[#D8BD83]">
                  No. 04
                </div>
                <p className="font-cormorant text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[rgba(240,235,225,0.88)] mt-1">
                  World's 50 Best
                </p>
              </div>

              <div>
                <div className="font-playfair text-xl sm:text-2xl font-semibold text-[#D8BD83]">
                  100%
                </div>
                <p className="font-cormorant text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[rgba(240,235,225,0.88)] mt-1">
                  Estate Biodynamic
                </p>
              </div>

              <div>
                <div className="font-playfair text-xl sm:text-2xl font-semibold text-[#D8BD83]">
                  1,850+
                </div>
                <p className="font-cormorant text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[rgba(240,235,225,0.88)] mt-1">
                  Grand Cru Cellar
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Food Visual with Mouse Parallax & Hotspots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative lg:col-span-5 flex items-center justify-center"
          >
            <Hero3DVisual />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 mx-auto flex flex-col items-center justify-center pt-6">
          <a
            href="#about-intro"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about-intro')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex flex-col items-center gap-2 text-[#D8BD83]/70 transition-colors duration-300 hover:text-[#C8A96B]"
          >
            <span className="font-cormorant text-[12.5px] uppercase tracking-[0.2em] text-[#D8BD83]/90">
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

      {/* ========================================================================= */}
      {/* SECTION 02: ABOUT THE RESTAURANT / INTRODUCTION                           */}
      {/* ========================================================================= */}
      <BotanicalDivider />
      <section
        id="about-intro"
        className="relative w-full bg-[#102A24] py-24 sm:py-32 overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Cinematic Restaurant Interior Photograph */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#C8A96B]/35 shadow-[0_25px_60px_rgba(0,0,0,0.65)] group">
                <img
                  src="./mayfair-sanctuary.jpg"
                  alt="VERDANT Mayfair Sanctuary Dining Conservatory"
                  className="h-[460px] sm:h-[540px] w-full object-cover filter brightness-[0.9] contrast-[1.05] saturate-[0.88] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle emerald palette tint */}
                <div className="absolute inset-0 bg-[#102A24]/20 mix-blend-color pointer-events-none" />
                {/* High-legibility deep gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1915]/95 via-[#0A1915]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-cormorant text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D8BD83]">
                      Architecture &amp; Botanical Design
                    </span>
                    <div className="rounded-full border border-[#C8A96B]/50 bg-[#0A1915]/80 px-3.5 py-1 text-xs text-[#D8BD83] backdrop-blur-md">
                      Est. 2018
                    </div>
                  </div>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#F2EBDD] tracking-wide">
                    The Mayfair Sanctuary
                  </h3>
                  <p className="font-inter text-xs sm:text-[13px] text-[rgba(240,235,225,0.85)] font-light mt-1.5 leading-relaxed">
                    Our flagship glasshouse dining conservatory, surrounded by living botanical flora and candlelit emerald velvet.
                  </p>
                </div>
              </div>

              {/* Decorative Floating Geometry */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl border border-[#C8A96B]/20 bg-[#1D493A]/30 backdrop-blur-xl -z-10 hidden sm:block" />
            </motion.div>

            {/* Right: Editorial Narrative Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-6 flex flex-col text-left relative"
            >
              <BotanicalWatermark variant="leaves" className="-top-12 -right-6 w-80 h-56 opacity-[0.09]" />
              <BotanicalBadge label="Discover Our Story" />

              {/* Heading */}
              <h2 className="font-playfair mt-3 text-3xl sm:text-5xl font-medium tracking-tight text-[#F2EBDD] leading-tight">
                Where Every Moment Becomes an Experience.
              </h2>

              {/* Description */}
              <p className="font-inter mt-5 text-base sm:text-[17px] leading-[1.75] text-[rgba(240,235,225,0.88)] font-light">
                At Verdant, dining is more than just food. It is a celebration of craftsmanship, exceptional ingredients, thoughtful hospitality, and unforgettable moments.
              </p>

              {/* Three Highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-[#C8A96B]/20 bg-[#0A1915]/60 p-4 transition-colors hover:border-[#C8A96B]/50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8A96B]/15 text-[#C8A96B]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base font-semibold text-[#F2EBDD]">
                      Exceptional Culinary Craftsmanship
                    </h3>
                    <p className="font-inter text-[14px] sm:text-[15px] text-[rgba(240,235,225,0.88)] mt-1.5 font-light leading-[1.7]">
                      Every plate is an orchestrated harmony of classical French reduction techniques and modern botanical precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#C8A96B]/20 bg-[#0A1915]/60 p-4 transition-colors hover:border-[#C8A96B]/50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8A96B]/15 text-[#C8A96B]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base font-semibold text-[#F2EBDD]">
                      Premium Fresh Ingredients
                    </h3>
                    <p className="font-inter text-[14px] sm:text-[15px] text-[rgba(240,235,225,0.88)] mt-1.5 font-light leading-[1.7]">
                      Heirloom vegetables and micro-botanicals harvested daily at sunrise from our private 40-hectare biodynamic estate farm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#C8A96B]/20 bg-[#0A1915]/60 p-4 transition-colors hover:border-[#C8A96B]/50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8A96B]/15 text-[#C8A96B]">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base font-semibold text-[#F2EBDD]">
                      Unforgettable Dining Atmosphere
                    </h3>
                    <p className="font-inter text-[14px] sm:text-[15px] text-[rgba(240,235,225,0.88)] mt-1.5 font-light leading-[1.7]">
                      Warm candlelight, acoustic intimacy, and intuitive Michelin-trained service designed for unforgettable memories.
                    </p>
                  </div>
                </div>
              </div>

              {/* Button: EXPLORE OUR STORY */}
              <div className="mt-8">
                <button
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center gap-3 rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-8 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span>Explore Our Story</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03: OUR SIGNATURE MENU                                             */}
      {/* IMPORTANT RULE: On Homepage, display ONLY Food Image & Food Name on cards  */}
      {/* ========================================================================= */}
      <BotanicalDivider />
      <section
        id="signature-menu"
        className="relative w-full bg-[#0A1915] py-24 sm:py-32 overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center relative">
            <BotanicalWatermark variant="branch" className="-top-12 left-1/2 -translate-x-1/2 w-80 h-56 opacity-[0.09]" />
            <BotanicalBadge label="Culinary Highlights" />

            <h2 className="font-playfair mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-[#F2EBDD]">
              A Taste of Excellence
            </h2>

            <p className="font-inter mt-4 text-base sm:text-[17px] font-light leading-[1.75] text-[rgba(240,235,225,0.88)]">
              Discover our carefully curated selection of culinary creations. Click on any dish to explore ingredients, story, and order via WhatsApp.
            </p>
          </div>

          {/* Minimalist Signature Grid: ONLY Food Image and Food Name on Card */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDishes.map((dish, idx) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onClick={() => onSelectDish(dish)}
                className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-[#C8A96B]/25 bg-gradient-to-b from-[#102A24] to-[#0A1915] p-3 shadow-lg transition-all duration-500 hover:border-[#C8A96B] hover:shadow-[0_15px_35px_rgba(200,169,107,0.2)] hover:-translate-y-1.5"
              >
                {/* Food Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-xl bg-[#0A1915]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  
                  {/* Subtle Hover Pill */}
                  <div className="absolute bottom-3 right-3 rounded-full border border-[#C8A96B]/50 bg-[#0A1915]/85 px-3 py-1 font-inter text-[11px] uppercase tracking-wider text-[#D8BD83] backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Inspect & Order
                  </div>
                </div>

                {/* Food Name ONLY (Strict adherence to prompt rule) */}
                <div className="p-4 text-center">
                  <h3 className="font-playfair text-lg sm:text-xl font-medium text-[#F2EBDD] transition-colors group-hover:text-gold-pure">
                    {dish.name}
                  </h3>
                  <p className="font-cormorant italic text-sm text-[#D8BD83] mt-1">
                    {dish.frenchName}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* VIEW FULL MENU CTA */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => onNavigate('menu')}
              className="group inline-flex items-center gap-3 rounded-full border border-[#C8A96B] bg-[#102A24] px-9 py-4 font-inter text-xs font-semibold uppercase tracking-[0.22em] text-[#F2EBDD] transition-all hover:bg-[#C8A96B] hover:text-[#0A1915] shadow-lg hover:scale-103"
            >
              <span>View Full Menu</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04: RESTAURANT PORTFOLIO / GALLERY                                */}
      {/* ========================================================================= */}
      <BotanicalDivider />
      <section
        id="gallery"
        className="relative w-full bg-[#102A24] py-24 sm:py-32 overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center relative">
            <BotanicalWatermark variant="leaves" className="-top-12 left-1/2 -translate-x-1/2 w-80 h-56 opacity-[0.09]" />
            <BotanicalBadge label="Visual Symphony" />

            <h2 className="font-playfair mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-[#F2EBDD]">
              Atmosphere & Artistry
            </h2>

            <p className="font-inter mt-4 text-base sm:text-[17px] font-light leading-[1.75] text-[rgba(240,235,225,0.88)]">
              An intimate look into our Michelin dining salon, kitchen theatre, and the passionate artisans behind VERDANT. Click any photograph to view in high resolution.
            </p>
          </div>

          {/* Asymmetric Masonry-style Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedGalleryItem(item)}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl border border-[#C8A96B]/25 bg-[#0A1915] shadow-xl transition-all duration-500 hover:border-[#C8A96B] hover:shadow-[0_15px_35px_rgba(200,169,107,0.25)] ${
                  item.aspect === 'wide' ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1915] via-transparent to-black/20 opacity-80 transition-opacity group-hover:opacity-60" />

                  <div className="absolute bottom-5 left-5 right-5 flex flex-col text-left">
                    <span className="font-cormorant text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[#D8BD83]">
                      {item.category}
                    </span>
                    <h3 className="font-playfair text-lg sm:text-xl font-medium text-[#F2EBDD] mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Lightbox */}
        <GalleryLightbox
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
        />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05: GOOGLE REVIEWS & RESERVATION CTA                              */}
      {/* ========================================================================= */}
      <BotanicalDivider />
      <section
        id="reviews-cta"
        className="relative w-full bg-[#0A1915] pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Google Reviews Header */}
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center relative">
            <BotanicalWatermark variant="branch" className="-top-12 left-1/2 -translate-x-1/2 w-80 h-56 opacity-[0.09]" />
            <BotanicalBadge label="Guest Acclaim" />

            <h2 className="font-playfair mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-[#F2EBDD]">
              What Our Guests Say
            </h2>

            {/* Google Rating Badge */}
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#C8A96B]/30 bg-[#102A24]/70 px-5 py-2 backdrop-blur-md">
              <div className="flex items-center text-[#C8A96B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C8A96B]" />
                ))}
              </div>
              <span className="font-playfair font-semibold text-sm text-[#F2EBDD]">
                {RESTAURANT_CONFIG.googleReviews.rating} / 5.0
              </span>
              <span className="text-[#B9C5BC]/60">•</span>
              <span className="font-inter text-[13px] text-[rgba(240,235,225,0.88)]">
                {RESTAURANT_CONFIG.googleReviews.totalReviews} Google Reviews
              </span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESTAURANT_CONFIG.googleReviews.reviews.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-2xl border border-[#C8A96B]/20 bg-gradient-to-b from-[#102A24] to-[#0A1915] p-6 text-left shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="h-10 w-10 rounded-full object-cover border border-[#C8A96B]/40"
                    />
                    <div>
                      <h4 className="font-playfair text-sm font-semibold text-[#F2EBDD] flex items-center gap-1.5">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-1 text-[12px] text-[rgba(240,235,225,0.75)]">
                        <span>{rev.timeAgo}</span>
                        {rev.verified && (
                          <span className="flex items-center gap-0.5 text-[#C8A96B]">
                            <ShieldCheck className="h-3 w-3" />
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-[#C8A96B] mt-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#C8A96B]" />
                    ))}
                  </div>

                  <p className="font-inter text-[14px] leading-[1.7] text-[rgba(240,235,225,0.88)] mt-3 font-light italic">
                    "{rev.reviewText}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 font-cormorant text-[12.5px] text-[#C8A96B] font-medium uppercase tracking-[0.16em]">
                  Google Dining Review
                </div>
              </div>
            ))}
          </div>

          {/* Button linking to Google Reviews */}
          <div className="mt-8 flex justify-center">
            <a
              href={RESTAURANT_CONFIG.googleReviews.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-inter text-[13px] uppercase tracking-[0.16em] text-[#D8BD83] hover:text-[#FFFFFF] transition-colors"
            >
              <span>Read All Verified Google Reviews</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#C8A96B]" />
            </a>
          </div>

          {/* Reservation CTA Box */}
          <div className="mt-12 sm:mt-14 relative overflow-hidden rounded-3xl border border-[#C8A96B]/40 bg-gradient-to-r from-[#102A24] via-[#1A4234] to-[#102A24] p-8 sm:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            <div className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[#C8A96B]/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#1D493A]/30 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="font-cormorant text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C8A96B]">
                Fine Dining Reservations
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-[#F2EBDD] mt-2">
                Your Table Awaits.
              </h2>
              <p className="font-inter text-base sm:text-[17px] leading-[1.75] text-[rgba(240,235,225,0.88)] mt-3 font-light">
                Make your next dining experience unforgettable.
              </p>

              <button
                onClick={() => onNavigate('contact')}
                className="mt-8 rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] via-[#D8BD83] to-[#C8A96B] px-10 py-4 font-inter text-xs font-semibold uppercase tracking-[0.25em] text-[#0A1915] shadow-lg transition-transform hover:scale-105 focus:outline-none"
              >
                Book Your Table
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
