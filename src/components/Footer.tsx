import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, Mail, Globe2, BookOpen } from 'lucide-react';
import { SERVICE_PAGES_DATA, ARTICLES_DATA } from '../data/seoData';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }) + ' UTC'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      if (onNavigate) {
        onNavigate(path);
      } else {
        const target = document.querySelector(path);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (path.startsWith('/')) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
        return; // Allow new tab opens
      }
      e.preventDefault();
      if (onNavigate) {
        onNavigate(path);
      } else {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  const serviceLinks = Object.values(SERVICE_PAGES_DATA).map((s) => ({
    title: s.title,
    href: `/services/${s.slug}`
  }));

  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] pt-20 pb-12 px-6 sm:px-8 overflow-hidden text-text-secondary">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand & Geographic Service Area Column */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/30 to-accent-soft/10 border border-accent/40 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Web<span className="text-accent">Wizards</span>
              </span>
            </a>

            <p className="text-sm text-text-secondary font-light max-w-sm leading-relaxed">
              We transform ambitious ideas into powerful digital experiences. Custom website development, high-converting e-commerce, web applications, and bespoke UI/UX design engineered for scalable business growth.
            </p>

            {/* Service Area Badge */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-white font-medium">
                <Globe2 className="w-3.5 h-3.5 text-accent" />
                <span>Service Regions & Availability</span>
              </div>
              <p className="text-text-muted leading-relaxed text-[11px]">
                Serving businesses across India — Bengaluru, Mumbai, Delhi NCR, Hyderabad, Chennai, Kochi — and global clients worldwide.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-white font-medium">Studio Active</span>
              <span className="text-text-muted">• {currentTime || 'Loading...'}</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'Services', href: '#services' },
                { name: 'Work', href: '#work' },
                { name: 'About', href: '#about' },
                { name: 'Process', href: '#process' },
                { name: 'Insights', href: '#insights' },
                { name: 'FAQs', href: '#faqs' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Deep Dive Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Services & Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((srv) => (
                <li key={srv.href}>
                  <a
                    href={srv.href}
                    onClick={(e) => handleLinkClick(e, srv.href)}
                    className="text-text-secondary hover:text-accent-soft transition-colors line-clamp-1 flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Insights Column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Official Contact
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span className="font-mono">Chat with us on WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:jassimalbin@gmail.com"
                    className="flex items-center gap-2.5 text-text-secondary hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-mono group-hover:underline">jassimalbin@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Knowledge Base Articles */}
            <div className="space-y-2 pt-2 border-t border-white/[0.06]">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-accent-soft" />
                Featured Insights
              </h5>
              <ul className="space-y-1.5 text-xs">
                {ARTICLES_DATA.map((art) => (
                  <li key={art.slug}>
                    <a
                      href={`/insights/${art.slug}`}
                      onClick={(e) => handleLinkClick(e, `/insights/${art.slug}`)}
                      className="text-text-muted hover:text-accent-soft transition-colors line-clamp-1 block text-[12px]"
                    >
                      {art.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © {new Date().getFullYear()} WebWizards Digital Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-text-muted">
              Built with React, TypeScript & Tailored Physics
            </span>

            <button
              onClick={scrollToTop}
              data-cursor="pointer"
              className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors group"
            >
              <span>Back to Top</span>
              <div className="w-7 h-7 rounded-full bg-white/[0.04] group-hover:bg-accent border border-white/[0.08] group-hover:border-accent flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
