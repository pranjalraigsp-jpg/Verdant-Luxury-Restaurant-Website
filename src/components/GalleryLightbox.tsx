import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import type { GalleryItem } from '../types';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A1915]/95 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 max-h-[90vh] max-w-5xl w-full flex flex-col items-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 sm:right-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96B]/40 bg-[#0A1915]/80 text-[#F2EBDD] hover:border-[#C8A96B] hover:text-[#C8A96B] focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Large Image Frame */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-[#C8A96B]/30 shadow-2xl bg-[#0A1915]">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[70vh] w-full object-contain sm:object-cover"
            />
            <div className="p-6 bg-gradient-to-t from-[#0A1915] via-[#102A24]/90 to-transparent">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.16em] text-[#D8BD83] font-cormorant font-medium">
                <Sparkles className="h-3.5 w-3.5 text-[#C8A96B]" />
                VERDANT Portfolio • {item.category}
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl font-medium text-[#F2EBDD] mt-1">
                {item.title}
              </h3>
              <p className="font-inter text-sm sm:text-base text-[rgba(240,235,225,0.88)] mt-2 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
