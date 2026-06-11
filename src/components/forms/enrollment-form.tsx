"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { courses } from "@/lib/courses";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function EnrollmentForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo: bez backendu. Napojení na e-mail / API doplníme dle potřeby.
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-stone-200"
      >
        <CheckCircle2 size={48} className="text-brand" />
        <h3 className="mt-4 font-display text-xl font-bold">Děkujeme, ozveme se vám!</h3>
        <p className="mt-2 max-w-sm text-base text-slate-500">
          Vaši poptávku jsme přijali. Obvykle se ozýváme do 24 hodin. Těšíme se na vás za volantem.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Jméno a příjmení" name="name" required placeholder="Jan Novák" />
        <Field label="Telefon" name="phone" type="tel" required placeholder="+420 …" />
        <Field label="E-mail" name="email" type="email" className="sm:col-span-2" placeholder="vas@email.cz" />
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Mám zájem o</span>
          <select
            name="course"
            className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
            <option value="jine">Jiné / nevím, poradíte mi</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Zpráva (nepovinné)</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Kdy byste chtěli začít, dotazy…"
            className="resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-400">
          Odesláním souhlasíte se zpracováním údajů za účelem kontaktování.
        </p>
        <MagneticButton type="submit">
          Odeslat přihlášku <Send size={16} />
        </MagneticButton>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}
