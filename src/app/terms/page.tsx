import Link from "next/link";

export const metadata = { title: "Terms of Service" };
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="section-title">Terms of Service</h1>
      <p className="mt-6 opacity-80">
        Handmade products may have slight variations. Custom orders are confirmed over WhatsApp.
        Shipping timelines are estimates across India. COD availability may vary by PIN. By placing an
        order you agree to these terms.
      </p>
      <p className="mt-4 opacity-80">
        For lead times, delivery estimates, COD, packaging, returns, and cancellations, see our{" "}
        <Link
          href="/shipping"
          className="text-bloom-gold-dark underline underline-offset-2 hover:text-bloom-gold"
        >
          Shipping &amp; Returns
        </Link>{" "}
        policy.
      </p>
    </div>
  );
}
