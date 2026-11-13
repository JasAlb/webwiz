import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover or entrance */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#11131A]/95 border border-white/10 backdrop-blur-xl shadow-2xl text-xs text-white"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono">Chat with us on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-text-muted hover:text-white ml-1"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WebWizards on WhatsApp"
        data-cursor="pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-white shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_35px_rgba(16,185,129,0.6)] transition-all duration-300"
      >
        {/* Pulsing Aura Rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />

        {/* Inner SVG WhatsApp Icon */}
        <MessageSquare className="w-6 h-6 text-white drop-shadow-md" />

        {/* Small Active Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-[#08090D] rounded-full" />
      </motion.a>
    </div>
  );
};
