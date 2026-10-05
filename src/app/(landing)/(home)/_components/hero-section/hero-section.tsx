import { LeafIcon } from "@/src/shared/ui/icons/leaf-icon";
import { HeroSectionProps } from "./hero-section-type";
import { Button } from "@/src/shared/ui";
import { ArrowLeftIcon } from "@/src/shared/ui/icons/arrow-left-icon";
import Image from "next/image";
import heroShape from "./hero-section-shape.svg";

export default function HeroSection({
  title,
  description,
  eyebrow,
  stats,
  image,
}: HeroSectionProps) {
  return (
    <div className="flex justify-between gap-3 p-5">
      {/* title */}
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex">
          <LeafIcon className="text-accent" />
          <p className="text-accent">{eyebrow}</p>
        </div>
        <h1 className="text-primary font-semibold text-[30px]">{title}</h1>
        <p className="text-primary whitespace-pre-line">{description}</p>
        {/* buttons */}
        <div className="flex gap-4">
          <Button variant="outline" size="md">
            <p className="text-[15px] font-light"> قصه ریشه</p>
          </Button>
          <Button
            variant="primary"
            size="md"
            icon={<ArrowLeftIcon className="text-background" />}
          >
            <p className="text-[15px] font-light">دیدن منوی امروز</p>
          </Button>
        </div>
        {/* stats */}
        <div className="flex gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span>{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* image */}
      <div
        className="relative aspect-square w-full max-w-[500px]"
        style={{
          maskImage: `url(${heroShape.src})`,
          WebkitMaskImage: `url(${heroShape.src})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <Image src={image} alt="فضای کافه ریشه" fill className="object-cover" />
      </div>
    </div>
  );
}
