import Link from "next/link";

export const metadata = { title: "Terms of Service" };

const WA = "https://wa.me/917798054491";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert">
      <h1 className="section-title">Terms of Service</h1>
      <p className="mt-6 opacity-80 not-prose leading-relaxed">
        These terms govern use of forever-blossom.vercel.app and orders with Forever Bloom Crochet, a
        handmade crochet seller based in Ambarnath, Thane, Maharashtra, India. By browsing, placing an
        order, or confirming on WhatsApp, you accept these terms.
      </p>
      <p className="mt-3 text-sm opacity-70 not-prose">Last updated: September 2026</p>

      <section className="mt-10 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Seller identity</h2>
        <p className="leading-relaxed opacity-80">
          Forever Bloom Crochet is operated by Harsha Nikam B (Proprietor), Ambarnath, Thane,
          Maharashtra, India. Customer care / WhatsApp:{" "}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            +91 77980 54491
          </a>
          . Prefer WhatsApp; email available on request. Products are handmade crochet flowers and
          gifts made in India (country of origin: India).
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Handmade products</h2>
        <p className="leading-relaxed opacity-80">
          Each piece is handmade. Slight variations in colour, size, stitch, or finish compared with
          photos are normal and not defects. Custom orders are confirmed over WhatsApp before we
          start making.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Pricing</h2>
        <p className="leading-relaxed opacity-80">
          Prices are displayed in Indian Rupees (INR). Prices shown in INR; tax invoice / GST details
          are provided if the seller is GST-registered and as applicable. Shipping charges (if any)
          appear at checkout unless free-shipping rules apply. We may correct obvious pricing errors
          before dispatch and will inform you on WhatsApp.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Order process</h2>
        <p className="leading-relaxed opacity-80">
          You may place an order on the website. After checkout, order details open on WhatsApp so we
          can confirm and fulfil. An order is accepted when we confirm it on WhatsApp (or equivalent).
          We may decline or cancel orders for stock, PIN, address, or misuse reasons and will notify
          you promptly.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Payment</h2>
        <p className="leading-relaxed opacity-80">
          Cash on Delivery (COD) may be available for eligible PIN codes. Prepaid options (UPI / card
          via Razorpay or similar) may be offered when configured. We do not store your full card
          details. Fraudulent or incomplete payment may lead to cancellation.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Shipping &amp; returns</h2>
        <p className="leading-relaxed opacity-80">
          Lead times, delivery estimates, COD, packaging, returns, replacements, and cancellations are
          set out in our{" "}
          <Link
            href="/shipping"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            Shipping &amp; Returns
          </Link>{" "}
          policy, which forms part of these terms.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Intellectual property</h2>
        <p className="leading-relaxed opacity-80">
          Site content, product photos, brand name, and designs belong to Forever Bloom Crochet or
          their licensors. You may not copy, scrape, or reuse our images or branding for commercial
          purposes without permission.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Prohibited misuse</h2>
        <p className="leading-relaxed opacity-80">
          Do not misuse the site or WhatsApp channel (e.g. harassment, false orders, payment fraud,
          scraping, or attempting to breach security). We may refuse service where misuse is
          reasonably suspected.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Limitation of liability</h2>
        <p className="leading-relaxed opacity-80">
          As a small handmade SME, we take reasonable care in making and packing. To the extent
          permitted by law, our liability for any order is limited to the amount you paid for that
          order. We are not liable for courier delays outside our control, minor handmade variations,
          or indirect / consequential losses. Nothing in these terms limits your mandatory rights
          under the Consumer Protection Act, 2019.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Governing law &amp; jurisdiction</h2>
        <p className="leading-relaxed opacity-80">
          These terms are governed by the laws of India. Subject to consumer rights under the
          Consumer Protection Act, 2019 (including the consumer&apos;s choice of forum where
          applicable), disputes may be subject to the courts at Thane / Maharashtra.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Grievance &amp; related policies</h2>
        <p className="leading-relaxed opacity-80">
          For complaints, see{" "}
          <Link
            href="/grievance"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            Grievance Redressal
          </Link>
          . Also read our{" "}
          <Link
            href="/privacy"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/shipping"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            Shipping &amp; Returns
          </Link>
          .
        </p>
      </section>

      <p className="mt-10 text-xs opacity-60 not-prose leading-relaxed">
        This policy is for transparency and consumer information; it is not formal legal advice.
      </p>
    </div>
  );
}
