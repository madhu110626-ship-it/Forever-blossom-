import Link from "next/link";

export const metadata = { title: "Privacy Policy" };

const WA = "https://wa.me/917798054491";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert">
      <h1 className="section-title">Privacy Policy</h1>
      <p className="mt-6 opacity-80 not-prose leading-relaxed">
        Forever Bloom Crochet (&quot;we&quot;, &quot;us&quot;) is a small handmade seller based in Ambarnath, Thane,
        Maharashtra, India. This policy explains how we handle personal data in the spirit of the
        Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDP),
        for orders placed via forever-blossom.vercel.app and WhatsApp.
      </p>
      <p className="mt-3 text-sm opacity-70 not-prose">Last updated: September 2026</p>

      <section className="mt-10 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">What data we collect</h2>
        <p className="leading-relaxed opacity-80">When you order or contact us, we may process:</p>
        <ul className="list-disc space-y-2 pl-5 opacity-80">
          <li>Name, phone number, delivery address, city, state, PIN</li>
          <li>WhatsApp messages and optional email (if you share one)</li>
          <li>Order notes, gift messages, and product preferences</li>
          <li>Payment status via Razorpay when prepaid is live — we do <strong>not</strong> store card numbers or UPI PINs</li>
          <li>Cart and wishlist items stored in your browser (localStorage)</li>
        </ul>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Why we use it</h2>
        <ul className="list-disc space-y-2 pl-5 opacity-80">
          <li>Fulfil and ship handmade crochet orders (country of origin: India)</li>
          <li>Customer care, order confirmation, and tracking updates on WhatsApp</li>
          <li>Payment processing when prepaid / Razorpay is enabled</li>
          <li>Improve our small shop experience (e.g. remembering your cart)</li>
        </ul>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Consent / legal basis</h2>
        <p className="leading-relaxed opacity-80">
          Placing an order, submitting checkout details, or messaging us on WhatsApp is treated as
          your consent for us to use that information to fulfil the order and provide customer care.
          You may withdraw consent for non-essential uses by contacting us; we may still retain what
          is needed for completed orders and legal records.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Where data is stored</h2>
        <ul className="list-disc space-y-2 pl-5 opacity-80">
          <li>
            <strong>Browser:</strong> cart, wishlist, and last-order summary may sit in localStorage on
            your device
          </li>
          <li>
            <strong>WhatsApp:</strong> order details are shared with us over WhatsApp for fulfilment
          </li>
          <li>
            <strong>Payment:</strong> card / UPI data is handled by Razorpay (or similar gateways) when
            live — not stored on our servers
          </li>
        </ul>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Sharing</h2>
        <p className="leading-relaxed opacity-80">
          We share personal data only as needed to run the order: courier partners for delivery, and
          payment gateways for prepaid transactions. We do not sell your data. We may disclose
          information if required by Indian law or lawful authority.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Retention</h2>
        <p className="leading-relaxed opacity-80">
          Order and contact details are kept as long as reasonably needed for fulfilment, customer
          care, returns, and basic business / tax records. Browser localStorage stays until you clear
          site data.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Your rights</h2>
        <p className="leading-relaxed opacity-80">
          You may request access, correction, or erasure of personal data we hold, or raise a concern,
          via WhatsApp at{" "}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            +91 77980 54491
          </a>
          . Prefer WhatsApp; email is available on request. We will respond in a reasonable time. For
          complaints about our service, see{" "}
          <Link
            href="/grievance"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            Grievance Redressal
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Children</h2>
        <p className="leading-relaxed opacity-80">
          Our shop is aimed at adults purchasing gifts. We do not knowingly collect data from children
          for online sales. If a parent believes a child shared data with us, please WhatsApp us to
          delete it.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Security</h2>
        <p className="leading-relaxed opacity-80">
          We take reasonable care appropriate to a small handmade business (limited access to order
          chats, trusted payment processors). No method of transmission is 100% secure; please share
          only what is needed for delivery.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Cookies &amp; localStorage</h2>
        <p className="leading-relaxed opacity-80">
          We use browser localStorage for cart, wishlist, theme, and similar shop features. We do not
          run heavy third-party advertising trackers as part of our core checkout. Clearing browser
          data removes locally stored cart/wishlist items.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Updates</h2>
        <p className="leading-relaxed opacity-80">
          We may update this policy as the shop or Indian rules evolve. The &quot;Last updated&quot; date
          above will change; continued use of the site after updates means you acknowledge the revised
          policy.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Contact</h2>
        <p className="leading-relaxed opacity-80">
          Forever Bloom Crochet — Ambarnath, Thane, Maharashtra, India
          <br />
          Grievance Officer / Proprietor: Garnish Sharma
          <br />
          WhatsApp:{" "}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            +91 77980 54491
          </a>{" "}
          (prefer WhatsApp; email available on request)
        </p>
      </section>

      <p className="mt-10 text-xs opacity-60 not-prose leading-relaxed">
        This policy is for transparency and consumer information; it is not formal legal advice.
      </p>
    </div>
  );
}
