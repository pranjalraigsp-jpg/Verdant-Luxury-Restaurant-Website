import React from 'react';

/**
 * BotanicalWatermark: A faint line-art leaf and herb illustration
 * (SVG, gold at ~8-12% opacity) used as a luxury decorative background behind section headings.
 */
export const BotanicalWatermark: React.FC<{
  className?: string;
  variant?: 'branch' | 'leaves' | 'monstera';
}> = ({ className = '', variant = 'branch' }) => {
  if (variant === 'leaves') {
    return (
      <div
        className={`pointer-events-none absolute select-none opacity-[0.09] transition-opacity duration-700 ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 280 200"
          className="w-full h-full text-[#C8A96B]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stem 1 */}
          <path d="M140 185 C140 130 110 80 50 30" />
          <path d="M98 108 C80 92 68 96 62 108 C68 116 82 118 98 108 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M118 135 C136 122 148 126 152 138 C144 146 130 146 118 135 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M78 78 C60 62 48 66 42 78 C48 86 62 88 78 78 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M50 30 C42 16 30 22 26 32 C34 38 44 38 50 30 Z" fill="currentColor" fillOpacity="0.08" />

          {/* Stem 2 */}
          <path d="M140 185 C140 130 170 80 230 30" />
          <path d="M182 108 C200 92 212 96 218 108 C212 116 198 118 182 108 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M162 135 C144 122 132 126 128 138 C136 146 150 146 162 135 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M202 78 C220 62 232 66 238 78 C232 86 218 88 202 78 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M230 30 C238 16 250 22 254 32 C246 38 236 38 230 30 Z" fill="currentColor" fillOpacity="0.08" />

          {/* Central bud */}
          <circle cx="140" cy="185" r="2.5" fill="currentColor" />
        </svg>
      </div>
    );
  }

  // Default 'branch' botanical sprig
  return (
    <div
      className={`pointer-events-none absolute select-none opacity-[0.10] transition-opacity duration-700 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 220"
        className="w-full h-full text-[#C8A96B]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Curving botanical center stem */}
        <path d="M30 190 Q120 160 160 110 T290 30" />
        <path d="M290 30 C295 18 285 10 272 15 C268 25 278 30 290 30 Z" fill="currentColor" fillOpacity="0.08" />

        {/* Delicate leaves along spine */}
        <path d="M90 165 C68 152 64 135 78 128 C88 138 92 152 90 165 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M115 150 C138 138 152 142 150 156 C138 162 122 158 115 150 Z" fill="currentColor" fillOpacity="0.08" />

        <path d="M142 125 C122 108 120 92 134 86 C144 96 146 112 142 125 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M172 108 C194 94 208 98 206 112 C194 118 180 116 172 108 Z" fill="currentColor" fillOpacity="0.08" />

        <path d="M198 84 C180 66 182 50 194 45 C204 55 204 70 198 84 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M228 66 C250 52 262 56 260 70 C248 76 236 74 228 66 Z" fill="currentColor" fillOpacity="0.08" />

        <path d="M250 48 C238 32 242 20 252 18 C260 26 258 38 250 48 Z" fill="currentColor" fillOpacity="0.08" />
      </svg>
    </div>
  );
};

/**
 * BotanicalBadge: Replaces generic straight dividers with thin gold lines
 * and miniature botanical leaf ornaments flanking the label text.
 */
export const BotanicalBadge: React.FC<{
  label: string;
  className?: string;
}> = ({ label, className = '' }) => (
  <div className={`inline-flex items-center justify-center max-w-full gap-2 sm:gap-3 ${className}`}>
    {/* Left gold line with delicate leaf tip */}
    <div className="flex items-center gap-1 sm:gap-1.5 shrink">
      <span className="h-px w-3 sm:w-6 md:w-10 bg-gradient-to-r from-transparent to-[#C8A96B] shrink" />
      <svg
        className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C8A96B] shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2C8 6 6 10 6 15c0 3.5 2.5 6 6 6s6-2.5 6-6c0-5-2-9-6-15z" fill="currentColor" fillOpacity="0.2" />
        <path d="M12 3v18" />
        <path d="M12 9c-2 1.5-3.5 3.5-3.5 5.5" />
      </svg>
    </div>

    {/* Center Label Text */}
    <span className="font-cormorant text-xs sm:text-[13px] font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#D8BD83] text-center">
      {label}
    </span>

    {/* Right gold line with mirrored leaf tip */}
    <div className="flex items-center gap-1 sm:gap-1.5 shrink">
      <svg
        className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C8A96B] [transform:scaleX(-1)] shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2C8 6 6 10 6 15c0 3.5 2.5 6 6 6s6-2.5 6-6c0-5-2-9-6-15z" fill="currentColor" fillOpacity="0.2" />
        <path d="M12 3v18" />
        <path d="M12 9c-2 1.5-3.5 3.5-3.5 5.5" />
      </svg>
      <span className="h-px w-3 sm:w-6 md:w-10 bg-gradient-to-l from-transparent to-[#C8A96B] shrink" />
    </div>
  </div>
);

/**
 * BotanicalDivider: A full-width or centered thin gold divider line
 * with a small, delicate botanical leaf ornament in the exact center.
 */
export const BotanicalDivider: React.FC<{
  className?: string;
  maxWidth?: string;
}> = ({ className = '', maxWidth = 'max-w-2xl' }) => (
  <div className={`relative flex items-center justify-center my-8 sm:my-12 ${className}`} aria-hidden="true">
    <div className={`w-full flex items-center justify-center ${maxWidth}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C8A96B]/35 to-[#C8A96B]/60" />
      <div className="mx-3.5 flex items-center justify-center text-[#C8A96B]">
        <svg
          className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#C8A96B]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C7.5 6.5 5 11 5 15.5c0 3.5 3 6.5 7 6.5s7-3 7-6.5C19 11 16.5 6.5 12 2z" fill="currentColor" fillOpacity="0.18" />
          <path d="M12 3v18" />
          <path d="M12 8c-2.5 1.8-4 4-4 6.5" />
          <path d="M12 12c2.5 1.8 4 4 4 6.5" />
        </svg>
      </div>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C8A96B]/35 to-[#C8A96B]/60" />
    </div>
  </div>
);
