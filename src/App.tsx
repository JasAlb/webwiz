import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { AmbientBackground } from './components/AmbientBackground';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090D] text-white selection:bg-accent/30 selection:text-white overflow-x-hidden">
      {/* Cinematic Ambient Background System (Atmospheric Glows, Mouse Spotlight, Particles) */}
      <AmbientBackground />

      {/* Custom Cursor System */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Agency Entrance Curtain Loader */}
      {!loadingComplete && (
        <PageLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section: What We Create */}
        <Services />

        {/* 3. Featured Projects / Portfolio: Selected Work. Real Impact. */}
        <Portfolio />

        {/* 4. About Section: Small Details. Big Digital Thinking. */}
        <About />

        {/* 5. Why Choose WebWizards */}
        <WhyUs />

        {/* 6. Process: From First Idea to Final Launch. */}
        <Process />

        {/* 7. Master Call To Action */}
        <CtaSection />

        {/* 8. Lead Generation Contact Command Center */}
        <Contact />
      </main>

      {/* Floating Persistent WhatsApp Chat Bubble */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
