/** Fotky z Facebooku autoškoly. */

export type Photo = {
  src: string;
  alt: string;
};

/** Šťastní absolventi s čerstvým řidičákem u vozů autoškoly. */
export const graduates: Photo[] = [
  { src: "/images/pikoledo1.jpg", alt: "Spokojený absolvent autoškoly Pikoledo s řidičákem" },
  { src: "/images/pikoledo2.jpg", alt: "Usměvavá absolventka u vozu autoškoly Pikoledo" },
  { src: "/images/pikoledo10.jpg", alt: "Absolvent s palcem nahoru u vozu Pikoledo" },
  { src: "/images/pikoledo4.jpg", alt: "Mladý řidič po úspěšné zkoušce u vozu Pikoledo" },
  { src: "/images/pikoledo3.jpg", alt: "Absolventka autoškoly Pikoledo v Ostravě" },
  { src: "/images/pikoledo5.jpg", alt: "Dva spokojení absolventi autoškoly Pikoledo" },
  { src: "/images/pikoledo9.jpg", alt: "Radost z čerstvého řidičáku u vozu Pikoledo" },
  { src: "/images/pikoledo8.jpg", alt: "Absolvent autoškoly Pikoledo s palci nahoru" },
  { src: "/images/pikoledo6.jpg", alt: "Spokojený řidič u červeného vozu Pikoledo" },
  { src: "/images/pikoledo7.jpg", alt: "Absolvent ukazuje na logo vozu autoškoly Pikoledo" },
];

/** Vozový park – krásné snímky vozů autoškoly (červená Scala i bílá Fabia). */
export const fleet: Photo[] = [
  { src: "/images/pikoledo12.jpg", alt: "Červená Škoda Scala autoškoly Pikoledo zepředu" },
  { src: "/images/pikoledo13.jpg", alt: "Červená Škoda Scala autoškoly Pikoledo" },
  { src: "/images/pikoledo11.jpg", alt: "Červená Škoda Scala autoškoly Pikoledo z boku" },
  { src: "/images/pikoledo2.jpg", alt: "Bílá Škoda Fabia combi autoškoly Pikoledo z boku" },
  { src: "/images/pikoledo8.jpg", alt: "Bílá Škoda Fabia combi autoškoly Pikoledo zezadu" },
];
