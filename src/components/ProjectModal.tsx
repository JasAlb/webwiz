import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../types';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleStartProjectWithInspiration = () => {
    onClose();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('selectService', {
          detail: project.services[0] || 'Website Development'
        })
      );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#08090D]/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#11131A] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#08090D]/60 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                Demo Showcase Archive • {project.industry}
              </span>
            </div>

            <button
              onClick={onClose}
              data-cursor="pointer"
              className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.1] flex items-center justify-center text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8">
            {/* Visual Hero Image Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-video sm:aspect-[21/9] bg-[#08090D]">
              <img
                src={project.heroImage}
                alt={`${project.name} - ${project.industry} Showcase`}
                width="1200"
                height="675"
                decoding="async"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/30 backdrop-blur-md border border-accent/40 text-xs font-mono text-accent-soft mb-2">
                    {project.client}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white drop-shadow-md">
                    {project.name}
                  </h3>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  {project.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-[#08090D]/80 backdrop-blur-md border border-white/10 text-right"
                    >
                      <div className="text-[10px] font-mono text-text-muted uppercase">{m.label}</div>
                      <div className="text-xs font-bold text-white font-mono">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scope & Services Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-text-muted uppercase mr-2">Scope:</span>
              {project.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-accent-soft"
                >
                  {srv}
                </span>
              ))}
            </div>

            {/* Detailed Description */}
            <div>
              <h4 className="text-base font-semibold text-white mb-2">Project Overview</h4>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base font-light">
                {project.fullDescription}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h5 className="text-xs font-mono uppercase tracking-wider text-accent-soft flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> The Strategic Challenge
                </h5>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> The Engineering Solution
                </h5>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                Architectural Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                Technology Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-[#08090D] border border-white/[0.08] text-xs font-mono text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 sm:px-10 py-4 border-t border-white/[0.08] bg-[#08090D]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-text-muted">
              Ready for a custom website with this caliber of design & performance?
            </div>

            <button
              onClick={handleStartProjectWithInspiration}
              data-cursor="pointer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <span>Build A Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
