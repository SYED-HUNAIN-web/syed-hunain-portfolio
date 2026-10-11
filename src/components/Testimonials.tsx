"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 relative overflow-hidden bg-secondary/30">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold mb-4">
            What <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Feedback from partners, clients, and collaborators who have experienced my dedication to visual excellence and performance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className="p-7 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative group flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                {/* Header Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Quote className="w-5 h-5 rotate-180" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/40 shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground">
                    {t.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
