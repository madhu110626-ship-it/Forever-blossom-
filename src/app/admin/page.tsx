"use client";
import { useEffect, useMemo, useState } from "react";
import { products as seed } from "@/data/products";

type Tab = "products" | "orders" | "customers" | "analytics" | "coupons";

const mockOrders = [
  { id: "FB1001", customer: "Ananya S.", total: 1299, status: "Shipped", city: "Mumbai" },
  { id: "FB1002", customer: "Priya K.", total: 799, status: "Processing", city: "Pune" },
  { id: "FB1003", customer: "Neha R.", total: 299, status: "Delivered", city: "Thane" },
];
const mockCustomers = [
  { name: "Ananya S.", orders: 3, spent: 2897 },
  { name: "Priya K.", orders: 2, spent: 1598 },
  { name: "Meera D.", orders: 1, spent: 449 },
];

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [tab, setTab] = useState<Tab>("products");
  const [rows, setRows] = useState(seed.map((p) => ({ ...p })));
  const [coupons, setCoupons] = useState([{ code: "BLOOM10", off: "10%", active: true }, { code: "WELCOME50", off: "₹50", active: true }]);

  useEffect(() => {
    if (sessionStorage.getItem("fbc-admin") === "1") setAuthed(true);
  }, []);

  const revenue = useMemo(() => mockOrders.reduce((s, o) => s + o.total, 0), []);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === "bloomadmin" || pass === "admin") {
      sessionStorage.setItem("fbc-admin", "1");
      setAuthed(true);
    } else alert("Incorrect password");
  };

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4">
        <h1 className="section-title mb-4">Admin</h1>
        <form onSubmit={login} className="card-surface space-y-3 p-6">
          <p className="text-sm opacity-70">Staff only — not linked from the shop. Bookmark this page.</p>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" className="w-full rounded-xl border px-3 py-2" />
          <button className="btn-primary w-full">Enter</button>
        </form>
      </div>
    );
  }

  const tabs: Tab[] = ["products", "orders", "customers", "analytics", "coupons"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="section-title">Admin Dashboard</h1>
        <button className="text-sm text-red-500" onClick={() => { sessionStorage.removeItem("fbc-admin"); setAuthed(false); }}>Logout</button>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-full px-4 py-1.5 text-sm capitalize ${tab === t ? "bg-bloom-purple text-white" : "border border-bloom-lilac/40"}`}>{t}</button>
        ))}
      </div>

      {tab === "products" && (
        <div className="overflow-x-auto card-surface">
          <table className="min-w-full text-sm">
            <thead><tr className="border-b text-left"><th className="p-3">Name</th><th className="p-3">Price</th><th className="p-3">Stock</th><th className="p-3">Update</th></tr></thead>
            <tbody>
              {rows.map((p, i) => (
                <tr key={p.id} className="border-b border-bloom-lilac/20">
                  <td className="p-3">{p.name}</td>
                  <td className="p-3"><input type="number" value={p.price} onChange={(e) => setRows((r) => r.map((x, j) => j === i ? { ...x, price: Number(e.target.value) } : x))} className="w-24 rounded border px-2 py-1" /></td>
                  <td className="p-3"><input type="number" value={p.stock} onChange={(e) => setRows((r) => r.map((x, j) => j === i ? { ...x, stock: Number(e.target.value) } : x))} className="w-20 rounded border px-2 py-1" /></td>
                  <td className="p-3 text-bloom-gold-dark">Saved locally</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "orders" && (
        <div className="card-surface divide-y">
          {mockOrders.map((o) => (
            <div key={o.id} className="flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
              <span className="font-medium">{o.id}</span><span>{o.customer}</span><span>{o.city}</span><span>₹{o.total}</span><span className="rounded-full bg-bloom-lilac/30 px-2 py-0.5">{o.status}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "customers" && (
        <div className="grid gap-4 md:grid-cols-3">
          {mockCustomers.map((c) => (
            <div key={c.name} className="card-surface p-5"><p className="font-display text-xl">{c.name}</p><p className="text-sm opacity-70">{c.orders} orders · ₹{c.spent}</p></div>
          ))}
        </div>
      )}

      {tab === "analytics" && (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-surface p-6"><p className="text-sm opacity-70">Revenue (mock)</p><p className="font-display text-3xl text-bloom-gold-dark">₹{revenue}</p></div>
          <div className="card-surface p-6"><p className="text-sm opacity-70">Products</p><p className="font-display text-3xl">{rows.length}</p></div>
          <div className="card-surface p-6"><p className="text-sm opacity-70">Orders</p><p className="font-display text-3xl">{mockOrders.length}</p></div>
        </div>
      )}

      {tab === "coupons" && (
        <div className="space-y-3">
          {coupons.map((c, i) => (
            <div key={c.code} className="card-surface flex items-center justify-between p-4">
              <div><p className="font-medium">{c.code}</p><p className="text-sm opacity-70">{c.off} off</p></div>
              <button onClick={() => setCoupons((arr) => arr.map((x, j) => j === i ? { ...x, active: !x.active } : x))} className="text-sm text-bloom-purple dark:text-bloom-gold">{c.active ? "Active" : "Disabled"}</button>
            </div>
          ))}
          <button className="btn-outline" onClick={() => setCoupons((c) => [...c, { code: "NEW" + (c.length + 1), off: "5%", active: true }])}>Add coupon</button>
        </div>
      )}
    </div>
  );
}
