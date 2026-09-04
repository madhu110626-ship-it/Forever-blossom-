import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/products";

export function InstagramGallery() {
  const shots = galleryImages.slice(0, 12);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-10 flex flex-col items-end justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-bloom-gold">@foreverbloomcrochet</p>
          <h2 className="section-title mt-2">Instagram Gallery</h2>
        </div>
        <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {shots.map((g) => (
          <Link key={g.src} href="/gallery" className="group relative aspect-square overflow-hidden rounded-2xl">
            <Image src={g.src} alt={g.alt} fill className="object-cover transition duration-500 group-hover:scale-125" sizes="25vw" />
            <div className="absolute inset-0 bg-bloom-purple/0 transition group-hover:bg-bloom-purple/25" />
          </Link>
        ))}
      </div>
    </section>
  );
}
