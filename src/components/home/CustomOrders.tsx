import Image from "next/image";
import Link from "next/link";

export function CustomOrders() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-bloom-purple text-white md:grid-cols-2">
        <div className="relative min-h-[320px]">
          <Image src="/products/yellow-wip-process.jpeg" alt="Custom crochet in progress" fill className="object-cover" />
        </div>
        <div className="space-y-5 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-bloom-gold">Bespoke blooms</p>
          <h2 className="font-display text-4xl md:text-5xl">Custom Orders</h2>
          <p className="text-bloom-lilac leading-relaxed">
            Dreaming of bridal whites, school-colour stems, or a bouquet in her favourite shades?
            We craft made-to-order pieces with the same care as every Forever Bloom flower.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/custom" className="btn-gold">Start Custom Order</Link>
            <Link href="/bouquet-builder" className="btn-outline border-bloom-gold text-bloom-gold hover:bg-bloom-gold hover:text-bloom-purple-deep">
              Bouquet Builder
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
