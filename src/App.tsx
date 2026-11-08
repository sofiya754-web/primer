import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CinematicTextSection } from './components/CinematicTextSection';
import { MetricsSection } from './components/MetricsSection';
import { TechnologySection } from './components/TechnologySection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [entranceComplete, setEntranceComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntranceComplete(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ fontFamily: '"Space Mono", monospace' }}
      className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden"
    >
      <Navbar entranceComplete={entranceComplete} />

      <main className="w-full">
        <HeroSection entranceComplete={entranceComplete} />
        <CinematicTextSection />
        <MetricsSection />
        <TechnologySection />
        <ArchitectureSection />
      </main>

      <FooterSection />
    </div>
  );
}

