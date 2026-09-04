import { Feather, Gift, HeartHandshake, Leaf, Sparkles, Truck } from "lucide-react";

const points = [
  { icon: Feather, title: "Handmade Softness", text: "Every petal is crocheted by hand — never factory-stamped." },
  { icon: Sparkles, title: "Everlasting Beauty", text: "Flowers that never wilt, fade, or need water." },
  { icon: Gift, title: "Gift-Ready", text: "Thoughtful packaging for weddings, birthdays & anniversaries." },
  { icon: Leaf, title: "Custom Colours", text: "Match outfits, themes, and brand palettes on request." },
  { icon: Truck, title: "Pan-India Shipping", text: "Carefully packed from Ambarnath to your doorstep." },
  { icon: HeartHandshake, title: "Made with Love", text: "A woman-crafted brand rooted in Thane, Maharashtra." },
];

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-bloom-gold">The Forever Bloom difference</p>
        <h2 className="section-title mt-2">Why Choose Us</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map(({ icon: Icon, title, text }) => (
          <div key={title} className="card-surface p-6 transition hover:shadow-gold">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-bloom-lilac/40 text-bloom-purple dark:bg-bloom-gold/20 dark:text-bloom-gold">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl text-bloom-purple dark:text-bloom-lilac">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-bloom-charcoal/70 dark:text-bloom-ivory/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
