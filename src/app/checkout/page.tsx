"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/utils";
import { openRazorpayCheckout } from "@/lib/razorpay";
import { buildOrderWhatsAppMessage, openOrderWhatsApp, waLink } from "@/lib/whatsapp";

const states = ["Maharashtra", "Gujarat", "Karnataka", "Delhi", "Tamil Nadu", "West Bengal", "Rajasthan", "Other"];

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const { currency, t } = useLocale();
  const [pay, setPay] = useState<"upi" | "card" | "cod" | "razorpay">("cod");
  const [gift, setGift] = useState("");
  const [done, setDone] = useState<string | null>(null);
  const [waHref, setWaHref] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "Ambarnath", state: "Maharashtra", pin: "" });
  const shipping = subtotal >= 999 ? 0 : 79;
  const total = subtotal + shipping;

  const onChange = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const place = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!items.length) return;
    if (pay === "razorpay" || pay === "upi" || pay === "card") {
      const result = await openRazorpayCheckout({ amount: total, currency: "INR", name: form.name, email: form.email, phone: form.phone, description: "Forever Bloom order" });
      if (result !== "paid") {
        if (result === "failed") {
          alert(
            t(
              "Online payment is not fully set up yet. Please choose Cash on Delivery — your order will open on WhatsApp for us.",
              "Online payment abhi ready nahi hai. COD choose karein — order WhatsApp par jayega."
            )
          );
        }
        return;
      }
    }
    const id = "FB" + Date.now().toString().slice(-8);
    localStorage.setItem(
      "fbc-last-order",
      JSON.stringify({ id, form, items, total, pay, gift, at: new Date().toISOString() })
    );

    const message = buildOrderWhatsAppMessage({
      orderId: id,
      form,
      items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price, color: i.color })),
      total,
      pay,
      gift,
      shipping,
    });
    const href = waLink(message);
    setWaHref(href);
    openOrderWhatsApp(message);
    clear();
    setDone(id);
  };

  if (done) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="section-title">Order Confirmed</h1>
        <p className="mt-4">
          Thank you! Your order <strong>{done}</strong> is blooming.
        </p>
        <p className="mt-3 text-sm opacity-80">
          WhatsApp should open with your order details. Please tap <strong>Send</strong> so Forever Bloom
          receives it on <strong>77980 54491</strong>.
        </p>
        {waHref && (
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-6 inline-flex bg-[#25D366] hover:opacity-90"
          >
            Send order on WhatsApp
          </a>
        )}
        <a href="/track" className="btn-outline mt-4 inline-flex">
          Track Order
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 md:px-6">
      <form onSubmit={place} className="space-y-4">
        <h1 className="section-title mb-4">Checkout</h1>
        <p className="rounded-2xl bg-bloom-lilac/20 px-4 py-3 text-sm text-bloom-purple dark:text-bloom-lilac">
          After you place an order, WhatsApp opens so we get your order instantly on 77980 54491.
        </p>
        <p className="text-xs opacity-70">
          Prices in INR. By ordering you agree to our{" "}
          <Link href="/shipping" className="underline underline-offset-2 hover:text-bloom-gold">
            Shipping &amp; Returns
          </Link>
          ,{" "}
          <Link href="/terms" className="underline underline-offset-2 hover:text-bloom-gold">
            Terms
          </Link>
          ,{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-bloom-gold">
            Privacy
          </Link>
          , and{" "}
          <Link href="/grievance" className="underline underline-offset-2 hover:text-bloom-gold">
            Grievance
          </Link>{" "}
          policies.
        </p>
        {(["name", "phone", "email", "address", "city", "pin"] as const).map((k) => (
          <input
            key={k}
            required
            value={form[k]}
            onChange={(e) => onChange(k, e.target.value)}
            placeholder={k[0].toUpperCase() + k.slice(1)}
            className="w-full rounded-2xl border border-bloom-lilac/40 bg-white/80 px-4 py-3 text-sm dark:bg-bloom-purple/30"
          />
        ))}
        <select
          value={form.state}
          onChange={(e) => onChange("state", e.target.value)}
          className="w-full rounded-2xl border border-bloom-lilac/40 bg-white/80 px-4 py-3 text-sm dark:bg-bloom-purple/30"
        >
          {states.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <textarea
          value={gift}
          onChange={(e) => setGift(e.target.value)}
          placeholder="Gift message (optional)"
          rows={3}
          className="w-full rounded-2xl border border-bloom-lilac/40 bg-white/80 px-4 py-3 text-sm dark:bg-bloom-purple/30"
        />
        <div>
          <p className="mb-2 text-sm font-medium">Payment</p>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                ["cod", "Cash on Delivery"],
                ["razorpay", "Razorpay"],
                ["upi", "UPI"],
                ["card", "Card"],
              ] as const
            ).map(([id, label]) => (
              <button
                type="button"
                key={id}
                onClick={() => setPay(id)}
                className={`rounded-2xl border px-3 py-3 text-sm ${
                  pay === id ? "border-bloom-gold bg-bloom-gold/20" : "border-bloom-lilac/40"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        {(pay === "upi" || pay === "razorpay" || pay === "card") && (
          <div className="rounded-2xl border border-dashed border-bloom-gold/60 p-4 text-center text-sm opacity-80">
            Online pay needs Razorpay keys (coming next). Prefer <strong>Cash on Delivery</strong> for now — we
            still get the order on WhatsApp.
          </div>
        )}
        <button type="submit" className="btn-primary w-full" disabled={!items.length}>
          {t("Place Order", "Order place karein")} · {formatPrice(total, currency)}
        </button>
      </form>
      <aside className="card-surface h-fit space-y-4 p-6">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Order Summary</h2>
        {items.length === 0 && <p className="text-sm opacity-60">Your cart is empty.</p>}
        {items.map((i) => (
          <div key={`${i.productId}-${i.color}`} className="flex gap-3">
            <Image src={i.image} alt={i.name} width={56} height={56} className="rounded-xl object-cover" />
            <div className="flex-1 text-sm">
              <p className="font-medium">{i.name}</p>
              <p className="opacity-60">Qty {i.qty}</p>
            </div>
            <p className="text-sm">{formatPrice(i.price * i.qty, currency)}</p>
          </div>
        ))}
        <div className="space-y-1 border-t border-bloom-lilac/30 pt-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal, currency)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping ? formatPrice(shipping, currency) : "Free"}</span>
          </div>
          <div className="flex justify-between pt-2 text-base font-medium">
            <span>Total</span>
            <span className="text-bloom-gold-dark">{formatPrice(total, currency)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
