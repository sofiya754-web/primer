import React from 'react';
import { motion } from 'framer-motion';

const TECHNOLOGY_IMAGE_URL = 'https://i.ibb.co/GZV1tc4/PLANET.jpg';

const TECH_PILLARS = [
  {
    title: 'Cortical Mapping',
    desc: 'Real-time spatial reconstruction of active neural regions.',
  },
  {
    title: 'Signal Isolation',
    desc: 'Separates cognitive intent from biological noise.',
  },
  {
    title: 'State Prediction',
    desc: 'Anticipates cognitive transitions before they occur.',
  },
  {
    title: 'Loop Feedback',
    desc: 'Closed-loop adjustment based on outcome correlation.',
  },
];

export const TechnologySection: React.FC = () => {
  return (
    <section
      id="technology-section"
      className="relative w-full h-screen h-[100dvh] flex flex-col justify-between overflow-hidden bg-black"
    >
      {/* Background Image - 100% Opacity */}
      <img
        src={TECHNOLOGY_IMAGE_URL}
        alt="Adaptive Intelligence Neural Planet"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100"
      />

      {/* Main Container */}
      <div className="relative z-20 flex-1 flex flex-col justify-between px-8 sm:px-12 md:px-16 py-12 sm:py-16">
        {/* Top Area */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Left Heading */}
          <motion.h2
            className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.88] tracking-[-0.04em] uppercase [text-shadow:_0_3px_16px_rgba(0,0,0,0.95)]"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          >
            Adaptive
            <br />
            Intelligence
          </motion.h2>

          {/* Right Paragraph */}
          <motion.div
            className="flex flex-col md:items-end max-w-xs md:text-right md:pt-2 pill-blur p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/20"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="w-12 h-[1px] bg-white mb-3 md:ml-auto" />
            <p className="text-white text-[13px] sm:text-[14px] leading-relaxed font-normal [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]">
              The system learns your neural baseline within 72 hours. From there, every cognitive
              state is mapped, predicted, and optimized in real time.
            </p>
          </motion.div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 w-full pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          {TECH_PILLARS.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col p-5 rounded-[14px] bg-black/40 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:border-white/40 hover:bg-black/55"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <h3 className="text-white text-[13px] sm:text-[14px] font-semibold tracking-tight uppercase mb-2 [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]">
                {item.title}
              </h3>
              <p className="text-white/80 text-[12px] sm:text-[13px] leading-relaxed font-normal [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
