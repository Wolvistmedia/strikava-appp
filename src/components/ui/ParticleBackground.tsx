"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // A simple grid-based particle animation inspired by Julian Garnier
    const container = containerRef.current;
    container.innerHTML = ""; // Clear existing particles

    const fragment = document.createDocumentFragment();
    const columns = Math.floor(window.innerWidth / 50);
    const rows = Math.floor(window.innerHeight / 50);
    const total = columns * rows;

    for (let i = 0; i < total; i++) {
      const el = document.createElement("div");
      el.classList.add("particle");
      
      // Assign random color from theme
      const colors = ["#22d3ee", "#d946ef", "#3b82f6", "#8b5cf6"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      el.style.width = "4px";
      el.style.height = "4px";
      el.style.backgroundColor = randomColor;
      el.style.position = "absolute";
      
      // Calculate position
      const x = (i % columns) * 50 + 25;
      const y = Math.floor(i / columns) * 50 + 25;
      
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.borderRadius = "50%";
      el.style.opacity = "0.2";
      
      fragment.appendChild(el);
    }

    container.appendChild(fragment);

    // Animate particles
    anime({
      targets: ".particle",
      scale: [
        { value: 1.5, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 }
      ],
      translateY: [
        { value: -20, easing: "easeOutSine", duration: 500 },
        { value: 0, easing: "easeInOutQuad", duration: 1200 }
      ],
      opacity: [
        { value: 0.6, easing: "easeOutSine", duration: 500 },
        { value: 0.2, easing: "easeInOutQuad", duration: 1200 }
      ],
      delay: anime.stagger(100, { grid: [columns, rows], from: "center" }),
      loop: true,
      direction: "alternate"
    });

    const handleResize = () => {
      // Very basic resize handler, usually we'd debounce and re-initialize
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40"
      style={{
        background: "radial-gradient(circle at center, #0f172a 0%, #050b14 100%)"
      }}
    />
  );
}
