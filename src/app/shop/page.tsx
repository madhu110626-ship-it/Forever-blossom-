"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories, type ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Suspense } from "react";

function ShopInner() {
  const params = useSearchParams();
  const initial = (params.get("category") as ProductCategory) || "all";
  const [cat, setCat] = useState<string>(initial);
  const [sort, setSort] = useState("featured");
  const list = useMemo(() => {
    let items = cat === "all" ? [...products] : products.filter((p) => p.category === cat);
    if (sort === "price-asc") items.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") items.sort((a, b) => b.price - a.price);
    if (sort === "rating") items.sort((a, b) => b.rating - a.rating);
    return items;
  }, [cat, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="section-title mb-2">Shop</h1>
      <p className="mb-8 text-bloom-charcoal/70 dark:text-bloom-ivory/70">Handmade blooms from Ambarnath — forever gifts.</p>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <button onClick={() => setCat("all")} className={`rounded-full px-4 py-1.5 text-sm ${cat === "all" ? "bg-bloom-purple text-white" : "border border-bloom-lilac/50"}`}>All</button>
        {categories.map((c) => (
          <button key={c.slug} onClick={() => setCat(c.slug)} className={`rounded-full px-4 py-1.5 text-sm ${cat === c.slug ? "bg-bloom-purple text-white" : "border border-bloom-lilac/50"}`}>{c.name}</button>
        ))}
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="ml-auto rounded-full border border-bloom-lilac/50 bg-transparent px-3 py-1.5 text-sm">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return <Suspense><ShopInner /></Suspense>;
}
