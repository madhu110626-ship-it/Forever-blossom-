"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "en" | "hi";
type Currency = "INR" | "USD";

type LocaleCtx = {
  lang: Lang;
  currency: Currency;
  setLang: (l: Lang) => void;
  setCurrency: (c: Currency) => void;
  t: (en: string, hi: string) => string;
};

const Ctx = createContext<LocaleCtx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [currency, setCurrencyState] = useState<Currency>("INR");

  useEffect(() => {
    const l = localStorage.getItem("fbc-lang") as Lang | null;
    const c = localStorage.getItem("fbc-currency") as Currency | null;
    if (l === "en" || l === "hi") setLangState(l);
    if (c === "INR" || c === "USD") setCurrencyState(c);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("fbc-lang", l);
  };
  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("fbc-currency", c);
  };
  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);

  return (
    <Ctx.Provider value={{ lang, currency, setLang, setCurrency, t }}>{children}</Ctx.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLocale outside provider");
  return ctx;
}
