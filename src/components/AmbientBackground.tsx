import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Smooth spring for desktop mouse spotlight
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Check desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia('(pointer: coarse)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (window.innerWidth >= 1024) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Subtle floating micro-particles on canvas (60fps, low resource, purely aesthetic)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 32 subtle glowing ambient particles
    const particleCount = window.innerWidth < 768 ? 16 : 32;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.45 + 0.15,
      alphaSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      color: Math.random() > 0.4 ? 'rgba(139, 92, 246,' : 'rgba(196, 181, 253,'
    }));

    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaSpeed;

        if (p.alpha > 0.6 || p.alpha < 0.1) {
          p.alphaSpeed *= -1;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Large Drifting Cinematic Glow Blobs (Violet, Indigo, Blue) */}
      <div
        className={`absolute -top-40 -left-40 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full bg-gradient-to-br from-accent/15 via-[#6366F1]/10 to-transparent blur-[140px] opacity-70 ${
          prefersReducedMotion ? '' : 'animate-float'
        }`}
      />

      <div
        className={`absolute top-1/3 -right-40 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] rounded-full bg-gradient-to-bl from-[#8B5CF6]/12 via-[#3B82F6]/08 to-transparent blur-[150px] opacity-60 ${
          prefersReducedMotion ? '' : 'animate-float-reverse'
        }`}
      />

      <div
        className={`absolute -bottom-40 left-1/4 w-[700px] sm:w-[900px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-t from-accent/15 via-[#C4B5FD]/08 to-transparent blur-[160px] opacity-50 ${
          prefersReducedMotion ? '' : 'animate-pulse-slow'
        }`}
      />

      {/* 2. Interactive Desktop Mouse Spotlight */}
      {isDesktop && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 transition-opacity duration-500 opacity-60"
          style={{
            background: `radial-gradient(750px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(139, 92, 246, 0.08), rgba(99, 102, 241, 0.03) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* 3. Subtle Cybernetic Perspective Grid with Ambient Breathing */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* 4. Canvas Floating Stardust Particles */}
      {!prefersReducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-75"
        />
      )}
    </div>
  );
};
