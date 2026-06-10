import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Courses } from "@/components/sections/courses";
import { PricingAkce } from "@/components/sections/pricing-akce";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Kurzy a ceník",
  description:
    "Kompletní ceník Autoškoly Pikoledo: kurz sk. B za 18 500 Kč, rychlokurz 21 000 Kč, kondiční a doplňující jízdy. Transparentně a bez překvapení.",
};

export default function KurzyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kurzy a ceník"
        title="Kurzy šité na míru vašemu tempu."
        subtitle="Od kompletního kurzu sk. B přes intenzivní rychlokurz až po kondiční jízdy pro ty, kdo se chtějí vrátit za volant. Vše s jasnou cenou."
      />
      <Courses />
      <PricingAkce />
      <FinalCta />
    </>
  );
}
