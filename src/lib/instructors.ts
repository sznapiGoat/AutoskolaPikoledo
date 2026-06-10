export type Instructor = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

/** Tým z recenzí – jména skutečně zmiňovaná spokojenými žáky. */
export const instructors: Instructor[] = [
  {
    name: "Pavla Andrássyová",
    role: "Majitelka & instruktorka",
    bio: "Vede autoškolu s důrazem na klid, lidský přístup a poctivou přípravu. „Perfektní“ – jak píší žáci.",
    initials: "PA",
  },
  {
    name: "Lenka",
    role: "Hlavní instruktorka",
    bio: "Trpělivě odpoví na každou otázku – na teorii i v autě. Žáci oceňují její srozumitelnost a klid.",
    initials: "L",
  },
  {
    name: "Matěj Andrássy",
    role: "Instruktor",
    bio: "Dokáže žáka zklidnit, správně navést a u toho i pobavit. Připraví vás na zkoušku na první pokus.",
    initials: "MA",
  },
  {
    name: "Alena",
    role: "Instruktorka",
    bio: "„Žena na svém místě.“ Pomáhá odbourat stres a navodit v autě báječnou atmosféru.",
    initials: "A",
  },
];
