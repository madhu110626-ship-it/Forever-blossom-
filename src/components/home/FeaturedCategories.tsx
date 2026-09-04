import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-bloom-gold">Collections</p>
        <h2 className="section-title mt-2">Featured Categories</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((c) => (
          <Link key={c.slug} href={`/shop?category=${c.slug}`} className="group relative overflow-hidden rounded-3xl shadow-soft">
            <div className="relative aspect-[4/5]">
              <Image src={c.image} alt={c.name} fill className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-bloom-purple-deep/80 via-bloom-purple/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-3xl">{c.name}</h3>
                <p className="mt-1 text-sm text-bloom-lilac">{c.blurb}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
