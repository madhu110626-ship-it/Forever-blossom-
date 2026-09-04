import { reviews } from "@/data/products";
import { Star } from "lucide-react";

export function ReviewsMarquee() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="overflow-hidden bg-bloom-purple py-14 text-white">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-bloom-gold">Kind words</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">Customer Love</h2>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-6 px-4">
          {loop.map((r, i) => (
            <div key={`${r.name}-${i}`} className="w-[320px] shrink-0 rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="mb-2 flex gap-1 text-bloom-gold">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-bloom-gold" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-bloom-ivory/90">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-3 text-xs text-bloom-lilac">{r.name} · {r.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
