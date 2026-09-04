import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(inr: number, currency: "INR" | "USD" = "INR") {
  if (currency === "USD") {
    const usd = inr / 83;
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(usd);
  }
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(inr);
}

export function stars(rating: number) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return { full, half, empty: 5 - full - (half ? 1 : 0) };
}
