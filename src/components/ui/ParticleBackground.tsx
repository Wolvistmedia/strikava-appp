"use client";

import { useMemo } from "react";

const particleCount = 24;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, idx) => ({
        left: randomBetween(5, 95),
        top: randomBetween(10, 90),
        size: randomBetween(3, 10),
        delay: randomBetween(0, 8),
        duration: randomBetween(8, 14),
        color:
          idx % 3 === 0
            ? "rgba(34,211,238,0.72)"
            : idx % 3 === 1
            ? "rgba(168,85,247,0.72)"
            : "rgba(59,130,246,0.72)",
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.10),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.28),transparent_30%)]" />
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-sm shadow-[0_0_18px_rgba(59,130,246,0.5)]"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: 0.45,
            animation: `particleFloat ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
