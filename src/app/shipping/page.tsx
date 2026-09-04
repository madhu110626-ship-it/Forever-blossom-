import Link from "next/link";

export const metadata = { title: "Shipping & Returns" };

const WA = "https://wa.me/917798054491";

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert">
      <h1 className="section-title">Shipping & Returns</h1>
      <p className="mt-6 opacity-80 not-prose leading-relaxed">
        Forever Bloom Crochet ships handmade crochet flowers from Ambarnath, Thane, Maharashtra across
        India. Below is how lead times, delivery, COD, tracking, packaging, and returns work — written
        clearly for our handmade customers.
      </p>

      <section className="mt-10 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Handmade lead time</h2>
        <p className="leading-relaxed opacity-80">
          Most catalog items take <strong>2–5 business days</strong> to make before dispatch. Custom or
          large bouquets may take longer — we confirm the timeline on WhatsApp when you order.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Delivery after dispatch</h2>
        <ul className="list-disc space-y-2 pl-5 opacity-80">
          <li>
            <strong>Maharashtra:</strong> about 3–5 business days
          </li>
          <li>
            <strong>Other India metros:</strong> about 5–7 business days
          </li>
          <li>
            <strong>Rest of India:</strong> about 5–8 business days
          </li>
        </ul>
        <p className="leading-relaxed opacity-80">
          These are estimates only. Festivals, weather, or courier delays can add time. We’ll keep you
          posted if anything changes.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Cash on Delivery (COD)</h2>
        <p className="leading-relaxed opacity-80">
          COD is available for eligible PIN codes. If you don’t use online pay, we’ll confirm COD
          eligibility on WhatsApp. Prepaid (UPI / Razorpay when live) is preferred — it helps reduce
          RTO and gets your blooms on the way faster.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Tracking</h2>
        <p className="leading-relaxed opacity-80">
          When your order ships, we share the courier tracking / AWB on WhatsApp. You can also use{" "}
          <Link href="/track" className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold">
            Track Order
          </Link>{" "}
          on the site once details are shared.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Packaging</h2>
        <p className="leading-relaxed opacity-80">
          Gift-ready cream / lilac style packing with tissue, a care card, and a thank-you note — ready
          to gift as soon as it arrives.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Returns &amp; replacements</h2>
        <p className="leading-relaxed opacity-80">
          Made-to-order and custom pieces are generally non-returnable. If your order arrives damaged,
          defective, or is the wrong item, please WhatsApp clear photos within{" "}
          <strong>48 hours</strong> of delivery to{" "}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            +91 77980 54491
          </a>
          . We’ll arrange a remake / replacement or a fair resolution. For hygiene, blooms that have
          been used or worn typically cannot be returned.
        </p>
        <p className="leading-relaxed opacity-80">
          For eligible prepaid refunds, we process them in a reasonable time aligned with payment /
          RBI norms once approved; custom and made-to-order pieces remain generally non-returnable as
          above.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Cancellations</h2>
        <p className="leading-relaxed opacity-80">
          Before making starts — message us on WhatsApp ASAP. Once crocheting has begun, cancellation
          may not be possible (each piece is made for you).
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Contact</h2>
        <p className="leading-relaxed opacity-80">
          WhatsApp{" "}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            +91 77980 54491
          </a>{" "}
          for all shipping help.
        </p>
      </section>

      <p className="mt-10 text-xs opacity-60 not-prose leading-relaxed">
        This policy is for transparency and consumer information; it is not formal legal advice.
      </p>
    </div>
  );
}
