import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090D] overflow-hidden border-t border-white/[0.04]">
      {/* Cinematic Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-r from-accent/20 via-accent-soft/10 to-accent/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
          <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">
            Initiate Your Transformation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] max-w-4xl mx-auto"
        >
          YOUR NEXT BIG IDEA DESERVES A{' '}
          <span className="text-gradient-violet drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]">
            BETTER WEBSITE.
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed"
        >
          Let's turn your vision into something extraordinary.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={handleScrollToContact}
            data-cursor="pointer"
            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-base shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Let's Build Something</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </a>

          <a
            href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            aria-label="Chat with WebWizards on WhatsApp"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-text-secondary hover:text-white text-sm font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat with us on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
