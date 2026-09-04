"use client";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const list = products.filter((p) => ids.includes(p.id));
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="section-title mb-8">Wishlist</h1>
      {list.length === 0 ? (
        <div className="text-center"><p className="mb-4 opacity-70">No saved blooms yet.</p><Link href="/shop" className="btn-primary">Browse Shop</Link></div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      )}
    </div>
  );
}
