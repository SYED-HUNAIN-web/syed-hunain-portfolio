"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-border bg-card/60 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-display font-extrabold tracking-tight cursor-pointer"
          >
            <span className="text-gradient">Syed</span>
            <span className="text-foreground">Hunain</span>
          </a>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            &copy; {currentYear} Syed Hunain. All rights reserved.
          </p>

          {/* Contact / Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:socialme45678@gmail.com"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              socialme45678@gmail.com
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-secondary hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
