import type { Variants, Transition } from "framer-motion";

/** Globální easing – expo-out, působí prémiově a plynule. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const transition: Transition = {
  duration: 0.7,
  ease: EASE,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
