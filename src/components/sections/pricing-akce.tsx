"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { priceTable } from "@/lib/courses";
import { staggerContainer, fadeUp } from "@/components/motion/motion-config";

export function PricingAkce() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <Reveal className="text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Ceník</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Férová cena. Žádná překvapení.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          Kompletní a transparentní ceník. Sledujte náš Facebook — sezónní akce (Vánoční, Májová)
          dokážou ušetřit pěkných pár korun.
        </p>
      </Reveal>

      {/* Akční banner */}
      <Reveal delay={0.05} className="mt-10">
        <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4">
          <Sparkles size={20} className="shrink-0 text-accent" />
          <p className="text-sm font-medium text-slate-700">
            <span className="font-semibold text-foreground">Akce 5 + 1:</span> při zakoupení 5 doplňujících
            nebo kondičních jízd je šestá <span className="font-semibold text-brand">zdarma</span>.
          </p>
        </div>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-8 space-y-6"
      >
        {priceTable.map((group) => (
          <motion.div
            key={group.group}
            variants={fadeUp}
            className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200"
          >
            <div className="bg-brand px-6 py-3.5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                {group.group}
              </h3>
            </div>
            <ul className="divide-y divide-stone-100">
              {group.rows.map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-4 px-6 py-4">
                  <div>
                    <div className="text-sm font-semibold text-foreground">{row.label}</div>
                    {row.note && <div className="mt-0.5 text-xs text-slate-400">{row.note}</div>}
                  </div>
                  <div className="shrink-0 font-display text-lg font-bold text-brand">{row.price}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
