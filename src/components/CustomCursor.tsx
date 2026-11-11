import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'project'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth trailing spring physics for outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check what element we are hovering
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, select, [data-magnetic], [data-cursor="pointer"]');
      const projectCard = target.closest('[data-cursor="project"]');

      if (projectCard) {
        setCursorState('project');
      } else if (interactive) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer trailing aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border flex items-center justify-center transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: cursorState === 'project' ? 84 : cursorState === 'hover' ? 52 : 36,
          height: cursorState === 'project' ? 84 : cursorState === 'hover' ? 52 : 36,
          backgroundColor:
            cursorState === 'project'
              ? 'rgba(139, 92, 246, 0.9)'
              : cursorState === 'hover'
              ? 'rgba(139, 92, 246, 0.15)'
              : 'rgba(255, 255, 255, 0.03)',
          borderColor:
            cursorState === 'project'
              ? '#8B5CF6'
              : cursorState === 'hover'
              ? 'rgba(196, 181, 253, 0.8)'
              : 'rgba(255, 255, 255, 0.25)',
          scale: isVisible ? 1 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {cursorState === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[11px] font-bold uppercase tracking-widest text-white select-none pointer-events-none"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: cursorState === 'project' ? 0 : cursorState === 'hover' ? 6 : 4,
          height: cursorState === 'project' ? 0 : cursorState === 'hover' ? 6 : 4,
          opacity: cursorState === 'project' ? 0 : isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};
