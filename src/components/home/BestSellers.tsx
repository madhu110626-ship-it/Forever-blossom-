"use client";

import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useLocale } from "@/context/LocaleContext";

export function BestSellers() {
  const { t } = useLocale();
  const best = products.filter((p) => p.bestSeller).slice(0, 8);

  return (
    <section className="bg-white/50 py-20 dark:bg-bloom-purple/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-bloom-gold">{t("Loved by many", "Sabke favourite")}</p>
          <h2 className="section-title mt-2">{t("Best Sellers", "Best Sellers")}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {best.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
