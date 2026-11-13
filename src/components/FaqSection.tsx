import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS_DATA } from '../data/seoData';
import { Sparkles, Plus, Minus, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  categoryFilter?: string;
  limit?: number;
  showHeader?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  categoryFilter,
  limit,
  showHeader = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFilter || 'All');

  const categories = ['All', 'Pricing & Cost', 'Timeline', 'Scope & Inclusions', 'Website Redesign', 'E-Commerce', 'Getting Started'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  }).slice(0, limit || FAQS_DATA.length);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#08090D] overflow-hidden border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.035] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-white/[0.08] gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
                <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">
                  Answer Engine Optimization & Clarity
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base max-w-sm font-light">
              Transparent answers regarding our Indian Rupee pricing, development timelines, deliverables, and engineering standards.
            </p>
          </div>
        )}

        {/* Category Filter Pills (if not filtered by parent) */}
        {!categoryFilter && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(0);
                  }}
                  data-cursor="pointer"
                  className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-accent text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                      : 'bg-white/[0.02] border border-white/[0.06] text-text-muted hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#11131A] border-accent/40 shadow-[0_4px_25px_rgba(139,92,246,0.12)]'
                    : 'bg-white/[0.015] border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.03]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  data-cursor="pointer"
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-accent shrink-0 text-xs font-mono">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-accent text-white' : 'bg-white/[0.04] text-text-muted'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-text-secondary font-light leading-relaxed border-t border-white/[0.04]">
                        <p>{faq.answer}</p>

                        <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-text-muted">
                          <span>Topic: {faq.category}</span>
                          <span className="text-accent-soft">Verified Studio Policy</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-transparent to-emerald-500/10 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Have a specific project question?</h4>
              <p className="text-xs text-text-muted">Our founding engineers answer inquiries within 2 hours.</p>
            </div>
          </div>

          <a
            href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat with us on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
