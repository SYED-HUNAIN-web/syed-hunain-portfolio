"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  isClick: boolean;
}

const TRAIL_LENGTH = 8;

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const trailPositions = useRef<{ x: number; y: number }[]>(
    Array(TRAIL_LENGTH).fill({ x: 0, y: 0 })
  );
  const animFrameId = useRef<number | null>(null);
  const particleFrameId = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const particleIdCounter = useRef(0);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const spawnParticle = useCallback((x: number, y: number, isClick = false) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = isClick ? 3 + Math.random() * 4 : 1 + Math.random() * 2;
    return {
      id: particleIdCounter.current++,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      maxLife: isClick ? 35 : 20,
      size: isClick ? 4 + Math.random() * 4 : 2 + Math.random() * 3,
      isClick,
    };
  }, []);

  const handleMouseMoveParticles = useCallback(() => {
    const dx = mousePos.current.x - prevMousePos.current.x;
    const dy = mousePos.current.y - prevMousePos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 8) {
      const count = Math.min(Math.floor(dist / 12), 2);
      const newParticles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        newParticles.push(spawnParticle(mousePos.current.x, mousePos.current.y));
      }
      setParticles((prev) => [...prev.slice(-30), ...newParticles]);
    }
    prevMousePos.current = { ...mousePos.current };
  }, [spawnParticle]);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const burst: Particle[] = [];
      for (let i = 0; i < 10; i++) {
        burst.push(spawnParticle(e.clientX, e.clientY, true));
      }
      setParticles((prev) => [...prev.slice(-30), ...burst]);
    },
    [spawnParticle]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovered(true);
      }
    };

    const onMouseOut = () => {
      setIsHovered(false);
    };

    const updateTrail = () => {
      const current = [...trailPositions.current];
      current[0] = { ...mousePos.current };
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const prev = current[i - 1];
        const curr = current[i];
        const factor = 0.35 - i * 0.02;
        current[i] = {
          x: curr.x + (prev.x - curr.x) * factor,
          y: curr.y + (prev.y - curr.y) * factor,
        };
      }
      trailPositions.current = current;
      handleMouseMoveParticles();
      animFrameId.current = requestAnimationFrame(updateTrail);
    };

    const updateParticles = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vx: p.vx * 0.95,
            vy: p.vy * 0.95 + 0.08,
            life: p.life - 1 / p.maxLife,
          }))
          .filter((p) => p.life > 0)
      );
      particleFrameId.current = requestAnimationFrame(updateParticles);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    animFrameId.current = requestAnimationFrame(updateTrail);
    particleFrameId.current = requestAnimationFrame(updateParticles);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (particleFrameId.current) cancelAnimationFrame(particleFrameId.current);
    };
  }, [cursorX, cursorY, handleClick, handleMouseMoveParticles]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Particle trail bursts */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: `hsl(var(--primary) / ${p.life * (p.isClick ? 1 : 0.8)})`,
            boxShadow: p.isClick
              ? `0 0 ${p.size * 2}px hsl(var(--primary) / ${p.life * 0.8})`
              : `0 0 ${p.size}px hsl(var(--primary) / ${p.life * 0.5})`,
            transform: "translate(-50%, -50%)",
            opacity: p.life,
          }}
        />
      ))}

      {/* Main Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <div
          className={`w-3.5 h-3.5 rounded-full bg-primary transition-all duration-200 ${
            isHovered ? "shadow-[0_0_20px_hsl(var(--primary))]" : "shadow-[0_0_10px_hsl(var(--primary)/0.6)]"
          }`}
        />
      </motion.div>

      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.7 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div
          className={`w-9 h-9 rounded-full border border-primary/50 transition-all duration-200 ${
            isHovered
              ? "border-primary bg-primary/10 shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
              : ""
          }`}
        />
      </motion.div>
    </>
  );
}
