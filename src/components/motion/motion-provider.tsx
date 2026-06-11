"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Honours `prefers-reduced-motion: reduce` for all framer-motion animations.
 * The CSS rule in globals.css only stops CSS transitions/animations; framer
 * animates transforms via JS, so it needs this provider to back off too.
 * `reducedMotion="user"` keeps opacity fades but drops transform/layout motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
