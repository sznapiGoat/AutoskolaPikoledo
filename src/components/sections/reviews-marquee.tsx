"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { ReviewCard } from "@/components/ui/review-card";
import { Stars } from "@/components/ui/stars";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export function ReviewsMarquee() {
  const controls = useAnimationControls();
  const startedRef = useRef(false);

  // Dvě poloviny → plynulá nekonečná smyčka.
  const half = reviews;

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: 45, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  return (
    <section className="overflow-hidden bg-stone-100/70 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="rule text-sm font-semibold uppercase tracking-[0.2em] text-accent">Recenze</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Co o nás říkají naši absolventi.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Skutečné recenze lidí, kteří u nás získali řidičák. Přečtěte si je v klidu, žádný spěch.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-stone-200">
            <span className="font-display text-3xl font-extrabold text-brand">{site.rating}</span>
            <div>
              <Stars size={15} />
              <span className="text-xs text-slate-400">z hodnocení na Google</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div
        className="marquee-mask mt-12"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: { duration: 45, ease: "linear", repeat: Infinity },
          })
        }
      >
        <motion.div animate={controls} className="flex w-max gap-5 px-5">
          {[...half, ...half].map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
