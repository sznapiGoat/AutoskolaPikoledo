import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Instructors } from "@/components/sections/instructors";
import { ReviewsMarquee } from "@/components/sections/reviews-marquee";
import { TrustStrip } from "@/components/sections/trust-strip";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Autoškola Pikoledo z Ostravy-Zábřehu. Tým zkušených instruktorů, kteří vyškolili stovky řidičů a staví na trpělivosti, klidu a lidském přístupu.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Lidský přístup",
    text: "Učení probíhá v klidu a s úctou k žákovi. Žádné křičení, žádný stres — jen poctivá příprava.",
  },
  {
    icon: ShieldCheck,
    title: "Zkušenost, které věříte",
    text: "Naši instruktoři mají dlouholetou praxi ze známých ostravských autoškol a vyškolili stovky řidičů.",
  },
  {
    icon: Sparkles,
    title: "Příprava na první pokus",
    text: "Vedeme vás tak, abyste ke zkoušce přišli připravení a v pohodě. Většina to dává napoprvé.",
  },
];

export default function ONasPage() {
  return (
    <>
      <PageHeader
        eyebrow="O nás"
        title="Autoškola, kde se naučíte řídit. A přestanete se bát."
        subtitle="Jsme rodinná autoškola z Ostravy-Zábřehu vedená Pavlou Andrássyovou. Náš tým má praxi ze známých ostravských autoškol a za ta léta vyškolil stovky spokojených řidičů."
      />

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-3xl bg-brand p-8 text-teal-50 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Náš příběh</h2>
            <div className="mt-4 max-w-3xl space-y-4 text-teal-50/90">
              <p>
                Pikoledo vzniklo z přesvědčení, že autoškola nemusí být stresující zkušenost.
                Instruktoři, kteří dnes tvoří náš tým, prošli léty praxe v ostravských autoškolách
                a naučili řídit stovky lidí — od nervózních začátečníků až po ty, kdo si potřebovali
                jen znovu sednout za volant.
              </p>
              <p>
                Spojuje nás jeden princip: trpělivost a srozumitelnost. Necháme vás zkusit, klidně
                vysvětlíme každou situaci a termíny plánujeme tak, aby seděly vám. Proto se k nám
                žáci vracejí a doporučují nás dál — a proto máme hodnocení, na které jsme hrdí.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <TrustStrip />
      <Instructors />
      <ReviewsMarquee />
      <FinalCta />
    </>
  );
}
