import React from 'react';
import { SynapseXLogo } from './SynapseXLogo';

const FOOTER_IMAGE_URL = 'https://i.ibb.co/GvXL6ZDQ/IGUANA.png';

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="synapsex-footer"
      className="w-full bg-black overflow-hidden flex flex-col md:flex-row min-h-[400px] border-t border-white/[0.08] relative"
    >
      {/* Dot Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dot-overlay z-0" />

      {/* Left Column: Image - 100% Opacity */}
      <div className="w-full md:w-1/2 min-h-[300px] sm:min-h-[360px] md:min-h-[420px] relative overflow-hidden bg-black border-b md:border-b-0 md:border-r border-white/[0.08] z-10 flex items-center justify-center">
        <img
          src={FOOTER_IMAGE_URL}
          alt="SynapseX Neural Entity"
          className="w-full h-full object-cover object-center opacity-100"
        />
      </div>

      {/* Right Column: Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-10 sm:p-16 bg-black z-10">
        {/* Top Content */}
        <div>
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5 mb-6">
            <SynapseXLogo className="w-[18px] h-[18px] text-white" />
            <span className="text-sm font-semibold text-white tracking-tighter">
              SynapseX
            </span>
          </div>

          <div className="w-12 h-[1px] bg-white/40 mb-4" />

          {/* Description */}
          <p className="text-white/60 text-[14px] leading-relaxed max-w-sm font-normal">
            SynapseX. The next evolution of human-machine interaction. Built for those who refuse to
            be limited by biology alone.
          </p>
        </div>

        {/* Bottom Copyright */}
        <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mt-12">
          &copy; 2026 SynapseX Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
