"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, open, setOpen, remove, updateQty, subtotal } = useCart();
  const { currency, t } = useLocale();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-bloom-cream shadow-2xl dark:bg-bloom-purple-deep">
        <div className="flex items-center justify-between border-b border-bloom-lilac/30 px-5 py-4">
          <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">{t("Your Cart", "Aapka Cart")}</h2>
          <button onClick={() => setOpen(false)} aria-label="Close cart"><X /></button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
          {items.length === 0 && <p className="text-sm text-bloom-charcoal/60">{t("Your cart is empty.", "Cart khali hai.")}</p>}
          {items.map((item) => (
            <div key={`${item.productId}-${item.color}`} className="flex gap-3 rounded-2xl bg-white p-3 dark:bg-bloom-purple/40">
              <Image src={item.image} alt={item.name} width={72} height={72} className="h-18 w-18 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex justify-between gap-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    {item.color && <p className="text-xs text-bloom-purple/70">{item.color}</p>}
                  </div>
                  <button onClick={() => remove(item.productId, item.color)} className="text-xs text-red-500">Remove</button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-bloom-lilac/40 px-2 py-1">
                    <button onClick={() => updateQty(item.productId, item.qty - 1, item.color)}><Minus className="h-3 w-3" /></button>
                    <span className="text-sm">{item.qty}</span>
                    <button onClick={() => updateQty(item.productId, item.qty + 1, item.color)}><Plus className="h-3 w-3" /></button>
                  </div>
                  <p className="text-sm font-medium text-bloom-gold-dark">{formatPrice(item.price * item.qty, currency)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-bloom-lilac/30 p-5">
          <div className="mb-4 flex justify-between font-medium">
            <span>{t("Subtotal", "Subtotal")}</span>
            <span className="text-bloom-purple dark:text-bloom-gold">{formatPrice(subtotal, currency)}</span>
          </div>
          <Link href="/checkout" onClick={() => setOpen(false)} className="btn-primary w-full">
            {t("Checkout", "Checkout")}
          </Link>
        </div>
      </aside>
    </div>
  );
}
