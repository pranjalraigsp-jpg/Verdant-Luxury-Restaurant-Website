import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wine, Award, CheckCircle2, MessageSquare, CalendarDays } from 'lucide-react';
import type { MenuItem } from '../types';
import { RESTAURANT_CONFIG } from '../config/restaurant';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onReserveTable?: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onReserveTable,
}) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (dish) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  const handleWhatsAppOrder = () => {
    const text = `Hello VERDANT, I would like to enquire about [${dish.name}]. Please share the ordering details.`;
    const url = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A1915]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-[#C8A96B]/40 bg-gradient-to-b from-[#102A24] via-[#0E251F] to-[#0A1915] text-left shadow-[0_25px_70px_rgba(0,0,0,0.85)] max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#0A1915]/70 text-[#F2EBDD] backdrop-blur-md transition-colors hover:border-[#C8A96B] hover:text-[#C8A96B] focus:outline-none"
            aria-label="Close dish popup"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Header Image Banner */}
          <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-[#0A1915]">
            <img
              src={dish.image}
              alt={dish.name}
              className="h-full w-full object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A24] via-[#102A24]/40 to-transparent" />

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between gap-3">
              <div className="min-w-0 pr-2">
                <span className="font-cormorant text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#C8A96B] block">
                  Course {dish.categoryNumber} • {dish.categoryLabel}
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-medium text-[#F2EBDD] mt-0.5 sm:mt-1 truncate sm:whitespace-normal">
                  {dish.name}
                </h3>
                <p className="font-cormorant italic text-xs sm:text-sm text-[#D8BD83] truncate sm:whitespace-normal">
                  {dish.frenchName}
                </p>
              </div>

              <div className="shrink-0 rounded-full border border-[#C8A96B] bg-[#0A1915]/90 px-3.5 sm:px-4 py-1 sm:py-1.5 font-playfair text-base sm:text-lg font-semibold text-gold-pure backdrop-blur-md">
                ${dish.price}
              </div>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div>
              <h4 className="font-cormorant text-[12.5px] uppercase tracking-[0.2em] text-[#C8A96B] font-semibold">
                Gastronomy & Composition
              </h4>
              <p className="font-inter text-base sm:text-[17px] leading-[1.75] text-[rgba(240,235,225,0.88)] mt-2 font-light">
                {dish.description}
              </p>
            </div>

            {/* Dietary Tags */}
            {dish.dietary && dish.dietary.length > 0 && (
              <div>
                <h4 className="font-cormorant text-[12.5px] uppercase tracking-[0.2em] text-[#C8A96B] font-semibold mb-2">
                  Dietary Information
                </h4>
                <div className="flex flex-wrap gap-2">
                  {dish.dietary.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1 rounded-full border border-[#C8A96B]/30 bg-[#1D493A]/30 px-3.5 py-1 font-inter text-[13px] text-[#D8BD83]"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#C8A96B]" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Ingredients Source */}
            <div>
              <h4 className="font-cormorant text-[12.5px] uppercase tracking-[0.2em] text-[#C8A96B] font-semibold mb-2">
                Origin Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#C8A96B]/30 bg-[#0A1915]/60 px-3.5 py-1 text-[13px] text-[#F2EBDD]"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[#C8A96B]" />
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Chef's Notes */}
            {dish.chefNotes && (
              <div className="rounded-2xl border border-[#C8A96B]/20 bg-[#1D493A]/25 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-[#D8BD83]">
                  <Award className="h-4 w-4 text-[#C8A96B]" />
                  Chef's Perspective
                </div>
                <p className="font-cormorant italic text-base sm:text-[17px] text-[#F2EBDD]/95 mt-2 leading-[1.75]">
                  "{dish.chefNotes}"
                </p>
              </div>
            )}

            {/* Sommelier Pairing */}
            {dish.sommelierPairing && (
              <div className="rounded-2xl border border-[#C8A96B]/30 bg-gradient-to-r from-[#102A24] to-[#1D493A]/40 p-5">
                <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-[#C8A96B]">
                  <Wine className="h-4 w-4" />
                  Head Sommelier Recommendation
                </div>
                <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-playfair text-base sm:text-lg font-semibold text-[#F2EBDD]">
                    {dish.sommelierPairing.wine}
                  </span>
                  <span className="font-cormorant text-[12.5px] uppercase tracking-[0.16em] text-[#D8BD83]">
                    Vintage {dish.sommelierPairing.vintage}
                  </span>
                </div>
                <p className="font-inter text-[14px] sm:text-[15px] text-[rgba(240,235,225,0.88)] mt-2 font-light leading-relaxed">
                  {dish.sommelierPairing.notes}
                </p>
              </div>
            )}
          </div>

          {/* Modal Footer with ORDER VIA WHATSAPP Button */}
          <div className="border-t border-[#C8A96B]/20 bg-[#0A1915] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-cormorant text-[13px] text-[rgba(240,235,225,0.85)] text-center sm:text-left">
              Direct enquiries connected to VERDANT Concierge desk.
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366] text-[#FFFFFF] px-6 py-2.5 font-inter text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-md hover:scale-103"
              >
                <MessageSquare className="h-4 w-4 text-[#25D366] group-hover:text-black" />
                <span>Order via WhatsApp</span>
              </button>

              {/* Reserve Table CTA */}
              {onReserveTable && (
                <button
                  onClick={() => {
                    onClose();
                    onReserveTable();
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-6 py-2.5 font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#0A1915] shadow-lg hover:scale-103"
                >
                  <CalendarDays className="h-4 w-4 text-[#0A1915]" />
                  <span>Reserve Table</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
