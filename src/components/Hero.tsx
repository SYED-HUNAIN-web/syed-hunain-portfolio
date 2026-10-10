"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 animate-gradient-shift pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Floating Animated Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/50 animate-float-particle" />
        <div
          className="absolute top-1/3 left-3/4 w-2 h-2 rounded-full bg-primary/40 animate-float-particle"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="absolute top-2/3 left-1/5 w-1.5 h-1.5 rounded-full bg-primary/60 animate-float-particle"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-2.5 h-2.5 rounded-full bg-primary/40 animate-float-particle"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/50 animate-float-particle"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center flex flex-col items-center">
        {/* Availability Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-8 backdrop-blur-md shadow-[0_0_15px_hsl(var(--primary)/0.15)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
          <span className="text-xs md:text-sm font-semibold tracking-wide text-foreground">
            Available for Freelance Work
          </span>
        </motion.div>

        {/* Large Glowing Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.08] tracking-tight mb-6"
        >
          I Build{" "}
          <span className="text-gradient neon-text inline-block">
            Interactive
          </span>
          <br />
          &{" "}
          <span className="text-gradient neon-text inline-block">
            3D Web
          </span>{" "}
          Experiences
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto mb-10 tracking-wide"
        >
          Web Developer | UI/UX | Modern Web Animations
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* View Projects Button */}
          <motion.button
            onClick={scrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-red text-white font-bold text-base shadow-[0_0_25px_hsl(var(--primary)/0.45)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.65)] cursor-pointer group transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          {/* Hire Me Button */}
          <motion.button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-primary/70 bg-card/40 backdrop-blur-sm text-foreground font-bold text-base hover:bg-primary/10 hover:border-primary shadow-sm cursor-pointer transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Mail className="w-5 h-5 text-primary" />
            <span>Hire Me</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
