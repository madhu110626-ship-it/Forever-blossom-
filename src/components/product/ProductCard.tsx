"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/utils";
import { QuickView } from "./QuickView";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { toggle, has } = useWishlist();
  const { currency, lang, t } = useLocale();
  const [qv, setQv] = useState(false);
  const wished = has(product.id);

  return (
    <>
      <article className="group card-surface overflow-hidden transition hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden bg-bloom-ivory">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </Link>
          {product.bestSeller && (
            <span className="absolute left-3 top-3 rounded-full bg-bloom-gold px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-bloom-purple-deep">
              Bestseller
            </span>
          )}
          <button
            onClick={() => toggle(product.id)}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow dark:bg-bloom-purple-deep/80"
            aria-label="Wishlist"
          >
            <Heart className={`h-4 w-4 ${wished ? "fill-red-500 text-red-500" : "text-bloom-purple"}`} />
          </button>
          <div className="absolute inset-x-3 bottom-3 flex translate-y-4 gap-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
            <button onClick={() => setQv(true)} className="flex flex-1 items-center justify-center gap-1 rounded-full bg-white/95 py-2 text-xs font-medium text-bloom-purple shadow">
              <Eye className="h-3.5 w-3.5" /> {t("Quick View", "Quick View")}
            </button>
            <button
              onClick={() =>
                add({
                  productId: product.id,
                  slug: product.slug,
                  name: product.name,
                  price: product.price,
                  image: product.images[0],
                  color: product.colors[0],
                })
              }
              className="flex flex-1 items-center justify-center gap-1 rounded-full bg-bloom-purple py-2 text-xs font-medium text-white shadow"
            >
              <ShoppingBag className="h-3.5 w-3.5" /> {t("Add", "Add")}
            </button>
          </div>
        </div>
        <div className="space-y-1 p-4">
          <Link href={`/product/${product.slug}`} className="font-display text-lg text-bloom-purple dark:text-bloom-lilac hover:underline">
            {lang === "hi" ? product.nameHi : product.name}
          </Link>
          <div className="flex items-center gap-1 text-bloom-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-bloom-gold" : "text-bloom-lilac"}`} />
            ))}
            <span className="ml-1 text-xs text-bloom-charcoal/60 dark:text-bloom-ivory/60">({product.reviews})</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="font-medium text-bloom-gold-dark">{formatPrice(product.price, currency)}</p>
            {product.compareAt && (
              <p className="text-xs text-bloom-charcoal/50 line-through">{formatPrice(product.compareAt, currency)}</p>
            )}
          </div>
        </div>
      </article>
      {qv && <QuickView product={product} onClose={() => setQv(false)} />}
    </>
  );
}
