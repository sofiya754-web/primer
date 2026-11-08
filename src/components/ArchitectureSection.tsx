import React from 'react';
import { motion } from 'framer-motion';

const ARCHITECTURE_LAYERS = [
  {
    layer: 'Layer 1',
    name: 'Capture',
  },
  {
    layer: 'Layer 2',
    name: 'Process',
  },
  {
    layer: 'Layer 3',
    name: 'Interface',
  },
];

export const ArchitectureSection: React.FC = () => {
  return (
    <section
      id="architecture-section"
      className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="w-full max-w-3xl px-6 py-32 flex flex-col items-center text-center relative z-10">
        {/* Heading block */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <span className="text-white/40 text-[12px] sm:text-[13px] tracking-[0.3em] uppercase mb-4">
            Architecture
          </span>
          <div className="w-12 h-[1px] bg-white/40 mb-8" />
          <h2 className="text-white font-light text-[clamp(28px,6vw,56px)] leading-[1.15] tracking-[-0.03em] mb-8 uppercase">
            Three layers. Zero friction.
          </h2>
          <p className="text-white/40 text-[14px] sm:text-[16px] leading-relaxed max-w-xl mx-auto font-normal">
            Sensor layer captures raw bioelectric signals. Processing layer isolates intent. Interface
            layer delivers structured output to any connected system.
          </p>
        </motion.div>

        {/* Layer cards */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {ARCHITECTURE_LAYERS.map((item) => (
            <div
              key={item.layer}
              className="w-full max-w-md h-[72px] pill-blur rounded-[14px] flex items-center justify-between px-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.14]"
            >
              <span className="text-white/30 text-[11px] tracking-[0.2em] uppercase">
                {item.layer}
              </span>
              <span className="text-white text-[16px] sm:text-[17px] font-light tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
