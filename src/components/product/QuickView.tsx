"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/utils";

export function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  const { add } = useCart();
  const { currency, t } = useLocale();

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-bloom-cream shadow-2xl dark:bg-bloom-purple-deep md:grid-cols-2">
        <button onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 dark:bg-bloom-purple"><X className="h-4 w-4" /></button>
        <div className="relative min-h-[260px]">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
        </div>
        <div className="space-y-4 overflow-y-auto p-6">
          <h3 className="font-display text-3xl text-bloom-purple dark:text-bloom-lilac">{product.name}</h3>
          <p className="text-xl text-bloom-gold-dark">{formatPrice(product.price, currency)}</p>
          <p className="text-sm leading-relaxed text-bloom-charcoal/80 dark:text-bloom-ivory/80">{product.description}</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <span key={c} className="rounded-full border border-bloom-lilac/50 px-3 py-1 text-xs">{c}</span>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <button
              className="btn-primary flex-1"
              onClick={() => {
                add({ productId: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0], color: product.colors[0] });
                onClose();
              }}
            >
              {t("Add to Cart", "Cart mein daalein")}
            </button>
            <Link href={`/product/${product.slug}`} onClick={onClose} className="btn-outline flex-1 text-center">
              {t("Details", "Details")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
