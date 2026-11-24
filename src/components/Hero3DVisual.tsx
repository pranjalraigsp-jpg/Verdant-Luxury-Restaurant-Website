import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Sparkles, Eye } from 'lucide-react';

export const Hero3DVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePin, setActivePin] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Mouse tilt physics using Framer Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);
  const shineX = useTransform(smoothMouseX, [-0.5, 0.5], [10, 90]);
  const shineY = useTransform(smoothMouseY, [-0.5, 0.5], [10, 90]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
    setActivePin(null);
  };

  // Ingredient Hotspots
  const hotspots = [
    {
      id: 1,
      x: '38%',
      y: '32%',
      title: 'A5 Kagoshima Wagyu',
      detail: 'BMS 11, seared over Binchotan charcoal, tenderly rested at 54°C',
    },
    {
      id: 2,
      x: '64%',
      y: '45%',
      title: 'Winter Périgord Truffle Jus',
      detail: '72-hour veal reduction infused with aged black truffle essence',
    },
    {
      id: 3,
      x: '32%',
      y: '68%',
      title: '24K Gold & Estate Botanicals',
      detail: 'Grown in our Provence greenhouse, picked hours before dining service',
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-full w-full items-center justify-center py-6 sm:py-10 perspective-[1400px]"
    >
      {/* Background Ambient Radial Glows */}
      <div className="pointer-events-none absolute h-[280px] w-[280px] sm:h-[420px] sm:w-[420px] rounded-full bg-[#C8A96B]/15 blur-[80px]" />
      <div className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[480px] sm:w-[480px] rounded-full bg-[#1D493A]/40 blur-[100px]" />

      {/* Outer Golden Astrolabe / Orbit Rings */}
      <div className="pointer-events-none absolute h-[300px] w-[300px] sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px] rounded-full border border-[#C8A96B]/15 opacity-60 animate-spin [animation-duration:60s]" />
      <div className="pointer-events-none absolute h-[330px] w-[330px] sm:h-[500px] sm:w-[500px] lg:h-[560px] lg:w-[560px] rounded-full border border-[#C8A96B]/10 opacity-40 animate-spin [animation-duration:90s] [animation-direction:reverse]" />

      {/* Main 3D Tilted Food Composition Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative flex items-center justify-center will-change-transform"
      >
        {/* Soft Ceramic Deep Shadow */}
        <div
          className="pointer-events-none absolute -bottom-10 h-28 w-[85%] rounded-[100%] bg-[#050D0B]/90 blur-[36px] transition-all duration-500"
          style={{
            transform: isHovered ? 'scale(0.96) translateY(12px)' : 'scale(1) translateY(0px)',
          }}
        />

        {/* Circular Ceramic Platter Container */}
        <div className="relative h-[270px] w-[270px] sm:h-[400px] sm:w-[400px] lg:h-[470px] lg:w-[470px] rounded-full p-2 sm:p-2.5 shadow-[0_25px_60px_-15px_rgba(5,13,11,0.9)] transition-all duration-700">
          {/* Ceramic Outer Lip / Golden Rim */}
          <div className="absolute inset-0 rounded-full border-[1.5px] border-[#C8A96B]/40 bg-gradient-to-b from-[#18362E]/70 via-[#0A1915]/90 to-[#0A1915] p-2.5 shadow-[inset_0_2px_12px_rgba(200,169,107,0.3)]">
            <div className="h-full w-full rounded-full border border-[#C8A96B]/20 bg-gradient-to-tr from-[#0E241E] to-[#122B24] overflow-hidden relative">
              {/* Ceramic Texture Ring */}
              <div className="absolute inset-0 rounded-full border-[1px] border-white/5 opacity-80" />
              <div className="absolute inset-4 rounded-full border-[1px] border-[#C8A96B]/15 opacity-50" />

              {/* The Hero Dish Image */}
              <motion.img
                src="./hero-dish.png"
                alt="VERDANT Signature A5 Wagyu Tenderloin with Périgord Truffle, Edible Gold, and Emerald Herb Oil"
                className="h-full w-full object-cover object-center filter contrast-[1.06] brightness-[1.02] transition-transform duration-700 ease-out"
                style={{
                  transform: isHovered ? 'scale(1.04)' : 'scale(1.0)',
                }}
              />

              {/* Moving Specular Reflection across plate */}
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
                style={{
                  background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)`,
                }}
              />

              {/* Cinematic Vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_55px_rgba(10,25,21,0.85)]" />
            </div>
          </div>

          {/* Interactive Culinary Hotspots */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              style={{ left: spot.x, top: spot.y }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                onClick={() => setActivePin(activePin === spot.id ? null : spot.id)}
                onMouseEnter={() => setActivePin(spot.id)}
                className="group relative flex h-7 w-7 items-center justify-center rounded-full border border-[#C8A96B] bg-[#0A1915]/80 text-[#F2EBDD] backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-125 focus:outline-none"
                aria-label={`Inspect ${spot.title}`}
              >
                <div className="h-2 w-2 rounded-full bg-[#C8A96B] transition-transform group-hover:scale-150" />
                <span className="absolute inset-0 rounded-full border border-[#D8BD83] animate-ping opacity-40 pointer-events-none" />
              </button>

              {/* Tooltip Card */}
              {activePin === spot.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-56 rounded-lg border border-[#C8A96B]/50 bg-[#0A1915]/95 p-3 text-left shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl z-30"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-[#C8A96B] uppercase font-inter">
                    <Sparkles className="h-3 w-3" />
                    Gastronomic Origin
                  </div>
                  <h4 className="font-playfair text-xs font-semibold text-[#F2EBDD] mt-0.5">
                    {spot.title}
                  </h4>
                  <p className="font-inter text-[11px] leading-relaxed text-[#B9C5BC]/90 mt-1">
                    {spot.detail}
                  </p>
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#C8A96B]/50" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Luxury Badges in 3D Space */}
        {/* Top-Left: Michelin Guide Recognition */}
        <motion.div
          style={{ translateZ: 35 }}
          className="absolute -top-3 left-0 sm:top-2 sm:-left-6 z-20 flex items-center gap-2.5 sm:gap-3 rounded-full border border-[#C8A96B]/40 bg-[#0A1915]/90 px-3 py-1.5 sm:px-4 sm:py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/50 text-[#C8A96B]">
            <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#C8A96B]">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="font-semibold text-[11px] sm:text-xs ml-0.5 sm:ml-1 text-[#F2EBDD]">Three Stars</span>
            </div>
            <p className="font-cormorant text-[11px] sm:text-[12.5px] tracking-[0.14em] sm:tracking-[0.16em] text-[rgba(240,235,225,0.88)] uppercase font-medium">
              Michelin Guide 2026
            </p>
          </div>
        </motion.div>

        {/* Bottom-Right: Dish Pedigree */}
        <motion.div
          style={{ translateZ: 40 }}
          className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-6 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-[#C8A96B]/35 bg-[#102A24]/90 px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md"
        >
          <div className="flex flex-col text-left">
            <span className="font-cormorant text-[12px] uppercase tracking-[0.16em] text-[#D8BD83] font-medium">
              Chef's Opus No. 7
            </span>
            <span className="font-playfair text-xs font-medium text-[#F2EBDD]">
              Kagoshima A5 & Périgord
            </span>
            <span className="font-inter text-[12px] text-[rgba(240,235,225,0.85)]">
              Charcoal seared • 54°C Tenderised
            </span>
          </div>
        </motion.div>

        {/* Floating Interactive Prompt */}
        <div className="absolute -bottom-9 sm:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#D8BD83] font-cormorant pointer-events-none font-medium">
          <Eye className="h-3 w-3 text-[#C8A96B] animate-pulse shrink-0" />
          <span>Interactive 3D Dish • Touch points to inspect</span>
        </div>
      </motion.div>
    </div>
  );
};
