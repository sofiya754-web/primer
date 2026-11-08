import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SynapseXLogo } from './SynapseXLogo';
import { SquashHamburger } from './SquashHamburger';
import { ScrambleText } from './ScrambleText';

interface NavbarProps {
  entranceComplete: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ entranceComplete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverMetrics, setHoverMetrics] = useState(false);
  const [hoverDownload, setHoverDownload] = useState(false);
  const [hoverMobileAbout, setHoverMobileAbout] = useState(false);
  const [hoverMobileMetrics, setHoverMobileMetrics] = useState(false);
  const [hoverMobileDownload, setHoverMobileDownload] = useState(false);

  const springMenu = {
    type: 'spring' as const,
    stiffness: 350,
    damping: 28,
  };

  const scrollToAbout = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToMetrics = () => {
    window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      id="synapsex-navbar"
      className="fixed top-0 left-0 right-0 h-20 z-50 px-4 sm:px-10 flex items-center justify-between pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* DESKTOP NAVBAR (hidden below sm) */}
      <div className="hidden sm:flex items-center justify-between w-full pointer-events-auto">
        {/* Left pill group */}
        <div className="flex items-center gap-3">
          {/* Logo pill */}
          <motion.div
            id="nav-logo-pill-desktop"
            onClick={scrollToTop}
            className={`h-12 px-5 pill-blur rounded-[14px] items-center gap-3 cursor-pointer select-none transition-colors ${
              isMenuOpen ? 'hidden md:flex' : 'flex'
            }`}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.18)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            <SynapseXLogo className="w-[18px] h-[18px] text-white" />
            <span className="text-sm font-semibold tracking-tighter text-white">SynapseX</span>
          </motion.div>

          {/* Expanding menu pill */}
          <motion.div
            id="nav-menu-pill-desktop"
            className="h-12 rounded-[14px] pill-blur flex items-center overflow-hidden"
            initial={false}
            animate={{ width: isMenuOpen ? 290 : 48 }}
            transition={springMenu}
          >
            {/* Hamburger trigger button */}
            <button
              type="button"
              id="desktop-hamburger-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isMenuOpen
                  ? 'w-9 h-9 rounded-[11px] bg-white/10 hover:bg-white/20 ml-1.5'
                  : 'w-12 h-12 rounded-[14px] hover:bg-white/10'
              }`}
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              <SquashHamburger isOpen={isMenuOpen} isMobile={false} />
            </button>

            {/* Nav links */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  className="flex items-center gap-6 ml-5 whitespace-nowrap"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    type="button"
                    id="desktop-nav-link-about"
                    onClick={scrollToAbout}
                    onMouseEnter={() => setHoverAbout(true)}
                    onMouseLeave={() => setHoverAbout(false)}
                    className="text-[14px] font-medium text-white/85 hover:text-white transition-colors cursor-pointer tracking-tight"
                  >
                    <ScrambleText text="About" isHovered={hoverAbout} />
                  </button>

                  <button
                    type="button"
                    id="desktop-nav-link-metrics"
                    onClick={scrollToMetrics}
                    onMouseEnter={() => setHoverMetrics(true)}
                    onMouseLeave={() => setHoverMetrics(false)}
                    className="text-[14px] font-medium text-white/85 hover:text-white transition-colors cursor-pointer tracking-tight"
                  >
                    <ScrambleText text="Metrics" isHovered={hoverMetrics} />
                  </button>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right download button */}
        <motion.button
          type="button"
          id="desktop-download-button"
          onMouseEnter={() => setHoverDownload(true)}
          onMouseLeave={() => setHoverDownload(false)}
          className="h-12 px-6 bg-white rounded-full text-black flex items-center gap-2 cursor-pointer font-bold text-xs shadow-lg uppercase tracking-wider select-none"
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <i className="bi bi-apple text-[15px] leading-none text-black" aria-hidden="true" />
          <span>
            <ScrambleText text="Download" isHovered={hoverDownload} />
          </span>
        </motion.button>
      </div>

      {/* MOBILE NAVBAR (visible below sm) */}
      <div className="flex sm:hidden items-center justify-between w-full pointer-events-auto gap-2">
        {/* Left group */}
        <div className="flex items-center gap-2 flex-1">
          {/* Logo pill */}
          <motion.div
            id="nav-logo-pill-mobile"
            onClick={scrollToTop}
            className="h-9 px-3 pill-blur rounded-[10px] flex items-center gap-1.5 cursor-pointer select-none overflow-hidden"
            initial={false}
            animate={{
              width: isMenuOpen ? 0 : 'auto',
              paddingLeft: isMenuOpen ? 0 : 12,
              paddingRight: isMenuOpen ? 0 : 12,
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={springMenu}
          >
            <SynapseXLogo className="w-[14px] h-[14px] text-white flex-shrink-0" />
            <span className="text-[12px] font-semibold tracking-tighter text-white whitespace-nowrap">
              SynapseX
            </span>
          </motion.div>

          {/* Menu capsule */}
          <motion.div
            id="nav-menu-pill-mobile"
            className="h-9 rounded-[10px] pill-blur flex items-center overflow-hidden"
            initial={false}
            animate={{ width: isMenuOpen ? '100%' : 36 }}
            transition={springMenu}
          >
            <button
              type="button"
              id="mobile-hamburger-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 flex-shrink-0 flex items-center justify-center cursor-pointer"
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              <SquashHamburger isOpen={isMenuOpen} isMobile={true} />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  className="flex items-center gap-4 ml-2 whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.15 }}
                >
                  <button
                    type="button"
                    id="mobile-nav-link-about"
                    onClick={scrollToAbout}
                    onMouseEnter={() => setHoverMobileAbout(true)}
                    onMouseLeave={() => setHoverMobileAbout(false)}
                    className="text-[12px] font-medium text-white/85 hover:text-white transition-colors cursor-pointer"
                  >
                    <ScrambleText text="About" isHovered={hoverMobileAbout} />
                  </button>

                  <button
                    type="button"
                    id="mobile-nav-link-metrics"
                    onClick={scrollToMetrics}
                    onMouseEnter={() => setHoverMobileMetrics(true)}
                    onMouseLeave={() => setHoverMobileMetrics(false)}
                    className="text-[12px] font-medium text-white/85 hover:text-white transition-colors cursor-pointer"
                  >
                    <ScrambleText text="Metrics" isHovered={hoverMobileMetrics} />
                  </button>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right download button */}
        <motion.button
          type="button"
          id="mobile-download-button"
          onMouseEnter={() => setHoverMobileDownload(true)}
          onMouseLeave={() => setHoverMobileDownload(false)}
          className="h-9 px-3.5 bg-white rounded-full text-black flex items-center gap-1.5 cursor-pointer font-bold text-[11px] uppercase tracking-wider select-none flex-shrink-0 shadow-md"
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <i className="bi bi-apple text-[13px] leading-none text-black" aria-hidden="true" />
          <span>
            <ScrambleText text="Download" isHovered={hoverMobileDownload} />
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
};
