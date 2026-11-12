import React, { useEffect } from 'react';
import { ArticleItem } from '../data/seoData';
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

interface ArticlePageProps {
  article: ArticleItem;
  onBack: () => void;
  onNavigateService?: (slug: string) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack, onNavigateService }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = article.metaTitle;
  }, [article]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="min-h-screen pt-28 pb-24 px-6 sm:px-8 bg-[#08090D] relative z-10 text-white">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-text-muted">
          <button onClick={onBack} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <button onClick={onBack} className="hover:text-white transition-colors">Insights</button>
          <span>/</span>
          <span className="text-accent-soft truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Back Link */}
        <button
          onClick={onBack}
          data-cursor="pointer"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Insights</span>
        </button>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 mb-5">
          <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
          <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">{article.category}</span>
        </div>

        {/* Primary H1 Heading */}
        <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] mb-6">
          {article.title}
        </h1>

        {/* Article Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-8 border-y border-white/[0.08] text-xs font-mono text-text-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white">
              <User className="w-3.5 h-3.5 text-accent" />
              {article.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent-soft" />
              {article.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              {article.readTime}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Share article"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>

        {/* Hero Cover Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] mb-12 border border-white/[0.08] bg-[#11131A] shadow-2xl">
          <img
            src={article.coverImage}
            alt={article.title}
            loading="lazy"
            decoding="async"
            width="1200"
            height="675"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="space-y-10 text-text-secondary leading-relaxed font-light text-base sm:text-lg">
          {article.content.map((block, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-3xl text-white tracking-tight pt-2">
                {block.heading}
              </h2>

              {block.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {block.list && (
                <ul className="space-y-2.5 my-4 pl-4 border-l-2 border-accent/40 text-sm sm:text-base">
                  {block.list.map((item, lIdx) => (
                    <li key={lIdx} className="text-white/90">
                      • {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#11131A] border border-white/[0.08] flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-xl font-bold font-display shrink-0">
            WW
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-white">{article.author}</h4>
            <p className="text-xs font-mono text-accent-soft mb-1">{article.authorRole}</p>
            <p className="text-xs text-text-muted leading-relaxed font-light">
              WebWizards is an international creative technology studio building high-performance websites, scalable web applications, and conversion-engineered digital platforms.
            </p>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-accent/15 via-[#11131A] to-emerald-500/10 border border-white/[0.1] text-center space-y-6">
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-white">
            Ready to Build a Fast, High-Converting Website?
          </h3>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto font-light leading-relaxed">
            Get in touch with our founding technical team for a transparent INR pricing proposal, performance review, and delivery roadmap within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onBack();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            {onNavigateService && (
              <button
                onClick={() => onNavigateService('website-development')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white text-sm font-medium transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
