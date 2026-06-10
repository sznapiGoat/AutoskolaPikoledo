"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
  strength?: number;
};

/** CTA s magnetickým efektem – tlačítko se přitahuje ke kurzoru. */
export function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-accent text-slate-950 hover:bg-amber-400 shadow-lg shadow-amber-500/25"
      : "bg-white text-brand ring-1 ring-stone-200 hover:ring-brand/30";

  const inner = (
    <motion.span
      className="pointer-events-none inline-flex items-center gap-2"
      animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.span>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="inline-block"
    >
      {href ? (
        <Link href={href} className={`${base} ${styles} ${className ?? ""}`} onClick={onClick}>
          {inner}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={`${base} ${styles} ${className ?? ""}`}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
