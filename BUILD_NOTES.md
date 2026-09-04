# BUILD_NOTES — Forever Bloom Crochet

## Path
`/workspace/forever-bloom/site`

## How to run
1. Enter the site directory
2. Install packages with the Node package manager
3. `next build` must succeed (verified)
4. `next dev` for local preview; `next start` after build

## Main routes
- `/` Home (hero, categories, bestsellers, custom, why choose, reviews, gallery, about, newsletter)
- `/shop` Catalog
- `/product/[slug]` Product detail
- `/checkout` Checkout + Razorpay placeholder
- `/wishlist` Wishlist
- `/gallery` Photo gallery (all assets)
- `/about` Owner + Ambarnath + process
- `/custom` Custom order via WhatsApp
- `/bouquet-builder` Mix-and-match stems
- `/track` Order tracking
- `/login` Mock OTP
- `/admin` Mock admin dashboard
- `/privacy` `/terms` Legal

## Assets
- Logo: public/brand/logo.png (also app icon)
- Owner: public/brand/owner.jpeg
- 27 product photos in public/products/

## Build status
Production build succeeded on 2026-09-04.
