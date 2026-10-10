"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Fullscreen preloader curtain */}
      <Preloader onComplete={() => setIsLoading(false)} />
      
      <CustomCursor />

      {/* Website content: 100% hidden while loading, smoothly fades in when complete */}
      <div
        className={`transition-opacity duration-700 ease-out ${
          isLoading
            ? "opacity-0 pointer-events-none select-none invisible"
            : "opacity-100 visible"
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
