import Image from "next/image";
import { processImages } from "@/data/products";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/brand/owner.jpeg" alt="Forever Bloom Crochet owner" fill className="object-cover" priority />
        </div>
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.25em] text-bloom-gold">Our story</p>
          <h1 className="section-title">Every Flower Is Handmade</h1>
          <p className="leading-relaxed opacity-80">
            Forever Bloom Crochet began in Ambarnath, Thane, Maharashtra. Each bloom is stitched by hand with gift-ready care.
          </p>
          <div className="rounded-2xl bg-bloom-purple p-5 text-bloom-ivory">
            <p className="font-display text-xl text-bloom-gold">Studio</p>
            <p className="mt-1 text-sm">Ambarnath, Thane, Maharashtra, India</p>
          </div>
        </div>
      </div>
      <h2 className="section-title mt-16 mb-6 text-3xl">The Process</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {processImages.map((p) => (
          <div key={p.src} className="relative aspect-square overflow-hidden rounded-2xl">
            <Image src={p.src} alt={p.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
