"use client";

import { useEffect, useState } from "react";

export function GlassBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base white background with subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #fafbfc 0%, #ffffff 50%, #fafbfc 100%)"
        }}
      />

      {/* Subtle accent gradients - very light teal/blue tints */}
      <div
        className={`absolute inset-0 ${!reducedMotion ? "animate-aurora-1" : ""}`}
        style={{
          background: "radial-gradient(ellipse 80% 50% at 20% 30%, rgba(95, 207, 195, 0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className={`absolute inset-0 ${!reducedMotion ? "animate-aurora-2" : ""}`}
        style={{
          background: "radial-gradient(ellipse 70% 60% at 80% 70%, rgba(47, 177, 165, 0.03) 0%, transparent 55%)",
        }}
      />
      <div
        className={`absolute inset-0 ${!reducedMotion ? "animate-aurora-3" : ""}`}
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(142, 224, 215, 0.035) 0%, transparent 50%)",
        }}
      />

      {/* CSS for subtle drift animation */}
      <style jsx>{`
        @keyframes aurora-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(3%, 2%) scale(1.02); }
          50% { transform: translate(-2%, 3%) scale(0.99); }
          75% { transform: translate(2%, -1%) scale(1.01); }
        }
        @keyframes aurora-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-2%, 1%) scale(1.015); }
          66% { transform: translate(1%, -2%) scale(0.985); }
        }
        @keyframes aurora-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          50% { transform: translate(1%, 2%) scale(1.02); opacity: 0.9; }
        }
        .animate-aurora-1 {
          animation: aurora-drift-1 25s ease-in-out infinite;
        }
        .animate-aurora-2 {
          animation: aurora-drift-2 30s ease-in-out infinite;
        }
        .animate-aurora-3 {
          animation: aurora-drift-3 22s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
