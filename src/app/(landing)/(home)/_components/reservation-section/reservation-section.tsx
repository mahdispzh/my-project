import Image from "next/image";
import { Button } from "@/src/shared/ui";
import { ArrowLeftIcon } from "@/src/shared/ui/icons/arrow-left-icon";
import { RESERVATION_FEATURES } from "./reservation-section-constant";
import cafeImage from "./cafe-interior.svg";

export default function ReservationSection() {
  return (
    <div className="bg-secondary flex flex-col overflow-hidden rounded-3xl lg:flex-row">
{/* content */}
<div className="flex flex-1 items-center justify-start p-8">
  <div className="flex w-full max-w-[460px] flex-col gap-5">
    {/* title */}
    <h2 className="text-primary text-[26px] font-semibold">
      جایی برای دورهمی‌های خوب
    </h2>
    <p className="text-primary text-[14px] font-light">
      چه با دوستات باشی، چه با خانواده یا همکارها، یه میز دنج منتظرته.
    </p>

    {/* features */}
    <div className="flex gap-3">
      {RESERVATION_FEATURES.map((feature) => (
        <div
          key={feature.title}
          className="bg-background/60 flex flex-1 flex-col items-center gap-2 rounded-2xl p-3 text-center"
        >
          {/* icon */}
          <div className="bg-primary text-background flex h-10 w-10 items-center justify-center rounded-full text-[20px]">
            {feature.icon}
          </div>
          {/* title */}
          <p className="text-primary text-[12px] font-light">
            {feature.title}
          </p>
        </div>
      ))}
    </div>

    {/* button */}
    <Button
      variant="primary"
      size="md"
      icon={<ArrowLeftIcon className="text-background" />}
    >
      <p className="text-[15px] font-light">رزرو میز</p>
    </Button>
  </div>
</div>

      {/* image */}
      <div className="relative min-h-[260px] w-full overflow-hidden lg:w-[40%] lg:rounded-s-[120px]">
        <Image
          src={cafeImage}
          alt="فضای داخلی کافه ریشه"
          fill
          className="object-cover object-[50%_70%]"
        />
      </div>
    </div>
  );
}