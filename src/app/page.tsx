import HeroSection from "@/src/app/(landing)/(home)/_components/hero-section/hero-section";
import { HeroSectionData } from "./(landing)/(home)/_components/hero-section/hero-section-constants";
import FeaturesSection from "./(landing)/(home)/_components/features-section/features-section";
import { FEATURES } from "./(landing)/(home)/_components/features-section/features-section-constant";
import PopularDrinks from "./(landing)/(home)/_components/popular-drinks/popular-drinks";
import RecommendedDishes from "./(landing)/(home)/_components/recommended-dishes/recommended-dishes";
import ReservationSection from "./(landing)/(home)/_components/reservation-section/reservation-section";


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
