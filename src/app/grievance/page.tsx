import Link from "next/link";

export const metadata = { title: "Grievance Redressal" };

const WA = "https://wa.me/917798054491";

export default function GrievancePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert">
      <h1 className="section-title">Grievance Redressal</h1>
      <p className="mt-6 opacity-80 not-prose leading-relaxed">
        Forever Bloom Crochet aims to resolve customer concerns fairly and promptly, in the spirit of
        the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020, for
        our small handmade shop in Ambarnath, Thane, Maharashtra.
      </p>
      <p className="mt-3 text-sm opacity-70 not-prose">Last updated: September 2026</p>

      <section className="mt-10 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Customer care</h2>
        <p className="leading-relaxed opacity-80">
          For order help, shipping, or product queries, WhatsApp us at{" "}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            +91 77980 54491
          </a>
          . Prefer WhatsApp; email available on request.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Grievance Officer</h2>
        <ul className="list-none space-y-1 opacity-80">
          <li>
            <strong>Name:</strong> Harsha Nikam B
          </li>
          <li>
            <strong>Designation:</strong> Grievance Officer / Proprietor
          </li>
          <li>
            <strong>Business:</strong> Forever Bloom Crochet
          </li>
          <li>
            <strong>Address:</strong> Ambarnath, Thane, Maharashtra, India
          </li>
          <li>
            <strong>Contact:</strong>{" "}
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
            >
              WhatsApp +91 77980 54491
            </a>{" "}
            (prefer WhatsApp; email available on request)
          </li>
        </ul>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">How to raise a complaint</h2>
        <ol className="list-decimal space-y-2 pl-5 opacity-80">
          <li>Message us on WhatsApp with your order ID (if any).</li>
          <li>Describe the issue clearly (damage, wrong item, delay, billing, etc.).</li>
          <li>Attach clear photos or screenshots where relevant.</li>
          <li>Share a preferred resolution (replacement, remake, refund discussion, etc.).</li>
        </ol>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Timelines</h2>
        <ul className="list-disc space-y-2 pl-5 opacity-80">
          <li>
            We endeavour to <strong>acknowledge</strong> your grievance within <strong>48 hours</strong>{" "}
            of receipt on WhatsApp.
          </li>
          <li>
            We endeavour to <strong>resolve</strong> the grievance within <strong>1 month</strong> of
            receipt, depending on the nature of the issue and courier timelines.
          </li>
        </ul>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">National Consumer Helpline</h2>
        <p className="leading-relaxed opacity-80">
          As a small seller we participate in consumer awareness on a best-effort basis. You may also
          contact the National Consumer Helpline at{" "}
          <strong>1915</strong> or visit{" "}
          <a
            href="https://consumerhelpline.gov.in"
            target="_blank"
            rel="noreferrer"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            consumerhelpline.gov.in
          </a>
          . This does not replace our WhatsApp grievance channel above.
        </p>
      </section>

      <section className="mt-8 not-prose space-y-3">
        <h2 className="font-display text-2xl text-bloom-purple dark:text-bloom-lilac">Related policies</h2>
        <p className="leading-relaxed opacity-80">
          See{" "}
          <Link
            href="/shipping"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            Shipping &amp; Returns
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
          >
            Terms of Service
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
