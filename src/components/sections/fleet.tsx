"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { fleet } from "@/lib/gallery";
import { staggerContainer, fadeUp } from "@/components/motion/motion-config";

export function Fleet() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          <Car size={15} /> Vozový park
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Naučíte se na moderních vozech.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Jezdíme s udržovanými vozy Škoda. Přehledné, spolehlivé a přesně to, na čem se za volantem
          budete cítit nejlépe.
        </p>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-5 md:grid-cols-2"
      >
        <motion.figure
          variants={fadeUp}
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md ring-1 ring-stone-200 md:row-span-2 md:aspect-auto"
        >
          <Image
            src={fleet[0].src}
            alt={fleet[0].alt}
            fill
            sizes="(max-width: 768px) 90vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.figure>

        {fleet.slice(1).map((photo) => (
          <motion.figure
            key={photo.src}
            variants={fadeUp}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md ring-1 ring-stone-200"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 90vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
