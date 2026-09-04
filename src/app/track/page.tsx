"use client";
import { useState } from "react";

const stages = ["Placed", "Crafting", "Packed", "Shipped", "Delivered"];

export default function TrackPage() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<{ id: string; stage: number } | null>(null);
  const track = (e: React.FormEvent) => {
    e.preventDefault();
    const last = localStorage.getItem("fbc-last-order");
    if (last) {
      const order = JSON.parse(last) as { id: string };
      if (!id || id.toUpperCase() === order.id) {
        setResult({ id: order.id, stage: 2 });
        return;
      }
    }
    if (id.toUpperCase().startsWith("FB")) setResult({ id: id.toUpperCase(), stage: 1 });
    else alert("Order not found. Try your FB… id from checkout.");
  };
  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="section-title mb-6">Track Order</h1>
      <form onSubmit={track} className="flex gap-2">
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Order ID e.g. FB12345678" className="flex-1 rounded-full border px-4 py-3 text-sm" />
        <button className="btn-primary">Track</button>
      </form>
      {result && (
        <div className="card-surface mt-8 p-6">
          <p className="font-medium">Order {result.id}</p>
          <ol className="mt-4 space-y-3">
            {stages.map((s, i) => (
              <li key={s} className={`flex items-center gap-3 text-sm ${i <= result.stage ? "text-bloom-purple dark:text-bloom-gold" : "opacity-40"}`}>
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${i <= result.stage ? "bg-bloom-gold text-bloom-purple-deep" : "bg-bloom-lilac/40"}`}>{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
