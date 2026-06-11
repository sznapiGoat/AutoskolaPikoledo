"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * A restrained "route" that draws itself down the page as you scroll.
 * The faint full path is always visible (the road ahead); the accent
 * line fills in with scroll progress (the distance travelled).
 *
 * Sits behind content (-z-10), ignores pointer events, and respects
 * prefers-reduced-motion (renders fully drawn, no scroll binding).
 * `preserveAspectRatio="none"` lets the path stretch to the page height;
 * `vector-effect: non-scaling-stroke` keeps the stroke a constant width.
 */
const ROAD_D =
  "M50 0 C 50 110 38 170 38 280 C 38 400 62 460 62 580 C 62 700 40 760 40 880 C 40 960 52 980 50 1000";

export function ScrollRoad({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative">
      <svg
        aria-hidden
        viewBox="0 0 100 1000"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        {/* the road ahead — always faint */}
        <path
          d={ROAD_D}
          stroke="var(--color-foreground)"
          strokeOpacity={0.05}
          strokeWidth={2.5}
          strokeLinecap="round"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />
        {/* distance travelled — accent, drawn by scroll progress */}
        <motion.path
          d={ROAD_D}
          stroke="var(--color-accent)"
          strokeOpacity={0.22}
          strokeWidth={2.5}
          strokeLinecap="round"
          style={{
            pathLength: reduce ? 1 : pathLength,
            vectorEffect: "non-scaling-stroke",
          }}
        />
      </svg>
      {children}
    </div>
  );
}
