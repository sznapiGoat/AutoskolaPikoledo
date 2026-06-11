import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { MotionProvider } from "@/components/motion/motion-provider";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.autoskolapikoledo.cz"),
  title: {
    default: "Autoškola Pikoledo Ostrava · řidičák bez stresu, sk. B",
    template: "%s · Autoškola Pikoledo",
  },
  description:
    "Autoškola Pikoledo v Ostravě-Zábřehu. Trpěliví instruktoři, klidný přístup a hodnocení 4,9 na Google. Kurz sk. B od 18 500 Kč, rychlokurz i kondiční jízdy.",
  keywords: [
    "autoškola Ostrava",
    "autoškola Pikoledo",
    "řidičák skupina B",
    "rychlokurz autoškola",
    "kondiční jízdy Ostrava",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Autoškola Pikoledo Ostrava · řidičák bez stresu",
    description:
      "Trpěliví instruktoři, klidný přístup a hodnocení 4,9 na Google. Kurz sk. B, rychlokurz i kondiční jízdy v Ostravě-Zábřehu.",
    locale: "cs_CZ",
    type: "website",
    siteName: "Autoškola Pikoledo",
    images: [
      {
        url: "/images/pikoledo12.jpg",
        width: 1200,
        height: 630,
        alt: "Vůz autoškoly Pikoledo – červená Škoda Scala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoškola Pikoledo Ostrava · řidičák bez stresu",
    description:
      "Trpěliví instruktoři, klidný přístup a hodnocení 4,9 na Google. Kurz sk. B v Ostravě-Zábřehu.",
    images: ["/images/pikoledo12.jpg"],
  },
};

// LocalBusiness (DrivingSchool) structured data — fed from the single
// source of truth in src/lib/site.ts.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: site.name,
  description:
    "Autoškola v Ostravě-Zábřehu. Trpěliví instruktoři, klidný přístup a hodnocení 4,9 na Google. Kurz sk. B, rychlokurz i kondiční jízdy.",
  url: "https://www.autoskolapikoledo.cz",
  image: "https://www.autoskolapikoledo.cz/images/pikoledo12.jpg",
  telephone: site.phone,
  email: site.email,
  priceRange: "18 500–21 000 Kč",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruská 3077/135",
    addressLocality: "Ostrava-Zábřeh",
    postalCode: "700 30",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.7935,
    longitude: 18.2483,
  },
  areaServed: { "@type": "City", name: "Ostrava" },
  sameAs: [site.facebook],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewsCount,
    bestRating: 5,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    description: "Po–Pá dle domluvy, jízdy i o víkendu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyCta />
        </MotionProvider>
      </body>
    </html>
  );
}
