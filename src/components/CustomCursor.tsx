import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none select-none">
      {/* Outer subtle trailing ring */}
      <div
        className="pointer-events-none select-none fixed z-[9999] rounded-full border border-[#C8A96B]/60 transition-transform duration-200 ease-out will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.8 : 1})`,
          width: '32px',
          height: '32px',
          backgroundColor: isPointer ? 'rgba(200, 169, 107, 0.12)' : 'transparent',
          boxShadow: isPointer ? '0 0 15px rgba(200, 169, 107, 0.3)' : 'none',
        }}
      />
      {/* Central gold dot */}
      <div
        className="pointer-events-none select-none fixed z-[9999] h-1.5 w-1.5 rounded-full bg-[#D8BD83] transition-transform duration-75 will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
