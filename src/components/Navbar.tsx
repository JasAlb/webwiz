import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, MessageSquare, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'services', 'work', 'about', 'why-us', 'process', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#08090D]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="group flex items-center gap-3 select-none"
            data-cursor="pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent/30 to-accent-soft/10 border border-accent/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              {/* Inner geometric glyph */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:text-accent-soft transition-colors"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white flex items-center">
                Web<span className="text-accent">Wizards</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-1 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-text-muted">Digital Studio</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full select-none ${
                    isActive
                      ? 'text-white'
                      : 'text-text-secondary hover:text-white'
                  }`}
                  data-cursor="pointer"
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-full shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Availability Badge + Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Q2/Q3</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              data-magnetic
              data-cursor="pointer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#08090D] font-medium text-sm transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] active:scale-95"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-3.5 py-1.5 rounded-full bg-accent text-white text-xs font-medium"
            >
              Let's Talk
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#08090D]/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-2">
              <div className="pb-4 mb-4 border-b border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-text-muted">Navigation Menu</span>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Booking Projects
                </span>
              </div>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  className="py-3 text-2xl font-display font-semibold text-white hover:text-accent flex items-center justify-between border-b border-white/[0.04]"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-text-muted">0{index + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col gap-3.5">
              <div className="text-xs text-text-secondary space-y-1.5">
                <p className="font-semibold text-white">Direct Communication</p>
                <div>
                  <a
                    href="mailto:jassimalbin@gmail.com"
                    className="font-mono text-accent-soft hover:underline text-xs block"
                  >
                    jassimalbin@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-1 pt-1 font-mono text-[11px] text-text-muted">
                  <a href="tel:+919495068217" className="hover:text-white flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-accent" />
                    <span>Primary: +91 94950 68217</span>
                  </a>
                  <a href="tel:+919746859565" className="hover:text-white flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-accent-soft" />
                    <span>Secondary: +91 97468 59565</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with WebWizards on WhatsApp"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white text-sm font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Project</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
