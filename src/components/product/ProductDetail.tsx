"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Minus, Plus, Star, ZoomIn } from "lucide-react";
import type { Product } from "@/data/products";
import { getRelated, products, reviews } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLocale } from "@/context/LocaleContext";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";
import { formatPrice } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

export function ProductDetail({ product }: { product: Product }) {
  const { add } = useCart();
  const { toggle, has } = useWishlist();
  const { currency, lang, t } = useLocale();
  const { push, ids } = useRecentlyViewed();
  const [img, setImg] = useState(0);
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const related = getRelated(product);
  const recent = products.filter((p) => ids.includes(p.id) && p.id !== product.id).slice(0, 4);

  useEffect(() => { push(product.id); }, [product.id, push]);

  const cartItem = { productId: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0], color };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-bloom-ivory">
            <Image src={product.images[img]} alt={product.name} fill className={`object-cover transition ${zoom ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"}`} onClick={() => setZoom((z) => !z)} sizes="50vw" />
            <span className="absolute bottom-3 right-3 rounded-full bg-white/90 p-2 dark:bg-bloom-purple"><ZoomIn className="h-4 w-4" /></span>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {product.images.map((src, i) => (
              <button key={src} onClick={() => setImg(i)} className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 ${i === img ? "border-bloom-gold" : "border-transparent"}`}>
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.25em] text-bloom-gold">{product.category.replace("-", " ")}</p>
          <h1 className="font-display text-4xl text-bloom-purple dark:text-bloom-lilac md:text-5xl">{lang === "hi" ? product.nameHi : product.name}</h1>
          <div className="flex items-center gap-2 text-bloom-gold">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-bloom-gold" : ""}`} />)}
            <span className="text-sm text-bloom-charcoal/60">{product.rating} ({product.reviews} reviews)</span>
          </div>
          <p className="text-2xl font-medium text-bloom-gold-dark">{formatPrice(product.price, currency)}</p>
          <p className="leading-relaxed text-bloom-charcoal/80 dark:text-bloom-ivory/80">{lang === "hi" ? product.descriptionHi : product.description}</p>
          <div>
            <p className="mb-2 text-sm font-medium">Color</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`rounded-full px-3 py-1 text-sm border ${color === c ? "border-bloom-purple bg-bloom-purple text-white" : "border-bloom-lilac/50"}`}>{c}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-bloom-lilac/50 px-3 py-2">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus className="h-4 w-4" /></button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}><Plus className="h-4 w-4" /></button>
            </div>
            <button className="btn-primary flex-1" onClick={() => add({ ...cartItem, qty })}>{t("Add to Cart", "Cart mein daalein")}</button>
            <button className="rounded-full border border-bloom-lilac/50 p-3" onClick={() => toggle(product.id)} aria-label="Wishlist">
              <Heart className={`h-5 w-5 ${has(product.id) ? "fill-red-500 text-red-500" : ""}`} />
            </button>
          </div>
          <Link href="/checkout" className="btn-gold inline-flex w-full justify-center" onClick={() => add({ ...cartItem, qty })}>{t("Buy Now", "Abhi kharidein")}</Link>
          <div className="grid gap-4 pt-4 md:grid-cols-3">
            <div className="card-surface p-4"><h3 className="font-display text-lg text-bloom-purple dark:text-bloom-lilac">Care</h3><p className="mt-1 text-xs leading-relaxed opacity-80">{product.care}</p></div>
            <div className="card-surface p-4"><h3 className="font-display text-lg text-bloom-purple dark:text-bloom-lilac">Delivery</h3><p className="mt-1 text-xs leading-relaxed opacity-80">{product.delivery}</p></div>
            <div className="card-surface p-4"><h3 className="font-display text-lg text-bloom-purple dark:text-bloom-lilac">Stock</h3><p className="mt-1 text-xs leading-relaxed opacity-80">{product.stock} pieces available</p></div>
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="section-title mb-6 text-3xl">Reviews</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.name} className="card-surface p-5"><p className="text-sm">&ldquo;{r.text}&rdquo;</p><p className="mt-2 text-xs text-bloom-gold">{r.name} · {r.city}</p></div>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="section-title mb-6 text-3xl">Related</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
      {recent.length > 0 && (
        <section className="mt-16">
          <h2 className="section-title mb-6 text-3xl">Recently Viewed</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{recent.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </section>
      )}
    </div>
  );
}
