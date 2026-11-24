import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sprout, Award } from 'lucide-react';

interface StoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const StoryDrawer: React.FC<StoryDrawerProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A1915]/85 backdrop-blur-md"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-xl border-l border-[#C8A96B]/30 bg-gradient-to-b from-[#102A24] via-[#0E251F] to-[#0A1915] text-left shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#C8A96B]/20 p-6 sm:p-8">
              <div>
                <span className="font-cormorant text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A96B]">
                  Our Genesis & Philosophy
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#F2EBDD] mt-0.5">
                  The Story of VERDANT
                </h3>
              </div>

              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#0A1915]/60 text-[#F2EBDD] hover:border-[#C8A96B] hover:text-[#C8A96B]"
                aria-label="Close story panel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Story Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
              {/* Feature Image */}
              <div className="relative h-60 w-full overflow-hidden rounded-2xl border border-[#C8A96B]/25">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1200&auto=format&fit=crop"
                  alt="VERDANT Dining Sanctuary"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1915] via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 font-cormorant text-xs tracking-widest text-[#D8BD83] uppercase">
                  Sanctuary of Gastronomy • Mayfair
                </div>
              </div>

              {/* Story Narrative */}
              <div>
                <h4 className="font-playfair text-xl text-[#F2EBDD]">
                  "Nature as the Canvas, Gastronomy as the Brush."
                </h4>
                <p className="font-inter mt-3 text-sm leading-relaxed text-[#B9C5BC]/90 font-light">
                  Founded in 2018 by Executive Chef Aurélien Vance, VERDANT was born from a singular obsession: to elevate fine dining into an unforgettable sensory artform where organic botanical purity harmonises with avant-garde culinary technique.
                </p>
                <p className="font-inter mt-3 text-sm leading-relaxed text-[#B9C5BC]/90 font-light">
                  Nestled in the architectural heart of Mayfair, VERDANT’s deep emerald tones, warm brass contours, and intimate acoustic atmosphere offer diners a quiet sanctuary far removed from the city's tempo.
                </p>
              </div>

              {/* Pillars */}
              <div className="space-y-4">
                <div className="flex gap-4 rounded-xl border border-[#C8A96B]/20 bg-[#1D493A]/20 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C8A96B]/10 border border-[#C8A96B]/40 text-[#C8A96B]">
                    <Sprout className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-playfair text-sm font-semibold text-[#F2EBDD]">
                      Biodynamic Estate Sanctum
                    </h5>
                    <p className="font-inter text-xs text-[#B9C5BC]/85 mt-1 font-light leading-relaxed">
                      All micro-herbs, edible blossoms, and heirloom vegetables are harvested daily at sunrise from our private 40-hectare biodynamic estate farm and botanical glasshouses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-[#C8A96B]/20 bg-[#1D493A]/20 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C8A96B]/10 border border-[#C8A96B]/40 text-[#C8A96B]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-playfair text-sm font-semibold text-[#F2EBDD]">
                      Three Stars & Green Star Award
                    </h5>
                    <p className="font-inter text-xs text-[#B9C5BC]/85 mt-1 font-light leading-relaxed">
                      Honoured with Three Michelin Stars for culinary excellence and the Michelin Green Star for sustainable gastronomy and circular zero-waste kitchen practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="border-t border-[#C8A96B]/20 bg-[#0A1915] p-6 flex items-center justify-between">
              <span className="font-cormorant text-xs text-[#D8BD83]">
                Reservations open 90 days in advance.
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-6 py-2.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-lg hover:scale-105"
              >
                Reserve A Table
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
