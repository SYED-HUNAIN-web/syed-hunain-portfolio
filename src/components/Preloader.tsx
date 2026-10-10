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
    const duration = 1800; // 1.8 seconds natural duration

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
        }, 250);
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
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
        >
          {/* Subtle Background Glow & Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
            {/* Soft Ambient Red Radial Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-primary/15 blur-[120px]"
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

          {/* Centered SyedHunain Logo with Smooth Fade-in + Scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight flex items-center justify-center select-none">
              <span className="text-gradient drop-shadow-[0_0_28px_hsl(var(--primary)/0.6)]">
                Syed
              </span>
              <span className="text-foreground ml-0.5">Hunain</span>
            </h1>

            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground/80 mt-2.5 font-mono text-center">
              Creative Web Experiences
            </p>
          </motion.div>

          {/* Refined Thin Red Progress Line */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 mt-8 w-56 sm:w-72"
          >
            {/* Thin 2px progress track */}
            <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-red rounded-full shadow-[0_0_12px_hsl(var(--primary))]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>

            {/* Status & Counter */}
            <div className="flex justify-between items-center text-[11px] text-muted-foreground/70 mt-3 font-mono">
              <span className="tracking-wider uppercase text-[10px]">Loading</span>
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
