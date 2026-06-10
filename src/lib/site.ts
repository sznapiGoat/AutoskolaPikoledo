export const site = {
  name: "Autoškola Pikoledo",
  shortName: "Pikoledo",
  owner: "Pavla Andrássyová",
  tagline: "Řidičák bez stresu. S trpělivostí, kterou ucítíte za volantem.",
  phone: "+420 734 501 437",
  phoneHref: "tel:+420734501437",
  email: "info@autoskolapikoledo.cz",
  emailHref: "mailto:info@autoskolapikoledo.cz",
  address: "Ruská 3077/135, 700 30 Ostrava-Zábřeh",
  city: "Ostrava-Zábřeh",
  facebook: "https://www.facebook.com/pikoledo",
  mapsQuery: "Autoškola Pikoledo, Ruská 3077/135, Ostrava-Zábřeh",
  rating: 4.9,
  reviewsCount: 60,
} as const;

export const nav = [
  { href: "/", label: "Úvod" },
  { href: "/kurzy", label: "Kurzy a ceník" },
  { href: "/o-nas", label: "O nás" },
  { href: "/terminy", label: "Termíny" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const stats = [
  { value: 4.9, suffix: "★", label: "Průměrné hodnocení na Google", decimals: 1 },
  { value: 1200, suffix: "+", label: "Vyškolených řidičů", decimals: 0 },
  { value: 95, suffix: "%", label: "Úspěšnost u zkoušek", decimals: 0 },
  { value: 30, suffix: " let", label: "Zkušeností za volantem", decimals: 0 },
] as const;
