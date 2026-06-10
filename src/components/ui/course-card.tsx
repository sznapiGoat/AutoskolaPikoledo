"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import type { Course } from "@/lib/courses";
import { EASE } from "@/components/motion/motion-config";

export function CourseCard({ course }: { course: Course }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col rounded-3xl p-7 transition-shadow duration-300 ${
        course.highlight
          ? "bg-brand text-white shadow-xl shadow-brand/20 ring-1 ring-brand"
          : "bg-white text-foreground shadow-sm ring-1 ring-stone-200 hover:shadow-xl"
      }`}
    >
      {course.badge && (
        <span
          className={`absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-semibold shadow ${
            course.highlight ? "bg-accent text-background" : "bg-brand text-white"
          }`}
        >
          {course.badge}
        </span>
      )}

      <h3 className="font-display text-xl font-bold">{course.name}</h3>
      <p className={`mt-1 text-sm ${course.highlight ? "text-teal-100" : "text-slate-500"}`}>
        {course.subtitle}
      </p>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="font-display text-3xl font-extrabold">{course.price}</span>
        {course.priceNote && (
          <span className={`text-xs ${course.highlight ? "text-teal-200" : "text-slate-400"}`}>
            {course.priceNote}
          </span>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {course.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Check
              size={18}
              className={`mt-0.5 shrink-0 ${course.highlight ? "text-accent" : "text-brand"}`}
            />
            <span className={course.highlight ? "text-teal-50" : "text-slate-600"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/kontakt"
        className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
          course.highlight
            ? "bg-accent text-background hover:bg-amber-400"
            : "bg-brand text-white hover:bg-brand-deep"
        }`}
      >
        Mám zájem
      </Link>
    </motion.article>
  );
}
