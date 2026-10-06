import HeroSection from "@/src/app/(landing)/(home)/_components/hero-section/hero-section";
import { HeroSectionData } from "./(landing)/(home)/_components/hero-section/hero-section-constants";
import FeaturesSection from "./(landing)/(home)/_components/features-section/features-section";
import { FEATURES } from "./(landing)/(home)/_components/features-section/features-section-constant";
import PopularDrinks from "./(landing)/(home)/_components/popular-drinks/popular-drinks";
import { DRINKS } from "./(landing)/(home)/_components/popular-drinks/popular-drinks-constant";

export default function Home() {
  return (
    <main>
      <HeroSection {...HeroSectionData} />
      <FeaturesSection features={FEATURES} />
      <PopularDrinks
        title="نوشیدنی‌های محبوب"
        description="کلاسیک‌ها و نوشیدنی‌های خاص برای هر سلیقه."
        drinks={DRINKS}
      />
    </main>
  );
}
