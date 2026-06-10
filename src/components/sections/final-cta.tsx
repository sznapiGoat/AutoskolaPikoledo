"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] bg-brand px-7 py-14 text-center sm:px-12 sm:py-20"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Začněte ještě tento měsíc.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-teal-50/90">
          Ozvěte se nám a domluvíme termín, který sedne přesně vám. První krok k řidičáku je
          jednodušší, než si myslíte.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/kontakt">
            Chci se přihlásit <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href={site.phoneHref} variant="secondary">
            <Phone size={16} /> {site.phone}
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
