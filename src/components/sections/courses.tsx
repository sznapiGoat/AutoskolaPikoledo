"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CourseCard } from "@/components/ui/course-card";
import { courses } from "@/lib/courses";
import { staggerContainer } from "@/components/motion/motion-config";

export function Courses() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Kurzy</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Vyberte si, jak chcete jezdit.
          </h2>
        </div>
        <Link
          href="/kurzy"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
        >
          Celý ceník
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-6 md:grid-cols-3"
      >
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </motion.div>
    </section>
  );
}
