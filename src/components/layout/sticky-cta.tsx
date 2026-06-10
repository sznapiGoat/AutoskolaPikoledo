"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

/** Plovoucí lišta pro mobil – vždy po ruce volání i přihláška. */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-2xl border border-stone-200 bg-white/90 p-2 shadow-lg backdrop-blur md:hidden"
        >
          <a
            href={site.phoneHref}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white"
          >
            <Phone size={16} /> Zavolat
          </a>
          <Link
            href="/kontakt"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-background"
          >
            <FileText size={16} /> Přihláška
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
