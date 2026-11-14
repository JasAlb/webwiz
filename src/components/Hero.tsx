import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, ChevronDown, Gauge, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 600], [0, 140]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0.3]);
  const scaleBadge = useTransform(scrollY, [0, 400], [1, 0.95]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden bg-transparent"
    >
      {/* Dynamic Atmospheric Hero Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] sm:h-[600px] bg-gradient-to-b from-accent/25 via-accent/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/5 w-[320px] h-[320px] bg-[#6366F1]/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-1/4 w-[380px] h-[380px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Floating 3D Geometric Spatial Elements */}
      <div className="hidden lg:block absolute left-8 xl:left-16 top-1/3 pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [-12, 14, -12],
            rotateZ: [0, 18, 0],
            rotateX: [0, 25, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative w-28 h-28 rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-md shadow-[0_0_35px_rgba(139,92,246,0.15)] flex items-center justify-center transform -rotate-12"
        >
          <div className="w-14 h-14 rounded-2xl border border-accent/30 bg-accent/5 flex items-center justify-center">
            <div className="w-6 h-6 rounded-lg bg-accent/30 animate-pulse" />
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-8 xl:right-16 top-1/3 pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [14, -14, 14],
            rotateZ: [0, -22, 0],
            rotateY: [0, 30, 0]
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative w-32 h-32 rounded-full border border-accent-soft/20 bg-gradient-to-bl from-accent-soft/10 via-[#3B82F6]/05 to-transparent backdrop-blur-md shadow-[0_0_40px_rgba(196,181,253,0.15)] flex items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full border border-white/20 border-dashed" />
        </motion.div>
      </div>

      <motion.div
        style={{ y: yHero, opacity: opacityHero }}
        className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10"
      >
        {/* Editorial Eyebrow Tag */}
        <motion.div
          style={{ scale: scaleBadge }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 hover:border-accent/40 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-soft animate-spin-slow" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-text-secondary">
            Professional Website Development Studio <span className="text-white font-semibold">WebWizards</span>
          </span>
          <span className="text-xs text-accent font-mono uppercase tracking-wider pl-1 border-l border-white/10">
            India & Global
          </span>
        </motion.div>

        {/* Hero Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-gradient-silver"
          >
            WE DON'T JUST BUILD WEBSITES.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="block mt-1 sm:mt-2 text-gradient-violet drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]"
          >
            WE BUILD DIGITAL EXPERIENCES.
          </motion.span>
        </h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-base sm:text-xl md:text-2xl text-text-secondary max-w-3xl font-light leading-relaxed tracking-normal"
        >
          WebWizards is a professional website development company crafting custom business websites, high-performance e-commerce platforms, and scalable web applications for businesses in India and worldwide.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            data-cursor="pointer"
            className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-semibold text-base shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span>Start Your Project</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </a>

          {/* Secondary CTA */}
          <a
            href="#work"
            onClick={(e) => handleScrollTo(e, '#work')}
            data-cursor="pointer"
            className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-base border border-white/[0.12] hover:border-white/[0.25] backdrop-blur-md transition-all duration-300 active:scale-[0.98]"
          >
            <span>Explore Our Work</span>
            <ChevronDown className="w-4 h-4 text-text-secondary group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        {/* Floating Interactive Metric Badges */}
        <div className="mt-16 sm:mt-20 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl pt-8 border-t border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#11131A]/60 border border-white/[0.06] hover:border-accent/40 backdrop-blur-md transition-all text-left group shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                99/100 PageSpeed
                <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded">Fast</span>
              </p>
              <p className="text-xs text-text-muted mt-0.5">Ultra-low latency web engineering</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#11131A]/60 border border-white/[0.06] hover:border-accent/40 backdrop-blur-md transition-all text-left group shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-soft/10 border border-accent-soft/20 flex items-center justify-center text-accent-soft group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                Bespoke & Unique
                <span className="text-[10px] font-mono text-accent-soft uppercase bg-accent/10 px-1.5 py-0.5 rounded">No Templates</span>
              </p>
              <p className="text-xs text-text-muted mt-0.5">Tailored visual identity for your brand</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#11131A]/60 border border-white/[0.06] hover:border-accent/40 backdrop-blur-md transition-all text-left group shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                Lead-Driven Focus
                <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded">High ROI</span>
              </p>
              <p className="text-xs text-text-muted mt-0.5">Engineered to turn traffic into clients</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 sm:mt-16 flex flex-col items-center gap-2 select-none z-10"
      >
        <a
          href="#services"
          onClick={(e) => handleScrollTo(e, '#services')}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors group"
          data-cursor="pointer"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-accent transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};
