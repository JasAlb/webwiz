import React, { useEffect } from 'react';
import { Home, Sparkles, MessageSquare } from 'lucide-react';

interface NotFoundPageProps {
  onGoHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  useEffect(() => {
    document.title = '404: Page Not Found | WebWizards Digital Studio';
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-[#08090D] relative z-10 text-white text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-xs font-mono text-accent-soft">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 404 • Missing Resource</span>
        </div>

        <h1 className="font-display font-extrabold text-6xl sm:text-7xl text-white tracking-tight">
          4<span className="text-accent">0</span>4
        </h1>

        <p className="text-base text-text-secondary font-light leading-relaxed">
          The digital path you are attempting to access does not exist or has been relocated to a cleaner canonical destination.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onGoHome}
            data-cursor="pointer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </button>

          <a
            href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </main>
  );
};
