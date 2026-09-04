export const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder";

export type RazorpayOrder = {
  amount: number;
  currency: string;
  name: string;
  email: string;
  phone: string;
  description?: string;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function openRazorpayCheckout(order: RazorpayOrder): Promise<"paid" | "failed" | "dismissed"> {
  const ok = await loadRazorpayScript();
  if (!ok || !window.Razorpay) return "failed";

  return new Promise((resolve) => {
    const rzp = new window.Razorpay!({
      key: RAZORPAY_KEY,
      amount: Math.round(order.amount * 100),
      currency: order.currency,
      name: "Forever Bloom Crochet",
      description: order.description || "Handmade crochet flowers",
      image: "/brand/logo.png",
      prefill: { name: order.name, email: order.email, contact: order.phone },
      theme: { color: "#4A1C6B" },
      handler: () => resolve("paid"),
      modal: { ondismiss: () => resolve("dismissed") },
    });
    rzp.open();
  });
}
