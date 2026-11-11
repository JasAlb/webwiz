import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/agencyData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Website Development', 'E-Commerce', 'Web Applications', 'UI/UX Design'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) =>
        p.services.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <section id="work" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090D] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
              <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">
                Concept & Production Showcase
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              Selected Work. Real Impact.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-text-secondary text-sm sm:text-base max-w-sm font-light">
              High-fidelity demo prototypes showcasing our engineering rigor, editorial art direction, and conversion design.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-text-muted ml-3 mr-1 hidden sm:block" />
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  data-cursor="pointer"
                  className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 select-none whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="workCategoryPill"
                      className="absolute inset-0 bg-accent text-white rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project Showcase with Alternating Layout */}
        <div className="space-y-20 sm:space-y-32">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
              >
                {/* Visual Image Preview Column */}
                <div
                  className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  data-cursor="project"
                  onClick={() => setActiveModalProject(project)}
                >
                  <div className="group relative rounded-3xl overflow-hidden bg-[#11131A] border border-white/[0.08] hover:border-accent/50 transition-all duration-500 cursor-pointer shadow-xl">
                    {/* Aspect container */}
                    <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden relative">
                      <img
                        src={project.heroImage}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Ambient Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Floating View Pill on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="px-5 py-2.5 rounded-full bg-accent text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_30px_#8B5CF6] flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-4 h-4" />
                          <span>Inspect Project Case</span>
                        </div>
                      </div>

                      {/* Industry Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-[#08090D]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-text-secondary">
                          {project.industry}
                        </span>
                      </div>

                      {/* Concept Tag */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-accent-soft">
                          Demo Architecture
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Content Info Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col`}>
                  {/* Meta indices */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-semibold text-accent">0{index + 1}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs font-mono text-text-muted">{project.client}</span>
                  </div>

                  {/* Project Name */}
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    data-cursor="pointer"
                    className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight hover:text-accent-soft transition-colors cursor-pointer"
                  >
                    {project.name}
                  </h3>

                  {/* Services Provided */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.services.map((service, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-medium text-text-secondary"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Short Description */}
                  <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Key Highlights Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-4 mb-6 border-y border-white/[0.06]">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] font-mono text-text-muted uppercase truncate">{metric.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* View Project Action */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    data-cursor="pointer"
                    className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white group hover:text-accent transition-colors"
                  >
                    <span>View Project</span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] group-hover:bg-accent border border-white/[0.1] group-hover:border-accent flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
