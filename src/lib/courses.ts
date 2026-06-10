export type Course = {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  priceNote?: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
};

/** Hlavní kurzy zobrazené jako karty na úvodu i v ceníku. */
export const courses: Course[] = [
  {
    slug: "skupina-b",
    name: "Kurz řízení sk. B",
    subtitle: "Kompletní výcvik na osobní automobil",
    price: "18 500 Kč",
    priceNote: "možnost splátek",
    highlight: true,
    badge: "Nejoblíbenější",
    features: [
      "14 jízd + bonusová jízda zdarma před zkouškou = 30 vyučovacích hodin",
      "Jízda na dálnici v ceně",
      "Nástupy v místě pohodlně dostupném konkrétnímu žadateli",
      "Víkendy, svátky i večerní jízdy bez doplatků",
      "Možnost náhledových jízd",
      "Učebnice v ceně",
      "Délka kurzu 3–4 měsíce",
    ],
  },
  {
    slug: "rychlokurz-b",
    name: "Rychlokurz sk. B",
    subtitle: "Řidičák v rekordním čase",
    price: "21 000 Kč",
    priceNote: "intenzivní tempo",
    badge: "Nejrychlejší",
    features: [
      "Vše jako u standardního kurzu sk. B",
      "Zhuštěný harmonogram jízd i teorie",
      "Délka kurzu pouhé 3–4 týdny",
      "Ideální pro studenty i pracovně vytížené",
    ],
  },
  {
    slug: "kondicni-jizdy",
    name: "Kondiční jízdy",
    subtitle: "Pro držitele řidičského oprávnění",
    price: "1 300 Kč",
    priceNote: "1 jízda (2× 45 min)",
    badge: "Zpět za volant",
    features: [
      "Znovu nabytí jistoty po pauze od řízení",
      "Trénink parkování, dálnice i města na míru",
      "Klidné tempo bez stresu a hodnocení",
      "Při zakoupení 5 jízd je šestá zdarma",
    ],
  },
];

/** Doplňkové položky ceníku (tabulka). */
export type PriceRow = {
  label: string;
  note?: string;
  price: string;
};

export const priceTable: { group: string; rows: PriceRow[] }[] = [
  {
    group: "Výcvik skupiny B",
    rows: [
      { label: "Kurz řízení sk. B", note: "30 vyučovacích hodin, učebnice, dálnice", price: "18 500 Kč" },
      { label: "Rychlokurz sk. B", note: "vše jako výše, kurz 3–4 týdny", price: "21 000 Kč" },
    ],
  },
  {
    group: "Doplňující výcvik sk. B",
    rows: [
      { label: "1 jízda (2× 45 minut)", note: "pro žáky naší autoškoly", price: "900 Kč" },
      { label: "1 vyučovací hodina (45 minut)", price: "500 Kč" },
      { label: "Akce 5 + 1", note: "při zakoupení 5 jízd je šestá zdarma", price: "−1 jízda" },
    ],
  },
  {
    group: "Kondiční jízdy",
    rows: [
      { label: "1 jízda (2× 45 minut)", note: "pro držitele řidičského oprávnění", price: "1 300 Kč" },
      { label: "Akce 5 + 1", note: "při zakoupení 5 jízd je šestá zdarma", price: "−1 jízda" },
    ],
  },
  {
    group: "Vrácení a opakování",
    rows: [
      { label: "Odborná způsobilost", note: "vrácení řidičského oprávnění, v ceně 2 jízdy", price: "5 000 Kč" },
      { label: "Přistavení vozidla k opakované zkoušce z jízdy", price: "400 Kč" },
      { label: "Opakovaná zkouška z testů", price: "200 Kč" },
    ],
  },
  {
    group: "Ostatní poplatky",
    rows: [
      {
        label: "Penalizační poplatek",
        note: "za nezrušení termínu jízdy min. 24 h předem bez vážného důvodu",
        price: "500 Kč",
      },
      { label: "Administrativní poplatek", note: "při přestupu do jiné autoškoly ap.", price: "1 500 Kč" },
    ],
  },
];
