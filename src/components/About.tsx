import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Lightbulb, HeartHandshake, Award } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Our Philosophy',
      icon: <Compass className="w-5 h-5 text-accent" />,
      detail: 'Every brand has an intrinsic soul. We refuse template homogeny and cookie-cutter layouts. We build digital spaces that feel alive, bespoke, and undeniably authentic.'
    },
    {
      title: 'Our Approach',
      icon: <Lightbulb className="w-5 h-5 text-accent-soft" />,
      detail: 'Engineering meets editorial art direction. We marry surgical frontend performance and accessible code with emotional visual storytelling that commands respect.'
    },
    {
      title: 'Our Commitment to Quality',
      icon: <Award className="w-5 h-5 text-accent" />,
      detail: 'Zero compromise on speed, responsiveness, or typography. We test across 15+ real devices, stress-test animations for 60fps fluidity, and guarantee 95+ PageSpeed health.'
    },
    {
      title: 'Our Focus on Client Success',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      detail: 'A breathtaking website is meaningless if it does not produce business results. Every layout, button, and interaction is engineered to convert visitors into inquiries.'
    }
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090D] overflow-hidden border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
          <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">About WebWizards</span>
        </div>

        {/* Asymmetrical Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 sm:mb-28">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12]">
              Small Details.
              <span className="block text-gradient-violet">Big Digital Thinking.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-base sm:text-xl text-text-secondary font-light leading-relaxed">
              At WebWizards, we believe every business deserves a powerful digital presence. We combine creative thinking, modern technology, and thoughtful design to create digital experiences that make businesses stand out.
            </p>
          </div>
        </div>

        {/* Layered Composition: Visual Showcase + Four Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Layered Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#11131A] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80"
                alt="WebWizards Digital Studio Craftsmanship and Engineering Workspace"
                width="900"
                height="600"
                decoding="async"
                className="w-full h-80 sm:h-96 object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-80" />

              {/* Floating Studio Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#08090D]/85 backdrop-blur-xl border border-white/[0.1]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">Studio Standard</span>
                  <span className="text-xs font-mono text-emerald-400">Pure Craft</span>
                </div>
                <p className="text-xs text-text-secondary font-light">
                  "Excellence is not an accident; it is the natural consequence of obsessing over every pixel, frame, and millisecond."
                </p>
              </div>
            </div>

            {/* Behind Ambient Badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 px-4 py-3 rounded-2xl bg-accent/20 border border-accent/40 backdrop-blur-xl text-white shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider block text-accent-soft">Core Rule</span>
              <span className="text-sm font-semibold">Zero Boring Templates</span>
            </div>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-accent/30 hover:bg-white/[0.035] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-accent-soft transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                  {pillar.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
