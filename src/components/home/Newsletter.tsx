"use client";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";

export function Newsletter() {
  const { t } = useLocale();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="rounded-[2rem] bg-gradient-to-br from-bloom-purple to-bloom-purple-soft px-6 py-12 text-center text-white md:px-16">
        <p className="text-sm uppercase tracking-[0.25em] text-bloom-gold">Bloom Club</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl">{t("Join the Bloom Club", "Bloom Club join karein")}</h2>
        <p className="mx-auto mt-3 max-w-xl text-bloom-lilac">{t("Early access to new drops and care tips.", "Naye drops aur care tips paayein.")}</p>
        {done ? (
          <p className="mt-8 text-bloom-gold">{t("Welcome to the club!", "Welcome!")}</p>
        ) : (
          <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="flex-1 rounded-full px-5 py-3 text-bloom-charcoal outline-none ring-bloom-gold focus:ring-2" />
            <button type="submit" className="btn-gold">{t("Subscribe", "Subscribe")}</button>
          </form>
        )}
      </div>
    </section>
  );
}
