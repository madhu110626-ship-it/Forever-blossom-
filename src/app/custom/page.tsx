"use client";
import { useState } from "react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";

export default function CustomPage() {
  const [form, setForm] = useState({ name: "", phone: "", occasion: "Wedding", colours: "", notes: "" });
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Custom Order%0AName: ${form.name}%0APhone: ${form.phone}%0AOccasion: ${form.occasion}%0AColours: ${form.colours}%0ANotes: ${form.notes}`;
    window.open(`https://wa.me/${WA}?text=${text}`, "_blank");
    setSent(true);
  };
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="section-title mb-2">Custom Order</h1>
      <p className="mb-8 opacity-70">Tell us your dream palette — we will crochet it to life.</p>
      {sent ? <p className="text-bloom-gold-dark">Opening WhatsApp with your request…</p> : (
        <form onSubmit={submit} className="card-surface space-y-3 p-6">
          {(["name", "phone", "colours"] as const).map((k) => (
            <input key={k} required value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} placeholder={k} className="w-full rounded-xl border px-3 py-2 text-sm" />
          ))}
          <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} className="w-full rounded-xl border px-3 py-2 text-sm">
            {["Wedding", "Birthday", "Anniversary", "Home Decor", "Other"].map((o) => <option key={o}>{o}</option>)}
          </select>
          <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Notes" rows={4} className="w-full rounded-xl border px-3 py-2 text-sm" />
          <button className="btn-primary w-full">Send via WhatsApp</button>
        </form>
      )}
    </div>
  );
}
