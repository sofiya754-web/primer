import React from 'react';
import { motion } from 'framer-motion';

interface SquashHamburgerProps {
  isOpen: boolean;
  isMobile?: boolean;
}

export const SquashHamburger: React.FC<SquashHamburgerProps> = ({ isOpen, isMobile = false }) => {
  const containerW = isMobile ? 15 : 18;
  const containerH = isMobile ? 10 : 12;
  const barH = isMobile ? 1.2 : 1.5;
  const centerY = (containerH - barH) / 2;

  const springConfig = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  };

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer select-none"
      style={{ width: `${containerW}px`, height: `${containerH}px` }}
      aria-hidden="true"
    >
      {/* Top Bar */}
      <motion.span
        className="absolute left-0 w-full bg-white rounded-full"
        style={{ height: `${barH}px`, top: 0, originX: 0.5, originY: 0.5 }}
        animate={
          isOpen
            ? { y: centerY, rotate: 45 }
            : { y: 0, rotate: 0 }
        }
        transition={springConfig}
      />

      {/* Middle Bar */}
      <motion.span
        className="absolute left-0 w-full bg-white rounded-full"
        style={{ height: `${barH}px`, top: `${centerY}px`, originX: 0.5, originY: 0.5 }}
        animate={
          isOpen
            ? { opacity: 0, scale: 0 }
            : { opacity: 1, scale: 1 }
        }
        transition={springConfig}
      />

      {/* Bottom Bar */}
      <motion.span
        className="absolute left-0 w-full bg-white rounded-full"
        style={{ height: `${barH}px`, bottom: 0, originX: 0.5, originY: 0.5 }}
        animate={
          isOpen
            ? { y: -centerY, rotate: -45 }
            : { y: 0, rotate: 0 }
        }
        transition={springConfig}
      />
    </div>
  );
};
