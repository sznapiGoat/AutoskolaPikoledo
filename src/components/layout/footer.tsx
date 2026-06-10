import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FbIcon } from "@/components/ui/fb-icon";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-deep text-teal-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-base font-extrabold text-slate-950">
              P
            </span>
            <span className="font-display text-lg font-bold text-white">Autoškola Pikoledo</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-teal-100/80">
            Řidičák bez stresu v Ostravě. S trpělivostí, klidem a lidským přístupem, který ocení
            i ten, kdo se za volant teprve chystá.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-teal-200/70">
            Navigace
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-teal-50/90 transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-teal-200/70">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-accent">
                <Phone size={15} className="text-accent" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-2.5 hover:text-accent">
                <Mail size={15} className="text-accent" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-teal-50/90">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" /> {site.address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-teal-200/70">
            Sledujte nás
          </h3>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            <FbIcon size={16} className="text-accent" /> Facebook
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-teal-100/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Autoškola Pikoledo · {site.owner}</span>
          <span>Ostrava-Zábřeh · IČO na vyžádání</span>
        </div>
      </div>
    </footer>
  );
}
