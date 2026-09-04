"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { useLocale } from "@/context/LocaleContext";

export default function BouquetBuilderPage() {
  const stems = products.filter((p) => ["single-flowers", "accessories"].includes(p.category));
  const [picked, setPicked] = useState<Record<string, number>>({});
  const { add } = useCart();
  const { currency } = useLocale();
  const total = useMemo(() => stems.reduce((s, p) => s + (picked[p.id] || 0) * p.price, 0), [picked, stems]);
  const count = Object.values(picked).reduce((a, b) => a + b, 0);

  const toggle = (id: string, delta: number) => {
    setPicked((prev) => {
      const next = Math.max(0, (prev[id] || 0) + delta);
      const copy = { ...prev };
      if (next === 0) delete copy[id]; else copy[id] = next;
      return copy;
    });
  };

  const addAll = () => {
    stems.forEach((p) => {
      const qty = picked[p.id];
      if (qty) add({ productId: p.id, slug: p.slug, name: p.name, price: p.price, image: p.images[0], color: p.colors[0], qty });
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="section-title mb-2">Bouquet Builder</h1>
      <p className="mb-8 opacity-70">Mix stems and accents into your forever arrangement.</p>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stems.map((p) => (
            <div key={p.id} className="card-surface overflow-hidden">
              <div className="relative aspect-square"><Image src={p.images[0]} alt={p.name} fill className="object-cover" /></div>
              <div className="space-y-2 p-3">
                <p className="font-medium text-sm">{p.name}</p>
                <p className="text-xs text-bloom-gold-dark">{formatPrice(p.price, currency)}</p>
                <div className="flex items-center gap-2">
                  <button className="rounded-full border px-2" onClick={() => toggle(p.id, -1)}>-</button>
                  <span className="text-sm">{picked[p.id] || 0}</span>
                  <button className="rounded-full border px-2" onClick={() => toggle(p.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className="card-surface h-fit p-6">
          <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Your bouquet</h2>
          <p className="mt-2 text-sm">{count} stems · {formatPrice(total, currency)}</p>
          <button className="btn-primary mt-6 w-full" disabled={!count} onClick={addAll}>Add bouquet to cart</button>
        </aside>
      </div>
    </div>
  );
}
