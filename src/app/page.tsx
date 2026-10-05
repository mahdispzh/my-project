import HeroSection from "@/src/app/(landing)/(home)/_components/hero-section";
import { HeroSectionData } from "./(landing)/(home)/_components/hero-section-constants";

export default function Home() {
  return (
    <main>
      <HeroSection {...HeroSectionData} />
    </main>
  );
}