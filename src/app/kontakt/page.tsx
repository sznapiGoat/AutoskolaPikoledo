import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FbIcon } from "@/components/ui/fb-icon";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/motion/reveal";
import { EnrollmentForm } from "@/components/forms/enrollment-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt a přihláška",
  description:
    "Přihlaste se do Autoškoly Pikoledo v Ostravě-Zábřehu. Telefon +420 734 501 437, Ruská 3077/135. Vyplňte přihlášku online a ozveme se do 24 hodin.",
};

export default function KontaktPage() {
  const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery,
  )}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Začněte ještě tento měsíc."
        subtitle="Vyplňte přihlášku nebo nám rovnou zavolejte. Ozýváme se obvykle do 24 hodin a společně najdeme termín, který sedne vám."
      />

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Kontaktní údaje */}
          <Reveal>
            <div className="space-y-4">
              <ContactRow icon={Phone} label="Telefon" value={site.phone} href={site.phoneHref} accent />
              <ContactRow icon={Mail} label="E-mail" value={site.email} href={site.emailHref} />
              <ContactRow icon={MapPin} label="Adresa" value={site.address} />
              <ContactRow icon={Clock} label="Otevřeno" value="Po–Pá dle domluvy, jízdy i o víkendu" />
              <ContactRow
                icon={FbIcon}
                label="Facebook"
                value="@pikoledo, sezónní akce a novinky"
                href={site.facebook}
              />

              <div className="overflow-hidden rounded-3xl ring-1 ring-stone-200">
                <iframe
                  title="Mapa: Autoškola Pikoledo"
                  src={mapsSrc}
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Přihláška */}
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Online přihláška</h2>
              <p className="mt-1.5 text-base text-slate-500">
                Nezávazně. Po odeslání se vám ozveme a vše v klidu probereme.
              </p>
              <div className="mt-5">
                <EnrollmentForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200 transition-shadow hover:shadow-md">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          accent ? "bg-accent/15 text-accent" : "bg-brand/10 text-brand"
        }`}
      >
        <Icon size={20} />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</div>
        <div className="mt-0.5 text-sm font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}
