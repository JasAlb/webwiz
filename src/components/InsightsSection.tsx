import React from 'react';
import { ARTICLES_DATA } from '../data/seoData';
import { Sparkles, ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';

interface InsightsSectionProps {
  onNavigateArticle: (slug: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onNavigateArticle }) => {
  return (
    <section id="insights" className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#08090D] overflow-hidden border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-accent/[0.035] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
              <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">
                Knowledge Base & Topical Authority
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Engineering & Digital Insights
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md font-light">
            Original architectural guides and commercial analysis on web development pricing in India, custom code vs templates, and e-commerce scaling.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.slug}
              onClick={() => onNavigateArticle(article.slug)}
              data-cursor="pointer"
              className="group rounded-3xl bg-[#11131A] border border-white/[0.08] hover:border-accent/40 transition-all duration-400 overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#08090D]">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="375"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11131A] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#08090D]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-accent-soft">
                    {article.category}
                  </span>
                </div>

                {/* Content Info */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-4 text-xs font-mono text-text-muted mb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent-soft" />
                      {article.publishedDate}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-accent-soft transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary font-light line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/[0.04] mt-4 flex items-center justify-between text-xs font-semibold text-accent-soft group-hover:text-white transition-colors">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Guide</span>
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
