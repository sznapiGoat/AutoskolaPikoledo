"use client";

import { motion } from "framer-motion";
import { EASE } from "./motion-config";

type StaggerTextProps = {
  text: string;
  className?: string;
  /** Zvýrazněná slova (accent barva). */
  highlight?: string[];
  delay?: number;
};

/** Headline s maskovaným word-by-word reveal efektem. */
export function StaggerText({ text, className, highlight = [], delay = 0 }: StaggerTextProps) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => {
        const isAccent = highlight.includes(word.replace(/[.,!?]/g, ""));
        return (
          <span key={`${word}-${i}`} aria-hidden>
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className={`inline-block ${isAccent ? "text-accent" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.08 }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}
