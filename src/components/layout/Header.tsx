"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Heart, Menu, Mic, Moon, Search, ShoppingBag, Sun, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useTheme } from "@/context/ThemeContext";
import { useLocale } from "@/context/LocaleContext";
import { useAuth } from "@/context/AuthContext";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function Header() {
  const { count, setOpen } = useCart();
  const { ids } = useWishlist();
  const { theme, cycle } = useTheme();
  const { lang, setLang, currency, setCurrency, t } = useLocale();
  const { user } = useAuth();
  const [mobile, setMobile] = useState(false);
  const [q, setQ] = useState("");
  const [listening, setListening] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => (q.trim() ? searchProducts(q).slice(0, 6) : []), [q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const startVoice = () => {
    const SR = (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognition }).webkitSpeechRecognition
      || (window as unknown as { SpeechRecognition?: new () => SpeechRecognition }).SpeechRecognition;
    if (!SR) {
      alert(t("Voice search not supported in this browser.", "Is browser mein voice search available nahi hai."));
      return;
    }
    const rec = new SR();
    rec.lang = lang === "hi" ? "hi-IN" : "en-IN";
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onresult = (ev: SpeechRecognitionEvent) => {
      const text = ev.results[0][0].transcript;
      setQ(text);
      setFocused(true);
    };
    rec.start();
  };

  const links = [
    { href: "/shop", label: t("Shop", "Shop") },
    { href: "/gallery", label: t("Gallery", "Gallery") },
    { href: "/custom", label: t("Custom", "Custom") },
    { href: "/bouquet-builder", label: t("Builder", "Builder") },
    { href: "/about", label: t("About", "About") },
    { href: "/track", label: t("Track", "Track") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-bloom-lilac/30 bg-bloom-cream/90 backdrop-blur-md dark:border-bloom-purple-soft/40 dark:bg-bloom-purple-deep/90">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
        <button className="md:hidden" onClick={() => setMobile(true)} aria-label="Menu">
          <Menu className="h-6 w-6 text-bloom-purple dark:text-bloom-lilac" />
        </button>

        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/brand/logo.png" alt="Forever Bloom Crochet" width={48} height={48} className="rounded-full" />
          <div className="hidden sm:block">
            <p className="font-display text-lg leading-tight text-bloom-purple dark:text-bloom-lilac">Forever Bloom</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-bloom-gold">Crochet</p>
          </div>
        </Link>

        <nav className="ml-4 hidden items-center gap-4 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-bloom-charcoal/80 transition hover:text-bloom-purple dark:text-bloom-ivory/80 dark:hover:text-bloom-gold">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="relative ml-auto flex max-w-md flex-1 items-center gap-2">
          <div className="relative hidden w-full md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-bloom-purple/50" />
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 150)}
              placeholder={t("AI search blooms, gifts… ⌘K", "Phool, gifts search karein…")}
              className="w-full rounded-full border border-bloom-lilac/50 bg-white/80 py-2 pl-9 pr-10 text-sm outline-none ring-bloom-gold focus:ring-2 dark:border-bloom-purple-soft dark:bg-bloom-purple/40"
            />
            <button type="button" onClick={startVoice} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-bloom-lilac/30" aria-label="Voice search">
              <Mic className={`h-4 w-4 ${listening ? "text-red-500" : "text-bloom-purple dark:text-bloom-lilac"}`} />
            </button>
            {focused && results.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-bloom-lilac/40 bg-white shadow-soft dark:bg-bloom-purple-deep">
                {results.map((p) => (
                  <Link key={p.id} href={`/product/${p.slug}`} className="flex items-center gap-3 px-3 py-2 hover:bg-bloom-lilac/20" onClick={() => setQ("")}>
                    <Image src={p.images[0]} alt={p.name} width={40} height={40} className="h-10 w-10 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{lang === "hi" ? p.nameHi : p.name}</p>
                      <p className="text-xs text-bloom-gold-dark">{formatPrice(p.price, currency)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setLang(lang === "en" ? "hi" : "en")} className="rounded-full border border-bloom-lilac/40 px-2 py-1 text-xs font-medium text-bloom-purple dark:text-bloom-lilac">
            {lang === "en" ? "HI" : "EN"}
          </button>
          <button onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")} className="rounded-full border border-bloom-lilac/40 px-2 py-1 text-xs font-medium text-bloom-purple dark:text-bloom-lilac">
            {currency}
          </button>
          <button
            onClick={cycle}
            aria-label="Cycle theme: light, dark, pink"
            title={`Theme: ${theme}`}
            className="rounded-full p-2 hover:bg-bloom-lilac/20"
          >
            {theme === "light" && <Moon className="h-5 w-5 text-bloom-purple" />}
            {theme === "dark" && <Sun className="h-5 w-5 text-bloom-gold" />}
            {theme === "pink" && <Heart className="h-5 w-5 text-rose-500" />}
          </button>
          <Link href="/login" className="rounded-full p-2 hover:bg-bloom-lilac/20" aria-label="Account">
            <User className="h-5 w-5 text-bloom-purple dark:text-bloom-lilac" />
          </Link>
          <Link href="/wishlist" className="relative rounded-full p-2 hover:bg-bloom-lilac/20">
            <Heart className="h-5 w-5 text-bloom-purple dark:text-bloom-lilac" />
            {ids.length > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-bloom-gold text-[10px] text-bloom-purple-deep">{ids.length}</span>}
          </Link>
          <button onClick={() => setOpen(true)} className="relative rounded-full p-2 hover:bg-bloom-lilac/20" aria-label="Cart">
            <ShoppingBag className="h-5 w-5 text-bloom-purple dark:text-bloom-lilac" />
            {count > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-bloom-purple text-[10px] text-white dark:bg-bloom-gold dark:text-bloom-purple-deep">{count}</span>}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="fixed inset-0 z-[60] bg-black/40 md:hidden" onClick={() => setMobile(false)}>
          <div className="h-full w-72 bg-bloom-cream p-6 dark:bg-bloom-purple-deep" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <Image src="/brand/logo.png" alt="logo" width={40} height={40} className="rounded-full" />
              <button onClick={() => setMobile(false)}><X /></button>
            </div>
            <div className="mb-4 flex gap-2">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="flex-1 rounded-full border px-3 py-2 text-sm" />
              <button onClick={startVoice} className="rounded-full border p-2"><Mic className="h-4 w-4" /></button>
            </div>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobile(false)} className="font-medium text-bloom-purple dark:text-bloom-lilac">{l.label}</Link>
              ))}
              <p className="pt-4 text-xs text-bloom-charcoal/60">{user ? `Hi, ${user.name}` : t("Guest", "Guest")}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

interface SpeechRecognition extends EventTarget {
  lang: string;
  start: () => void;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onresult: ((ev: SpeechRecognitionEvent) => void) | null;
}
interface SpeechRecognitionEvent {
  results: { [index: number]: { [index: number]: { transcript: string } } };
}
