import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../data/agencyData';
import {
  Code2,
  ShoppingBag,
  Palette,
  Layers,
  TrendingUp,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Activity,
  Sparkles,
  Sliders
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-accent" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-accent" />,
  Palette: <Palette className="w-5 h-5 text-accent" />,
  Layers: <Layers className="w-5 h-5 text-accent" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-accent" />,
  RefreshCw: <RefreshCw className="w-5 h-5 text-accent" />
};

interface ServicesProps {
  onNavigateService?: (slug: string) => void;
}

const serviceSlugMap: Record<string, string> = {
  'web-development': 'website-development',
  'ecommerce': 'ecommerce-development',
  'ui-ux-design': 'ui-ux-design',
  'web-applications': 'web-applications',
  'seo-optimization': 'seo-optimization',
  'website-redesign': 'website-redesign',
  'website-maintenance': 'website-maintenance'
};

export const Services: React.FC<ServicesProps> = ({ onNavigateService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_DATA[0].id);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const serviceSlug = serviceSlugMap[selectedService.id] || 'website-development';

  const handleSelectServiceForContact = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to preselect service in contact form
      window.dispatchEvent(new CustomEvent('selectService', { detail: serviceTitle }));
    }
  };

  const handleServicePageClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    if (onNavigateService) {
      onNavigateService(slug);
    } else {
      window.history.pushState({}, '', `/services/${slug}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section id="services" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090D] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
              <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">Expertise & Capabilities</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              What We Create
            </h2>
          </div>
          <p className="text-text-secondary text-base sm:text-lg max-w-md font-light">
            Digital solutions designed to move businesses forward. Custom-engineered for performance, identity, and revenue.
          </p>
        </div>

        {/* Interactive Creative Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service Directory */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  data-cursor="pointer"
                  className={`group relative p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-white/[0.05] border-accent/40 shadow-[0_0_30px_rgba(139,92,246,0.15)]'
                      : 'bg-white/[0.015] border-white/[0.05] hover:bg-white/[0.03] hover:border-white/[0.15]'
                  }`}
                >
                  {/* Left accent indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeServiceIndicator"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-accent rounded-r-full shadow-[0_0_12px_#8B5CF6]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm sm:text-base font-semibold ${isSelected ? 'text-accent' : 'text-text-muted'}`}>
                        {service.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`font-display text-lg sm:text-xl font-bold transition-colors ${isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                            {service.title}
                          </h3>
                          {service.startingPrice && (
                            <span className="hidden sm:inline-block text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                              From {service.startingPrice}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary line-clamp-1 mt-1 font-light">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className={`p-2 rounded-xl transition-all ${isSelected ? 'bg-accent/20 text-accent-soft' : 'bg-white/[0.02] text-text-muted group-hover:text-white'}`}>
                      {iconMap[service.iconName] || <Sliders className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Mobile-Only Quick Info when active */}
                  <div className="block lg:hidden mt-4 pt-4 border-t border-white/[0.06] text-xs text-text-secondary">
                    {service.detailedDesc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Visual Showcase Canvas */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl bg-[#11131A]/90 border border-white/[0.1] p-6 sm:p-10 shadow-2xl overflow-hidden backdrop-blur-xl"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[90px] pointer-events-none" />

                {/* Service Tag & Stat Pill */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent">
                      {iconMap[selectedService.iconName]}
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-accent-soft">
                        Service Index {selectedService.number}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-3">
                    {selectedService.startingPrice && (
                      <div className="flex flex-col items-end px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <span className="text-[10px] font-mono uppercase text-emerald-400">Starting From</span>
                        <span className="text-sm font-bold text-white font-mono">{selectedService.startingPrice}</span>
                      </div>
                    )}
                    <div className="flex flex-col items-end px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <span className="text-[10px] font-mono uppercase text-text-muted">{selectedService.statLabel}</span>
                      <span className="text-sm font-bold text-accent font-mono">{selectedService.statValue}</span>
                    </div>
                  </div>
                </div>

                {/* Big Headline */}
                <h4 className="text-lg sm:text-xl font-medium text-white/90 leading-relaxed mb-4">
                  "{selectedService.headline}"
                </h4>

                <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed mb-8">
                  {selectedService.detailedDesc}
                </p>

                {/* Interactive Simulated Preview Box */}
                <div className="mb-8 rounded-2xl bg-[#08090D] border border-white/[0.08] p-4 sm:p-5 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-text-muted">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-accent" />
                      <span>webwizards_core::{selectedService.id}.ts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-text-secondary">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-white font-semibold flex items-center gap-1.5 mb-1 text-[11px]">
                        <Activity className="w-3.5 h-3.5 text-accent" /> Architecture Standard
                      </span>
                      <p className="text-[11px] text-text-muted">Zero-dependency bloat, accessible WCAG 2.1 AA, responsive sub-second rendering.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-white font-semibold flex items-center gap-1.5 mb-1 text-[11px]">
                        <Sparkles className="w-3.5 h-3.5 text-accent-soft" /> Conversion Focus
                      </span>
                      <p className="text-[11px] text-text-muted">High-intent CTA placement, lead capture hooks, and analytics observability.</p>
                    </div>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                    Key Deliverables & Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Direct Action */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {selectedService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <a
                      href={`/services/${serviceSlug}`}
                      onClick={(e) => handleServicePageClick(e, serviceSlug)}
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-soft transition-colors"
                    >
                      <span>Full Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleSelectServiceForContact(selectedService.title)}
                      data-cursor="pointer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] group"
                    >
                      <span>Request {selectedService.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
