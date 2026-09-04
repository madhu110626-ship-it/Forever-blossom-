import Image from "next/image";
import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
          <Image src="/brand/owner.jpeg" alt="Owner" fill className="object-cover" />
        </div>
        <div className="space-y-5">
          <h2 className="section-title">Every Flower Is Handmade</h2>
          <p>Handmade in Ambarnath, Thane, Maharashtra.</p>
          <Link href="/about" className="btn-primary">Our Story</Link>
        </div>
      </div>
    </section>
  );
}
