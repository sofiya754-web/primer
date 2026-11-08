import React from 'react';
import { motion } from 'framer-motion';

const METRICS_IMAGE_URL = 'https://i.ibb.co/W4drd6Kz/IGUANAANDMOUNTAINS.jpg';

const METRICS_DATA = [
  {
    value: '2.4ms',
    label: 'Synaptic Latency',
  },
  {
    value: '99.7%',
    label: 'Signal Accuracy',
  },
  {
    value: '140B',
    label: 'Neural Parameters',
  },
];

export const MetricsSection: React.FC = () => {
  return (
    <section
      id="metrics-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image - 100% Opacity */}
      <img
        src={METRICS_IMAGE_URL}
        alt="SynapseX Performance Metrics and Neural Parameters"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100"
      />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto pt-32 pb-32 px-6 flex flex-col items-center">
        {/* Subtitle */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-white text-[12px] sm:text-[13px] tracking-[0.3em] uppercase mb-4 text-center font-medium [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">
            Performance Metrics
          </span>
          <div className="w-12 h-[1px] bg-white shadow-md" />
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full text-center">
          {METRICS_DATA.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center pill-blur py-8 px-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
            >
              <div className="text-white text-[clamp(48px,10vw,96px)] font-light tracking-[-0.04em] leading-none [text-shadow:_0_4px_16px_rgba(0,0,0,0.95)]">
                {item.value}
              </div>
              <div className="text-white/80 text-[12px] sm:text-[13px] mt-4 tracking-[0.18em] uppercase font-medium [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
