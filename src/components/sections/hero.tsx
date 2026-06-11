"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, BadgeCheck } from "lucide-react";
import { StaggerText } from "@/components/motion/stagger-text";
import { GoogleRatingBadge } from "@/components/ui/google-rating-badge";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Pozadí – jemné gradienty */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-[460px] w-[460px] rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand"
          >
            <MapPin size={13} /> Autoškola Ostrava-Zábřeh, skupina B
          </motion.span>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
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
            V Pikoledu vás nepřipravíme jen na zkoušku, ale na celý život za volantem.
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

        {/* Vizuál */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand/20 ring-1 ring-stone-200">
            <Image
              src="/images/pikoledo12.jpg"
              alt="Vůz autoškoly Pikoledo – červená Škoda Scala"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
          </div>

          {/* Plovoucí karta – čerstvý absolvent */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-stone-200 bg-white/90 p-2.5 pr-4 shadow-xl backdrop-blur sm:-left-8"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-xl">
              <Image
                src="/images/pikoledo1.jpg"
                alt="Spokojený absolvent autoškoly Pikoledo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                <BadgeCheck size={16} className="text-brand" /> Čerstvý řidičák!
              </div>
              <div className="text-xs text-slate-500">Stovky spokojených absolventů</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
