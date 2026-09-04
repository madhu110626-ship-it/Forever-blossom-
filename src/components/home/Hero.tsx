"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-bloom-lilac-soft via-bloom-cream to-bloom-ivory dark:from-bloom-purple-deep dark:via-bloom-purple dark:to-bloom-purple-deep">
      <div className="petal left-[8%] top-[20%]" style={{ animationDelay: "0s" }} />
      <div className="petal left-[18%] top-[55%]" style={{ animationDelay: "1.2s", background: "radial-gradient(circle at 30% 30%, #e8c84a, #c9a227)" }} />
      <div className="petal right-[12%] top-[25%]" style={{ animationDelay: "0.6s" }} />
      <div className="petal right-[22%] top-[60%]" style={{ animationDelay: "2s", background: "radial-gradient(circle at 30% 30%, #8fa888, #6b8564)" }} />
      <div className="petal left-[45%] top-[15%]" style={{ animationDelay: "1.8s", width: 10, height: 16 }} />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-8 animate-float">
          <Image
            src="/brand/logo.png"
            alt="Forever Bloom Crochet"
            width={220}
            height={220}
            priority
            className="mx-auto rounded-full shadow-gold"
          />
        </div>
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-bloom-gold">{t("Flowers that never fade.", "Phool jo kabhi murjhate nahi.")}</p>
        <h1 className="font-display text-4xl leading-tight text-bloom-purple dark:text-bloom-lilac md:text-6xl lg:text-7xl">
          {t("Handmade Crochet Flowers That Last Forever", "Haath se bane crochet phool jo hamesha khile rahen")}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-bloom-charcoal/75 dark:text-bloom-ivory/75 md:text-lg">
          {t(
            "Thoughtful gifts for weddings, birthdays, anniversaries & home décor — handcrafted with love in Ambarnath.",
            "Shaadi, birthday, anniversary aur ghar ki sajawat ke liye — Ambarnath mein pyar se handmade."
          )}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/shop" className="btn-primary text-base">{t("Shop Now", "Abhi Shop Karein")}</Link>
          <Link href="/custom" className="btn-gold text-base">{t("Custom Order", "Custom Order")}</Link>
        </div>
      </div>
    </section>
  );
}
