import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, Phone, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termíny",
  description:
    "Termíny zahájení kurzů a rozvrh teoretické výuky Autoškoly Pikoledo v Ostravě. Nové kurzy otevíráme průběžně. Ozvěte se a domluvíme termín.",
};

const startDates = [
  { date: "Průběžně", course: "Kurz sk. B", note: "Nové skupiny otevíráme každý měsíc" },
  { date: "Na domluvě", course: "Rychlokurz sk. B", note: "Start dle vaší dostupnosti" },
  { date: "Kdykoliv", course: "Kondiční jízdy", note: "Bez čekání na kurz" },
];

const lessons = [
  { day: "Pondělí", time: "16:00 – 18:00", topic: "Teorie: pravidla provozu" },
  { day: "Středa", time: "16:00 – 18:00", topic: "Teorie: zásady bezpečné jízdy" },
  { day: "Po domluvě", time: "Flexibilně", topic: "Praktické jízdy i o víkendech a večer" },
];

export default function TerminyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Termíny"
        title="Začít můžete prakticky hned."
        subtitle="Nové kurzy otevíráme průběžně a jízdy plánujeme tak, aby seděly vám. Včetně víkendů, svátků a večerů bez doplatků."
      />

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <CalendarDays size={22} />
                </span>
                <h2 className="font-display text-xl font-bold text-foreground">Zahájení kurzů</h2>
              </div>
              <ul className="mt-6 divide-y divide-stone-100">
                {startDates.map((s) => (
                  <li key={s.course} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <div className="text-sm font-semibold text-foreground">{s.course}</div>
                      <div className="mt-0.5 text-xs text-slate-400">{s.note}</div>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
                      {s.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Clock size={22} />
                </span>
                <h2 className="font-display text-xl font-bold text-foreground">Rozvrh výuky</h2>
              </div>
              <ul className="mt-6 divide-y divide-stone-100">
                {lessons.map((l) => (
                  <li key={l.day} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <div className="text-sm font-semibold text-foreground">{l.day}</div>
                      <div className="mt-0.5 text-xs text-slate-400">{l.topic}</div>
                    </div>
                    <span className="shrink-0 text-sm font-medium text-slate-600">{l.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-dashed border-brand/30 bg-brand/5 px-6 py-6 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-foreground">Konkrétní termín si rádi domluvíme telefonicky.</span>{" "}
              Zavolejte nebo nám napište a najdeme čas, který sedne přesně vám.
            </p>
            <div className="flex shrink-0 gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-deep"
              >
                <Phone size={15} /> Zavolat
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand ring-1 ring-stone-200 hover:ring-brand/30"
              >
                Přihláška <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
