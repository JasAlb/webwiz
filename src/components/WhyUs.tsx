import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WHY_US_PILLARS } from '../data/agencyData';
import { Sparkles, Check, X, ShieldCheck, Zap, Smartphone, Gauge, Users, MessageSquare } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  '01': <Zap className="w-5 h-5 text-accent" />,
  '02': <ShieldCheck className="w-5 h-5 text-accent-soft" />,
  '03': <Smartphone className="w-5 h-5 text-accent" />,
  '04': <Gauge className="w-5 h-5 text-emerald-400" />,
  '05': <MessageSquare className="w-5 h-5 text-accent-soft" />,
  '06': <Users className="w-5 h-5 text-accent" />,
};

export const WhyUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'pillars'>('pillars');

  const comparisonItems = [
    {
      metric: 'Code Quality',
      typical: 'Bloated WordPress / Drag-and-drop templates with 40+ plugins',
      wizards: '100% Clean React, TypeScript & Tailwind engineered by hand'
    },
    {
      metric: 'Page Load Speed',
      typical: '3.5s – 6.0s (High bounce rates, poor mobile retention)',
      wizards: '<0.6s Instantaneous First Contentful Paint (99/100 PageSpeed)'
    },
    {
      metric: 'Design Originality',
      typical: 'Rehashed ThemeForest templates that look like competitors',
      wizards: 'Bespoke editorial art direction tailored to your brand distinction'
    },
    {
      metric: 'Mobile Optimization',
      typical: 'Secondary afterthought with broken layouts and awkward buttons',
      wizards: 'Responsive-first architecture tuned for iPhone and Android touch ergonomics'
    },
    {
      metric: 'Communication',
      typical: 'Bureaucratic account managers and slow support ticketing',
      wizards: 'Direct communication with founding engineers via dedicated channel'
    },
    {
      metric: 'Business Objective',
      typical: 'Deliver static pages and walk away with no conversion strategy',
      wizards: 'Conversion-engineered funnels designed to turn visitors into clients'
    }
  ];

  return (
    <section id="why-us" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/[0.035] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
              <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">
                Competitive Distinction
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              Why Choose WebWizards?
            </h2>
          </div>

          {/* Toggle between Story Cards and Comparison Matrix */}
          <div className="flex items-center p-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('pillars')}
              data-cursor="pointer"
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                activeTab === 'pillars' ? 'bg-accent text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]' : 'text-text-muted hover:text-white'
              }`}
            >
              Core Advantages
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              data-cursor="pointer"
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                activeTab === 'matrix' ? 'bg-accent text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]' : 'text-text-muted hover:text-white'
              }`}
            >
              Direct Comparison
            </button>
          </div>
        </div>

        {/* View 1: Sophisticated Visual Pillars */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative p-7 rounded-3xl bg-[#11131A]/70 border border-white/[0.08] hover:border-accent/40 transition-all duration-400 group backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] group-hover:bg-accent/20 transition-colors">
                      {iconMap[pillar.number]}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-accent-soft transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-soft mb-3">{pillar.tagline}</p>

                  <p className="text-sm text-text-secondary font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-text-muted">{pillar.statLabel}</span>
                  <span className="text-xs font-bold font-mono text-white bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                    {pillar.statValue}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View 2: Direct Comparison Matrix */}
        {activeTab === 'matrix' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#11131A]/80 border border-white/[0.1] overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 bg-white/[0.02] border-b border-white/[0.08] text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
              <div className="md:col-span-3">Dimension</div>
              <div className="md:col-span-4 mt-2 md:mt-0 text-red-400/80 flex items-center gap-1.5">
                <X className="w-4 h-4" /> Average Agency / Templates
              </div>
              <div className="md:col-span-5 mt-2 md:mt-0 text-accent-soft flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> WebWizards Studio Standard
              </div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {comparisonItems.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 hover:bg-white/[0.015] transition-colors items-center gap-4"
                >
                  <div className="md:col-span-3 font-semibold text-white text-sm">
                    {item.metric}
                  </div>
                  <div className="md:col-span-4 text-text-muted text-xs sm:text-sm font-light flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>{item.typical}</span>
                  </div>
                  <div className="md:col-span-5 text-white text-xs sm:text-sm font-normal flex items-start gap-2 bg-accent/[0.04] p-3 rounded-xl border border-accent/20">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>{item.wizards}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
