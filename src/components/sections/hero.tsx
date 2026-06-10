"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { StaggerText } from "@/components/motion/stagger-text";
import { GoogleRatingBadge } from "@/components/ui/google-rating-badge";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Pozadí – jemné gradienty */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-[460px] w-[460px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand"
        >
          <MapPin size={13} /> Autoškola Ostrava-Zábřeh · skupina B
        </motion.span>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
          <StaggerText text="Řidičák bez stresu." highlight={["stresu."]} />
          <br />
          <StaggerText
            text="S trpělivostí, kterou ucítíte za volantem."
            highlight={["trpělivostí,"]}
            delay={0.35}
            className="text-slate-700"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
        >
          V Pikoledu vás nepřipravíme jen na zkoušku — připravíme vás na celý život za volantem.
          Klidně, srozumitelně a na první pokus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="/kontakt">
            Chci se přihlásit <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href={site.phoneHref} variant="secondary">
            <Phone size={16} /> {site.phone}
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10"
        >
          <GoogleRatingBadge />
        </motion.div>
      </div>
    </section>
  );
}
