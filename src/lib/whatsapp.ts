/** Business WhatsApp (India) — digits only, no + */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "917798054491";

export function waLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export type OrderAlertItem = {
  name: string;
  qty: number;
  price: number;
  color?: string;
};

export function buildOrderWhatsAppMessage(opts: {
  orderId: string;
  form: {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pin: string;
  };
  items: OrderAlertItem[];
  total: number;
  pay: string;
  gift?: string;
  shipping?: number;
}) {
  const lines = [
    `New Forever Bloom order ${opts.orderId}`,
    ``,
    `Customer: ${opts.form.name}`,
    `Phone: ${opts.form.phone}`,
    `Email: ${opts.form.email}`,
    `Address: ${opts.form.address}, ${opts.form.city}, ${opts.form.state} ${opts.form.pin}`,
    ``,
    `Items:`,
    ...opts.items.map(
      (i) =>
        `• ${i.name}${i.color ? ` (${i.color})` : ""} × ${i.qty} = ₹${i.price * i.qty}`
    ),
    ``,
    `Payment: ${opts.pay.toUpperCase()}`,
    `Total: ₹${opts.total}`,
  ];
  if (opts.gift?.trim()) {
    lines.push(``, `Gift message: ${opts.gift.trim()}`);
  }
  lines.push(``, `Please confirm this order. Thank you!`);
  return lines.join("\n");
}

export function openOrderWhatsApp(message: string) {
  if (typeof window === "undefined") return;
  window.open(waLink(message), "_blank", "noopener,noreferrer");
}
