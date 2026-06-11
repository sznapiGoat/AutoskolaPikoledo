"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { InstructorCard } from "@/components/ui/instructor-card";
import { instructors } from "@/lib/instructors";
import { staggerContainer } from "@/components/motion/motion-config";

export function Instructors() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Náš tým</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Lidé, kteří vás naučí řídit.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Jména, která žáci v recenzích zmiňují jménem. Zkušení instruktoři s praxí ze známých
          ostravských autoškol. A hlavně s lidským přístupem.
        </p>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} instructor={instructor} />
        ))}
      </motion.div>
    </section>
  );
}
