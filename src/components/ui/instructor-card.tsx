"use client";

import { motion } from "framer-motion";
import type { Instructor } from "@/lib/instructors";
import { EASE } from "@/components/motion/motion-config";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      whileHover={{ y: -4 }}
      className="group rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-stone-200 transition-shadow hover:shadow-lg"
    >
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep font-display text-2xl font-bold text-white shadow-inner transition-transform duration-300 group-hover:scale-105">
        {instructor.initials}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-foreground">{instructor.name}</h3>
      <p className="mt-0.5 text-sm font-medium text-accent">{instructor.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{instructor.bio}</p>
    </motion.article>
  );
}
