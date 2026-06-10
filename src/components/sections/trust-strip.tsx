"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";
import { stats } from "@/lib/site";
import { staggerContainer, fadeUp } from "@/components/motion/motion-config";

export function TrustStrip() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 py-10 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="px-4 text-center">
            <div className="font-display text-3xl font-extrabold text-brand sm:text-4xl">
              <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
            </div>
            <p className="mt-1.5 text-sm text-slate-500">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
