import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const SECTION_2_IMAGE_URL = 'https://i.ibb.co/8DNmn66T/MOUNTAINS.png';

export const CinematicTextSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 32,
    mass: 1.8,
  });

  const yScaleValue = useTransform(smoothProgress, [0, 1], [60, -120]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const transform = useMotionTemplate`rotateX(24deg) translateY(${yScaleValue}px) translateZ(15px)`;

  return (
    <section
      ref={sectionRef}
      id="cinematic-text-section"
      className="relative w-full h-screen h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image - 100% Opacity */}
      <img
        src={SECTION_2_IMAGE_URL}
        alt="Neural Architecture Mountains"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100"
      />

      {/* 3D Perspective Text Container */}
      <div
        className="relative z-20 w-full max-w-5xl px-6 sm:px-12 flex items-center justify-center"
        style={{ perspective: 400 }}
      >
        <motion.p
          style={{
            transform,
            opacity,
            transformStyle: 'preserve-3d',
          }}
          className="font-sans font-medium text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-white leading-[1.35] tracking-[-0.02em] select-none text-center [text-shadow:_0_3px_24px_rgba(0,0,0,0.95),_0_1px_4px_rgba(0,0,0,0.9)]"
        >
          A neural-AI interface built on the architecture of the human nervous system. SynapseX
          translates synaptic activity into computational intelligence. Every signal becomes
          measurable, structured, and visible. It continuously reconstructs internal state as a
          dynamic neural map Biological noise is filtered into actionable cognitive patterns
        </motion.p>
      </div>
    </section>
  );
};
