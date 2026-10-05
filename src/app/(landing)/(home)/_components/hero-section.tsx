import { LeafIcon } from "@/src/shared/ui/icons/leaf-icon";
import { HeroSectionProps } from "./hero-section-type";
export default function HeroSection({
  title,
  description,
  eyebrow,
  stats,
  image,
}: HeroSectionProps) {
  return (
    <div className="flex flex-col justify-between gap-3">
      {/* title */}
      <div className="flex flex-col gap-2">
        <div className="flex">
          <LeafIcon className="text-accent font-sans" />
          <p className="text-accent">{eyebrow}</p>
        </div>
        title description
        <div className="flex">
          button
          <div className="flex">icon button</div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col">value lable</div>
          <div className="flex flex-col">value lable</div>
          <div className="flex flex-col">value lable</div>
        </div>
      </div>

      {/* image */}
      <div>photo</div>
    </div>
  );
}
