import React, { useEffect } from 'react';
import { ServicePageData } from '../data/seoData';
import { PROJECTS_DATA } from '../data/agencyData';
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageSquare,
  HelpCircle,
  Code2,
  Zap
} from 'lucide-react';

interface ServicePageProps {
  service: ServicePageData;
  onBack: () => void;
  onInquire: (serviceTitle: string) => void;
  onOpenProject: (projectId: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  service,
  onBack,
  onInquire,
  onOpenProject,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = service.metaTitle;
  }, [service]);

  const relatedProjectsList = PROJECTS_DATA.filter((p) =>
    service.relatedProjects.includes(p.id)
  );

  return (
    <article className="min-h-screen pt-28 pb-24 px-6 sm:px-8 bg-[#08090D] relative z-10 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-accent/[0.05] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-text-muted">
          <button onClick={onBack} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <button onClick={onBack} className="hover:text-white transition-colors">Services</button>
          <span>/</span>
          <span className="text-accent-soft">{service.title}</span>
        </nav>

        {/* Back Link */}
        <button
          onClick={onBack}
          data-cursor="pointer"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Studio Services</span>
        </button>

        {/* Eyebrow & Pricing Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30">
            <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
            <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">
              Specialized Studio Service
            </span>
          </div>

          <div className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            Starting from {service.startingPrice}
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-text-muted">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>Timeline: {service.timeline}</span>
          </div>
        </div>

        {/* Primary H1 Heading */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] mb-6">
          {service.h1}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl mb-12">
          {service.subtitle}
        </p>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16 p-6 rounded-3xl bg-[#11131A] border border-white/[0.08] shadow-2xl">
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg text-white mb-1">
              Ready to discuss {service.title}?
            </h3>
            <p className="text-xs text-text-muted">
              Get an accurate scope breakdown, timeline estimation, and fixed proposal in INR within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onInquire(service.title)}
              data-cursor="pointer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <span>Get Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="px-4 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-sm font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Section 1: In-Depth Overview */}
        <section className="mb-20 space-y-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Overview & Commercial Strategy
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed">
            {service.overview}
          </p>
        </section>

        {/* Section 2: Customer Benefits Grid */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-soft block mb-1">Commercial Impact</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              Customer Value & Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#11131A] border border-white/[0.08] hover:border-accent/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Deliverables & Tech Stack */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#11131A] border border-white/[0.08]">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
              Included Deliverables
            </h2>
            <div className="space-y-3.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#11131A] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-accent-soft">
                <Code2 className="w-5 h-5" />
                <h2 className="font-display font-bold text-xl text-white">Technology Stack</h2>
              </div>
              <p className="text-xs text-text-muted font-light mb-6">
                Modern, reliable technologies chosen for speed, maintainability, and zero security vulnerabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#08090D] border border-white/[0.08] text-xs font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-text-muted">
              Standard: 100% Clean Code, Zero Template Dependencies
            </div>
          </div>
        </section>

        {/* Section 4: Development Process */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-soft block mb-1">Execution Roadmap</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              Our 4-Phase Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.processSteps.map((s, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                <div className="font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded w-fit mb-3">
                  Phase {s.step}
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2">{s.title}</h3>
                <p className="text-xs text-text-secondary font-light leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Relevant Portfolio Showcases */}
        {relatedProjectsList.length > 0 && (
          <section className="mb-20">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent-soft block mb-1">Evidence of Craft</span>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                  Relevant Work & Case Studies
                </h2>
              </div>
              <button
                onClick={onBack}
                className="text-xs font-mono text-accent-soft hover:underline hidden sm:block"
              >
                View all projects →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjectsList.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onOpenProject(project.id)}
                  data-cursor="pointer"
                  className="group rounded-3xl bg-[#11131A] border border-white/[0.08] hover:border-accent/40 overflow-hidden cursor-pointer transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="375"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11131A] via-transparent to-transparent opacity-75" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#08090D]/80 border border-white/10 text-white">
                      {project.industry}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-bold text-base text-white group-hover:text-accent-soft transition-colors mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-2">{project.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 6: Service-Specific FAQs */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-soft block mb-1">Q&A Knowledge Base</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              {service.title} FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#11131A] border border-white/[0.08]">
                <h3 className="font-display font-semibold text-base sm:text-lg text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Enquiry Conversion CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-accent/20 via-[#11131A] to-emerald-500/10 border border-white/[0.1] text-center space-y-6">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
            Let's Engineer Your {service.title} Project
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto font-light leading-relaxed">
            Direct collaboration with senior engineers. Fixed milestone agreements in INR with zero surprise expenses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onInquire(service.title)}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)]"
            >
              <span>Request {service.title} Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};
