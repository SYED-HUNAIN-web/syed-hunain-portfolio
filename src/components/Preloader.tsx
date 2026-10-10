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
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 400);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 14) + 6, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center pointer-events-auto select-none"
        >
          {/* Orbital glowing background rings */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-primary/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-primary/20"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Central Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 mb-10 flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight text-gradient neon-text">
              SH
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2 font-mono">
              Syed Hunain Portfolio
            </p>
          </motion.div>

          {/* Progress Bar & Counter */}
          <div className="relative z-10 w-64 md:w-80">
            <div className="h-1.5 bg-secondary/80 rounded-full overflow-hidden border border-border/40">
              <motion.div
                className="h-full bg-gradient-red shadow-[0_0_12px_hsl(var(--primary))]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between items-center text-xs text-muted-foreground mt-3 font-mono">
              <span>Loading Experience</span>
              <span className="text-primary font-bold">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
