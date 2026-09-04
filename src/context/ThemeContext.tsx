"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "pink";

type ThemeCtx = { theme: ThemeMode; cycle: () => void; dark: boolean };

const Ctx = createContext<ThemeCtx>({
  theme: "light",
  cycle: () => {},
  dark: false,
});

const ORDER: ThemeMode[] = ["light", "dark", "pink"];

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("dark", "theme-pink");
  if (mode === "dark") root.classList.add("dark");
  if (mode === "pink") root.classList.add("theme-pink");
}

function parseSaved(raw: string | null, prefersDark: boolean): ThemeMode {
  if (raw === "light" || raw === "dark" || raw === "pink") return raw;
  // Migrate old boolean-style values if any
  if (raw === "true" || raw === "1") return "dark";
  if (raw === "false" || raw === "0") return "light";
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("fbc-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mode = parseSaved(saved, prefers);
    setTheme(mode);
    applyTheme(mode);
    // Normalize storage to the new string form
    localStorage.setItem("fbc-theme", mode);
    setReady(true);
  }, []);

  const cycle = () => {
    setTheme((current) => {
      const idx = ORDER.indexOf(current);
      const next = ORDER[(idx + 1) % ORDER.length];
      applyTheme(next);
      localStorage.setItem("fbc-theme", next);
      return next;
    });
  };

  if (!ready) return <div className="min-h-screen bg-bloom-cream" />;

  return (
    <Ctx.Provider value={{ theme, cycle, dark: theme === "dark" }}>
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
