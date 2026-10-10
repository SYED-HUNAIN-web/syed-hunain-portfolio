"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 2200; // 2.2 seconds premium duration

    let animId: number;
    let timeoutId: NodeJS.Timeout;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Smooth cubic easing curve
      const eased = 1 - Math.pow(1 - t, 3);
      const currentProgress = Math.min(Math.round(eased * 100), 100);

      setProgress(currentProgress);

      if (t < 1) {
        animId = requestAnimationFrame(update);
      } else {
        timeoutId = setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
          onComplete?.();
        }, 280);
      }
    };

    animId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timeoutId);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] w-screen h-screen bg-[#050505] flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden px-4"
        >
          {/* Subtle Background Glow & Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
            {/* Soft Ambient Red Radial Glow */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] rounded-full bg-primary/15 blur-[130px]"
            />

            {/* Subtle drifting micro-particles */}
            <div
              className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/40 blur-[0.5px] animate-float-particle"
              style={{ animationDelay: "-1s" }}
            />
            <div
              className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-primary/50 blur-[0.5px] animate-float-particle"
              style={{ animationDelay: "-3s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-primary/30 blur-[0.5px] animate-float-particle"
              style={{ animationDelay: "-5s" }}
            />
            <div
              className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-primary/45 blur-[0.5px] animate-float-particle"
              style={{ animationDelay: "-2s" }}
            />
          </div>

          {/* Central Role Showcase + Name Branding */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
                Portfolio
              </span>
            </motion.div>

            {/* Role: First "Web Developer" -> Then smoothly reveals "& UI/UX Designer" */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              {/* Part 1: Web Developer */}
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-foreground"
              >
                Web Developer
              </motion.span>

              {/* Part 2: & UI/UX Designer (smooth delayed reveal) */}
              <motion.span
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.75, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient drop-shadow-[0_0_24px_hsl(var(--primary)/0.6)]"
              >
                & UI/UX Designer
              </motion.span>
            </div>

            {/* Name below it with subtle red glow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 flex items-center justify-center gap-2 text-base sm:text-lg md:text-xl font-display font-medium text-muted-foreground"
            >
              <span>by</span>
              <span className="text-foreground font-bold tracking-wide drop-shadow-[0_0_16px_hsl(var(--primary)/0.45)]">
                Syed Hunain
              </span>
            </motion.div>
          </div>

          {/* Refined Thin Red Progress Line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="relative z-10 mt-10 w-64 sm:w-80"
          >
            {/* Thin 2px progress track */}
            <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-red rounded-full shadow-[0_0_14px_hsl(var(--primary))]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>

            {/* Status & Counter */}
            <div className="flex justify-between items-center text-[11px] text-muted-foreground/75 mt-3 font-mono">
              <span className="tracking-[0.2em] uppercase text-[10px]">Loading Experience</span>
              <span className="text-primary font-semibold tracking-wider">
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
