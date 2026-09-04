import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { BestSellers } from "@/components/home/BestSellers";
import { CustomOrders } from "@/components/home/CustomOrders";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ReviewsMarquee } from "@/components/home/ReviewsMarquee";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <CustomOrders />
      <WhyChoose />
      <ReviewsMarquee />
      <InstagramGallery />
      <AboutTeaser />
      <Newsletter />
    </>
  );
}
