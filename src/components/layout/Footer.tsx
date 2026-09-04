import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";

const IG = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/foreverbloomcrochet";
const FB = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/foreverbloomcrochet";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-bloom-lilac/30 bg-bloom-purple text-bloom-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/brand/logo.png" alt="Forever Bloom Crochet" width={64} height={64} className="rounded-full bg-bloom-cream" />
            <div>
              <p className="font-display text-xl">Forever Bloom</p>
              <p className="text-xs uppercase tracking-[0.2em] text-bloom-gold">Crochet</p>
            </div>
          </div>
          <p className="text-sm text-bloom-lilac">Flowers that never fade.</p>
          <p className="text-sm leading-relaxed text-bloom-ivory/80">
            Handmade crochet flowers, bouquets & gifts from Ambarnath, Thane, Maharashtra, India.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-display text-lg text-bloom-gold">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-bloom-gold">Shop</Link></li>
            <li><Link href="/gallery" className="hover:text-bloom-gold">Gallery</Link></li>
            <li><Link href="/custom" className="hover:text-bloom-gold">Custom Orders</Link></li>
            <li><Link href="/bouquet-builder" className="hover:text-bloom-gold">Bouquet Builder</Link></li>
            <li><Link href="/about" className="hover:text-bloom-gold">About</Link></li>
            <li><Link href="/track" className="hover:text-bloom-gold">Track Order</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-lg text-bloom-gold">Help</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shipping" className="hover:text-bloom-gold">Shipping & Returns</Link></li>
            <li><Link href="/grievance" className="hover:text-bloom-gold">Grievance Redressal</Link></li>
            <li><Link href="/privacy" className="hover:text-bloom-gold">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-bloom-gold">Terms of Service</Link></li>
            <li><Link href="/wishlist" className="hover:text-bloom-gold">Wishlist</Link></li>
            <li><Link href="/login" className="hover:text-bloom-gold">Login / OTP</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-lg text-bloom-gold">Connect</h4>
          <div className="mb-4 flex gap-3 text-sm">
            <a href={IG} target="_blank" rel="noreferrer" className="rounded-full border border-bloom-gold/50 px-3 py-1 hover:bg-bloom-gold hover:text-bloom-purple-deep">Instagram</a>
            <a href={FB} target="_blank" rel="noreferrer" className="rounded-full border border-bloom-gold/50 px-3 py-1 hover:bg-bloom-gold hover:text-bloom-purple-deep">Facebook</a>
            <a href={waLink("Hi Forever Bloom Crochet!")} target="_blank" rel="noreferrer" className="rounded-full border border-bloom-gold/50 px-3 py-1 hover:bg-bloom-gold hover:text-bloom-purple-deep">WhatsApp</a>
          </div>
          <p className="text-sm text-bloom-ivory/80">
            Forever Bloom Crochet<br />
            Ambarnath, Thane,<br />Maharashtra, India
          </p>
          <p className="mt-2 text-sm text-bloom-ivory/80">
            WhatsApp:{" "}
            <a href={waLink("Hi Forever Bloom Crochet!")} target="_blank" rel="noreferrer" className="hover:text-bloom-gold">
              +91 77980 54491
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-bloom-lilac">
        © {new Date().getFullYear()} Forever Bloom Crochet. Handmade with love in Ambarnath.
      </div>
    </footer>
  );
}
