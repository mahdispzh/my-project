import HeroSection from "@/src/app/(landing)/(home)/_components/hero-section/hero-section";
import { HeroSectionData } from "../_components/hero-section/hero-section-constants";
import FeaturesSection from "../_components/features-section/features-section";
import { FEATURES } from "../_components/features-section/features-section-constant";
import PopularDrinks from "../_components/popular-drinks/popular-drinks";
import RecommendedDishes from "../_components/recommended-dishes/recommended-dishes";
import ReservationSection from "../_components/reservation-section/reservation-section";



export default function Home() {
  return (
    <main>
      <HeroSection {...HeroSectionData} />
      <FeaturesSection features={FEATURES} />
      <PopularDrinks />
      <RecommendedDishes />
      <ReservationSection/>
    </main>
  );
}
