import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast, elegant counter up to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#08090D] flex flex-col justify-between p-8 sm:p-12 pointer-events-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              WEBWIZARDS // DIGITAL STUDIO
            </span>
            <span>SYSTEM_V2.6</span>
          </div>

          {/* Center Brand Monogram */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-soft/10 border border-accent/40 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-mono tracking-widest uppercase text-accent-soft"
            >
              Crafting Digital Experiences
            </motion.p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-text-muted block">
                Loading Studio Assets
              </span>
              <div className="w-36 sm:w-48 h-1 bg-white/[0.1] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent shadow-[0_0_10px_#8B5CF6]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="font-display font-bold text-4xl sm:text-6xl text-white font-mono">
              {progress < 10 ? `0${progress}` : progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
