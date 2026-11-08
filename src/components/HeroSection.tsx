import React from 'react';
import { motion } from 'framer-motion';
import { ScrambleIn } from './ScrambleIn';

interface HeroSectionProps {
  entranceComplete: boolean;
}

const HERO_IMAGE_URL = 'https://i.ibb.co/GvXL6ZDQ/IGUANA.png';

export const HeroSection: React.FC<HeroSectionProps> = ({ entranceComplete }) => {
  return (
    <section
      id="hero-section"
      className="relative w-full h-screen h-[100dvh] flex flex-col justify-between overflow-hidden bg-black select-none"
    >
      {/* Background Hero Image - Static, No movement, 100% Opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={HERO_IMAGE_URL}
          alt="SynapseX Neural Bio-Interface"
          className="w-full h-full object-cover object-center pointer-events-none opacity-100"
        />
      </div>

      {/* Dot Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-5 dot-overlay" />

      {/* Large Background Watermark Text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        style={{ transform: 'translateY(48px)' }}
      >
        <span
          className="watermark leading-none select-none"
          style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(140px, 32vw, 480px)',
            letterSpacing: '-12px',
            opacity: 0.1,
            whiteSpace: 'nowrap',
          }}
        >
          TRANSCENDENCE
        </span>
      </div>

      {/* Foreground Content with Entrance Animation */}
      <motion.div
        className="relative z-20 flex-1 flex flex-col justify-end px-6 sm:px-12 pb-16 sm:pb-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
      >
        {/* Bottom Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between w-full pointer-events-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="flex flex-col [text-shadow:_0_2px_14px_rgba(0,0,0,0.85)]">
              <h1 className="text-white font-light leading-[0.85] tracking-[-0.04em] text-[clamp(44px,8vw,105px)] uppercase">
                <ScrambleIn text="Brain" delay={200} triggered={entranceComplete} />
              </h1>
              <h1 className="text-white font-light leading-[0.85] tracking-[-0.04em] text-[clamp(44px,8vw,105px)] uppercase">
                <ScrambleIn text="And Body" delay={500} triggered={entranceComplete} />
              </h1>
            </div>

            <div className="flex flex-col gap-1">
              <div className="w-12 h-[1px] bg-white/60 mb-3 shadow-md" />
              <motion.p
                className="max-w-sm text-[14px] text-white/80 leading-relaxed font-normal [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]"
                initial={{ y: 25, opacity: 0 }}
                animate={entranceComplete ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.215, 0.61, 0.355, 1.0],
                }}
              >
                Built at the intersection of neuroscience and artificial intelligence. SynapseX
                continuously maps neural pathways, cognitive load, and physiological states into a
                single adaptive intelligence layer.
              </motion.p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right [text-shadow:_0_2px_14px_rgba(0,0,0,0.85)]">
            <div className="flex flex-col">
              <h1 className="text-white font-light leading-[0.85] tracking-[-0.04em] text-[clamp(44px,8vw,105px)] uppercase">
                <ScrambleIn text="One" delay={700} triggered={entranceComplete} />
              </h1>
              <h1 className="text-white font-light leading-[0.85] tracking-[-0.04em] text-[clamp(44px,8vw,105px)] uppercase">
                <ScrambleIn text="Network" delay={1000} triggered={entranceComplete} />
              </h1>
            </div>
            <div className="mt-6 md:mt-8 text-[11px] sm:text-[12px] tracking-[0.4em] uppercase text-white/60 [text-shadow:_0_1px_6px_rgba(0,0,0,0.9)]">
              Evolutionary Interface / v2.0.4
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sleek Theme Sub-Footer Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 sm:gap-12 text-[10px] tracking-[0.2em] text-white/70 uppercase z-20 pointer-events-none select-none [text-shadow:_0_1px_6px_rgba(0,0,0,0.9)]">
        <span>Neural Mapping</span>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        <span>Bio-Sync</span>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        <span>Cognitive Flow</span>
      </div>
    </section>
  );
};
