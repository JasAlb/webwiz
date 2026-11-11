import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/agencyData';
import { Sparkles, CheckCircle, Clock, FileCheck } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090D] overflow-hidden border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
              <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">
                Methodology & Timeline
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              From First Idea to Final Launch.
            </h2>
          </div>
          <p className="text-text-secondary text-base sm:text-lg max-w-md font-light">
            A battle-tested four-phase engineering journey engineered for speed, absolute transparency, and zero surprises.
          </p>
        </div>

        {/* 4-Step Interactive Horizontal/Vertical Progress Track */}
        <div className="relative mb-16">
          {/* Connecting glowing progress line for desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-white/[0.08] z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-accent-soft to-white shadow-[0_0_12px_#8B5CF6]"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  data-cursor="pointer"
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#11131A] border-accent shadow-[0_0_35px_rgba(139,92,246,0.25)]'
                      : isPast
                      ? 'bg-white/[0.03] border-white/[0.12] hover:border-accent/40'
                      : 'bg-white/[0.015] border-white/[0.05] hover:bg-white/[0.03] hover:border-white/[0.15]'
                  }`}
                >
                  <div>
                    {/* Step Number & Indicator Pin */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                          isActive
                            ? 'bg-accent text-white shadow-[0_0_20px_#8B5CF6]'
                            : isPast
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-white/[0.05] text-text-muted border border-white/[0.08]'
                        }`}
                      >
                        {step.step}
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-text-muted">
                        <Clock className="w-3 h-3 text-accent" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className={`font-display font-bold text-xl mb-1 ${isActive ? 'text-white' : 'text-white/80'}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-accent-soft mb-3">{step.subtitle}</p>

                    <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Deliverable Badge */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="flex items-start gap-2 text-xs text-text-secondary">
                      <FileCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="font-mono text-[11px] text-white/90">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Workbench for Selected Step */}
        <div className="rounded-3xl bg-[#11131A]/90 border border-white/[0.1] p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-accent animate-ping" />
              <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                Deep Dive: Phase {PROCESS_STEPS[activeStepIndex].step} — {PROCESS_STEPS[activeStepIndex].title} ({PROCESS_STEPS[activeStepIndex].subtitle})
              </h4>
            </div>
            <span className="text-xs font-mono text-text-muted">
              Estimated Phase Duration: {PROCESS_STEPS[activeStepIndex].duration}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS[activeStepIndex].activities.map((act, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-text-secondary"
              >
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
