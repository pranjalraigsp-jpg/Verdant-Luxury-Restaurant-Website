import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sprout, Wine, ShieldCheck, Sparkles } from 'lucide-react';
import { BotanicalBadge, BotanicalWatermark, BotanicalDivider } from '../components/BotanicalElements';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import type { NavigationPage } from '../types';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#102A24]">
      {/* 1. CINEMATIC RESTAURANT INTERIOR BANNER */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] w-full overflow-hidden flex flex-col items-center justify-center pt-32 sm:pt-36 pb-16 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1920&auto=format&fit=crop"
            alt="VERDANT Interior Banner"
            className="h-full w-full object-cover object-center filter brightness-[0.82] contrast-[1.05] saturate-[0.75]"
          />
          {/* Subtle emerald palette tint */}
          <div className="absolute inset-0 bg-[#102A24]/30 mix-blend-color pointer-events-none" />
          {/* ~55% dark at the top fading smoothly to the page green at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1915]/55 via-[#102A24]/45 to-[#102A24]" />
        </div>

        {/* Smooth feathered bottom blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#102A24] via-[#102A24]/80 to-transparent pointer-events-none z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Faint gold line-art botanical watermark */}
          <BotanicalWatermark variant="branch" className="-top-12 left-1/2 -translate-x-1/2 w-80 h-56 sm:w-96 sm:h-64" />

          <BotanicalBadge label="The Verdant Legacy" className="mb-4" />

          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#F2EBDD]">
            A Sanctuary of{' '}
            <span className="font-cormorant italic font-normal text-gold-pure">
              Gastronomy.
            </span>
          </h1>

          <p 
            className="font-inter mt-5 text-base sm:text-[17px] lg:text-[18px] font-light text-[rgba(240,235,225,0.88)] max-w-xl sm:max-w-2xl mx-auto leading-[1.75] [text-wrap:balance]"
            style={{ textWrap: 'balance' }}
          >
            Founded with a reverence for nature, architectural serenity, and culinary mastery.
          </p>
        </div>
      </section>

      {/* 2. RESTAURANT STORY & PHILOSOPHY */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-[clamp(56px,7vw,96px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left relative"
          >
            {/* Faint botanical line-art watermark */}
            <BotanicalWatermark variant="leaves" className="-top-10 -left-10 w-72 h-52 opacity-[0.09]" />

            <BotanicalBadge label="Philosophy & Origins" />

            <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-[#F2EBDD] mt-3 leading-tight">
              "Nature as the Canvas, Gastronomy as the Brush."
            </h2>
            <div className="mt-6 space-y-4 font-inter text-base sm:text-[17px] text-[rgba(240,235,225,0.88)] font-light leading-[1.75]">
              <p>
                Established in 2018 in London’s Mayfair district, VERDANT was founded with a singular conviction: that haute gastronomy should not conquer nature, but rather illuminate its rawest poetic beauty.
              </p>
              <p>
                Under the creative vision of Executive Chef Aurélien Vance, every tasting menu is composed like a classical suite, drawing upon centuries-old French reduction methods while honoring Japanese philosophies of seasonality and minimal intervention.
              </p>
              <p>
                Recognized with Three Michelin Stars and the prestigious Michelin Green Star for sustainable culinary stewardship, VERDANT remains dedicated to circular zero-waste kitchen practices and ethical sourcing.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:flex sm:items-center sm:gap-6 pt-5 border-t border-[#C8A96B]/20">
              <div>
                <div className="font-playfair text-xl sm:text-2xl font-bold text-gold-pure">★★★</div>
                <p className="font-cormorant text-[11.5px] sm:text-[13px] font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[rgba(240,235,225,0.88)] mt-1">
                  Michelin 3 Stars
                </p>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/10" />
              <div>
                <div className="font-playfair text-xl sm:text-2xl font-bold text-emerald-400">Green Star</div>
                <p className="font-cormorant text-[11.5px] sm:text-[13px] font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[rgba(240,235,225,0.88)] mt-1">
                  Sustainable Gastronomy
                </p>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/10" />
              <div>
                <div className="font-playfair text-xl sm:text-2xl font-bold text-gold-pure">No. 04</div>
                <p className="font-cormorant text-[11.5px] sm:text-[13px] font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[rgba(240,235,225,0.88)] mt-1">
                  World's 50 Best
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Mayfair Sanctuary Dining Conservatory Image with Emerald/Gold Color Grade */}
            <div className="relative overflow-hidden rounded-3xl border border-[#C8A96B]/35 shadow-[0_25px_60px_rgba(0,0,0,0.65)] group">
              <img
                src="./mayfair-sanctuary.jpg"
                alt="VERDANT Mayfair Sanctuary Dining Conservatory"
                className="h-[480px] sm:h-[520px] w-full object-cover filter brightness-[0.9] contrast-[1.05] saturate-[0.88] transition-transform duration-700 ease-out group-hover:scale-104"
              />
              {/* Subtle emerald palette tint matching the hero mood */}
              <div className="absolute inset-0 bg-[#102A24]/20 mix-blend-color pointer-events-none" />
              {/* High-legibility deep gradient overlay behind caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1915]/95 via-[#0A1915]/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                <span className="font-cormorant text-xs sm:text-[13px] font-semibold text-[#D8BD83] uppercase tracking-[0.2em] block">
                  Architecture &amp; Botanical Design
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl text-[#F2EBDD] font-medium tracking-wide mt-1">
                  The Mayfair Sanctuary
                </h3>
                <p className="font-inter text-xs sm:text-[13px] text-[rgba(240,235,225,0.85)] font-light mt-1.5 leading-relaxed">
                  Our flagship glasshouse dining conservatory, featuring living exotic flora, custom curved emerald velvet banquettes, and ambient candlelight.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Botanical Section Divider */}
      <BotanicalDivider />

      {/* 3. CHEF & CULINARY CRAFTSMANSHIP */}
      <section className="relative w-full bg-[#0A1915] py-[clamp(56px,7vw,96px)] border-t border-[#C8A96B]/15">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Chef Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#C8A96B]/35 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=85&w=1200&auto=format&fit=crop"
                  alt="Executive Chef Aurélien Vance"
                  className="h-[520px] w-full object-cover filter brightness-[0.88] contrast-[1.05] saturate-[0.85]"
                />
                <div className="absolute inset-0 bg-[#102A24]/20 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1915]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-cormorant text-[12.5px] sm:text-[13px] font-medium text-[#D8BD83] uppercase tracking-[0.16em]">
                    Executive Chef
                  </span>
                  <h3 className="font-playfair text-2xl font-medium text-[#F2EBDD]">
                    {RESTAURANT_CONFIG.executiveChef.name}
                  </h3>
                  <p className="font-inter text-[13px] text-[rgba(240,235,225,0.85)] mt-0.5">
                    {RESTAURANT_CONFIG.executiveChef.title}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chef Narrative & Lineage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col text-left relative"
            >
              {/* Faint botanical watermark */}
              <BotanicalWatermark variant="branch" className="-top-10 -right-8 w-72 h-52 opacity-[0.09]" />

              <BotanicalBadge label="Culinary Directorate" />

              <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-[#F2EBDD] mt-3">
                Crafting Culinary Emotion
              </h2>

              <p className="font-inter text-base sm:text-[17px] text-[rgba(240,235,225,0.88)] mt-5 font-light leading-[1.75]">
                {RESTAURANT_CONFIG.executiveChef.bio}
              </p>

              <blockquote className="my-6 border-l-2 border-[#C8A96B] pl-5 font-cormorant italic text-lg sm:text-xl text-[#F2EBDD]/95">
                "We do not seek merely to feed our guests, but to awaken forgotten memories of sunlight, soil, rain, and autumn woods through a single spoonful."
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="rounded-2xl border border-[#C8A96B]/20 bg-[#102A24]/60 p-4">
                  <div className="flex items-center gap-2 font-playfair text-sm font-semibold text-[#D8BD83]">
                    <Award className="h-4 w-4 text-[#C8A96B]" />
                    Bocuse d’Or Laureate
                  </div>
                  <p className="font-inter text-[14px] text-[rgba(240,235,225,0.88)] mt-1.5 font-light leading-relaxed">
                    Recognized on international stages for technical brilliance and gastronomic innovation.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#C8A96B]/20 bg-[#102A24]/60 p-4">
                  <div className="flex items-center gap-2 font-playfair text-sm font-semibold text-[#D8BD83]">
                    <Wine className="h-4 w-4 text-[#C8A96B]" />
                    Cellar Mastery
                  </div>
                  <p className="font-inter text-[14px] text-[rgba(240,235,225,0.88)] mt-1.5 font-light leading-relaxed">
                    Personally directs pairing harmonies with our Head Sommelier across rare biodynamic vintages.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Botanical Section Divider */}
      <BotanicalDivider />

      {/* 4. PREMIUM INGREDIENTS & HOSPITALITY HIGHLIGHTS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-[clamp(56px,7vw,96px)]">
        <div className="mx-auto max-w-3xl text-center mb-16 relative">
          <BotanicalWatermark variant="leaves" className="-top-12 left-1/2 -translate-x-1/2 w-80 h-56 opacity-[0.09]" />
          <BotanicalBadge label="Terroir &amp; Stewardship" className="mb-2" />
          <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-[#F2EBDD] mt-2">
            The Pillars of VERDANT
          </h2>
          <p className="font-inter text-base sm:text-[17px] leading-[1.75] text-[rgba(240,235,225,0.88)] mt-4 font-light">
            Every culinary moment rests upon relentless attention to sourcing, sustainable ethics, and intuitive warmth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-[#C8A96B]/25 bg-gradient-to-b from-[#102A24] to-[#0A1915] p-8 text-left shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B]/15 text-[#C8A96B] mb-6">
              <Sprout className="h-6 w-6" />
            </div>
            <h3 className="font-playfair text-xl font-medium text-[#F2EBDD]">
              40-Hectare Provence Estate
            </h3>
            <p className="font-inter text-base sm:text-[17px] leading-[1.75] text-[rgba(240,235,225,0.88)] mt-3 font-light">
              Our private glasshouses and biodynamic gardens produce heirloom varietals never sold commercially, harvested daily at dawn and delivered to our London kitchen.
            </p>
          </div>

          <div className="rounded-3xl border border-[#C8A96B]/25 bg-gradient-to-b from-[#102A24] to-[#0A1915] p-8 text-left shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B]/15 text-[#C8A96B] mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-playfair text-xl font-medium text-[#F2EBDD]">
              Ethical Harvest & Line-Caught
            </h3>
            <p className="font-inter text-base sm:text-[17px] leading-[1.75] text-[rgba(240,235,225,0.88)] mt-3 font-light">
              We partner exclusively with multi-generational day-boat fishermen in Brittany and Hokkaido, and certified humane Japanese wagyu ranchers adhering to pristine standards.
            </p>
          </div>

          <div className="rounded-3xl border border-[#C8A96B]/25 bg-gradient-to-b from-[#102A24] to-[#0A1915] p-8 text-left shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B]/15 text-[#C8A96B] mb-6">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-playfair text-xl font-medium text-[#F2EBDD]">
              Intuitive Hospitality
            </h3>
            <p className="font-inter text-base sm:text-[17px] leading-[1.75] text-[rgba(240,235,225,0.88)] mt-3 font-light">
              Our front-of-house team reads the subtle rhythm of each table, ensuring an atmosphere of effortless discretion, personal warmth, and unforgettable elegance.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('menu')}
            className="rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-8 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-lg hover:scale-105"
          >
            Explore Our Menu
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="rounded-full border border-[#C8A96B]/40 bg-[#0A1915] px-8 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#F2EBDD] hover:border-[#C8A96B] hover:text-[#C8A96B]"
          >
            Reserve Your Table
          </button>
        </div>
      </section>
    </div>
  );
};
