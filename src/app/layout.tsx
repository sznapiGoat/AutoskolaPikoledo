import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyCta } from "@/components/layout/sticky-cta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.autoskolapikoledo.cz"),
  title: {
    default: "Autoškola Pikoledo Ostrava — řidičák bez stresu, sk. B",
    template: "%s · Autoškola Pikoledo",
  },
  description:
    "Autoškola Pikoledo v Ostravě-Zábřehu. Trpěliví instruktoři, klidný přístup a hodnocení 4,9★ na Google. Kurz sk. B od 18 500 Kč, rychlokurz i kondiční jízdy.",
  keywords: [
    "autoškola Ostrava",
    "autoškola Pikoledo",
    "řidičák skupina B",
    "rychlokurz autoškola",
    "kondiční jízdy Ostrava",
  ],
  openGraph: {
    title: "Autoškola Pikoledo Ostrava — řidičák bez stresu",
    description:
      "Trpěliví instruktoři, klidný přístup a 4,9★ na Google. Kurz sk. B, rychlokurz i kondiční jízdy v Ostravě-Zábřehu.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} ${sora.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
