"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type StarsProps = {
  count?: number;
  className?: string;
  size?: number;
  /** Postupné objevení hvězd (pro hero badge). */
  animate?: boolean;
};

export function Stars({ count = 5, className, size = 16, animate = false }: StarsProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className ?? ""}`} aria-label={`${count} z 5 hvězd`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < count;
        const star = (
          <Star
            size={size}
            className={filled ? "fill-accent text-accent" : "fill-stone-200 text-stone-200"}
          />
        );
        if (!animate) return <span key={i}>{star}</span>;
        return (
          <motion.span
            key={i}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 300, damping: 15 }}
          >
            {star}
          </motion.span>
        );
      })}
    </div>
  );
}
