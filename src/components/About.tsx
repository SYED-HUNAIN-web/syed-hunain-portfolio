"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Cpu } from "lucide-react";

const FEATURES = [
  { icon: Code2, label: "Clean Code" },
  { icon: Palette, label: "Creative Design" },
  { icon: Zap, label: "High Performance" },
  { icon: Cpu, label: "Modern Tech" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-background">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait with Orbital Rings & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
              {/* Outer Slow Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/25"
              />

              {/* Inner Reverse Rotating Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border border-primary/30"
              />

              {/* Central Circular Avatar */}
              <div className="absolute inset-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/30 to-primary/5 p-1 neon-glow shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/assets/hunain-portrait.jpg"
                    alt="Syed Hunain - Web Developer"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 250px, 350px"
                    priority
                  />
                </div>
              </div>

              {/* Floating Tag 1: Developer */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-2 sm:right-6 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-xl text-xs sm:text-sm font-semibold text-foreground flex items-center gap-1.5"
              >
                <span>💻</span> Developer
              </motion.div>

              {/* Floating Tag 2: Designer */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 left-2 sm:left-4 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-xl text-xs sm:text-sm font-semibold text-foreground flex items-center gap-1.5"
              >
                <span>🎨</span> Designer
              </motion.div>

              {/* Floating Tag 3: Creative */}
              <motion.div
                animate={{ y: [-6, 10, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-4 sm:-right-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-xl text-xs sm:text-sm font-semibold text-foreground flex items-center gap-1.5"
              >
                <span>✨</span> Creative
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
              Crafting Digital{" "}
              <span className="text-gradient">Experiences</span> That Stand Out
            </h2>

            {/* Paragraph 1 */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Hi, I&apos;m{" "}
              <span className="text-foreground font-semibold">Syed Hunain</span> — a passionate
              web developer focused on creating immersive, high-performance digital experiences.
              I blend creativity with clean code to build websites that not only look stunning
              but also deliver exceptional user experiences.
            </p>

            {/* Paragraph 2 */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              With expertise in modern frontend technologies, 3D web graphics, and interactive
              animations, I transform ideas into captivating digital realities. Every project is an
              opportunity to push boundaries and create something extraordinary.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {FEATURES.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
