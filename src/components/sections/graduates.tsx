"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { graduates } from "@/lib/gallery";

export function Graduates() {
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Reveal className="mx-auto max-w-6xl px-5 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Naši absolventi</span>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Tváře, které u nás našly radost z řízení.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          Skuteční žáci, skutečný úsměv po složené zkoušce. Možná tu příště budete i vy.
        </p>
      </Reveal>

      <div className="marquee-mask mt-12">
        <div
          className="animate-marquee flex w-max gap-5 px-5"
          style={{ ["--marquee-duration" as string]: "50s" }}
        >
          {[...graduates, ...graduates].map((photo, i) => (
            <figure
              key={`${photo.src}-${i}`}
              className="group relative aspect-[3/4] w-52 shrink-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-stone-200 sm:w-60"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="240px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
