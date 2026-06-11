"use client";

import { motion } from "framer-motion";
import { HeartHandshake, MessagesSquare, CalendarClock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { staggerContainer, fadeUp } from "@/components/motion/motion-config";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Trpělivost na prvním místě",
    text: "Žáci to píší znovu a znovu: u nás se nikdo nekřičí. Necháme vás zkusit, poučit se z chyby a jet dál v klidu.",
  },
  {
    icon: MessagesSquare,
    title: "Vše srozumitelně vysvětlíme",
    text: "Teorii i situace v provozu podáme tak, aby dávaly smysl. Zeptat se můžete na cokoliv, kolikrát potřebujete.",
  },
  {
    icon: CalendarClock,
    title: "Termíny podle vás",
    text: "Žádné dlouhé pauzy mezi jízdami. Plánujeme tak, aby to sedlo vám. I o víkendech, svátcích a večer bez doplatků.",
  },
];

export function WhyPikoledo() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Proč Pikoledo</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Strach za volantem? U nás z něj děláme klid.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Naše hodnocení nestaví na reklamě, ale na tom, jak se u nás žáci cítí. Tyhle tři věci
          slýcháme od absolventů nejčastěji.
        </p>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-6 md:grid-cols-3"
      >
        {pillars.map(({ icon: Icon, title, text }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Icon size={24} />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-slate-600">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
