import Image from "next/image";
import { Button } from "@/src/shared/ui";
import { RESERVATION_FEATURES } from "./reservation-section-constant";
import cafeImage from "./cafe-interior.svg";

export default function ReservationSection() {
  return (
    <div className="bg-secondary flex flex-col overflow-hidden rounded-3xl lg:flex-row">
      {/* content */}
      <div className="flex flex-1 flex-col gap-6 p-8">
        {/* title */}
        <h2 className="text-primary text-[28px] font-semibold">
          جایی برای دورهمی‌های خوب
        </h2>
        <p className="text-primary text-[14px] font-light">
          چه با دوستات باشی، چه با خانواده یا همکارها، یه میز دنج منتظرته.
        </p>

        <div className="flex flex-col items-start gap-6">
          {/* features */}
          <div className="flex gap-6">
            {RESERVATION_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-2 text-center"
              >
                {/* icon */}
                <div className="text-primary text-[40px]">{feature.icon}</div>
                {/* title */}
                <p className="text-primary text-[13px] font-light">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <Button variant="primary" size="md">
            <p className="text-[15px] font-light">رزرو میز</p>
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="relative min-h-[260px] w-full overflow-hidden lg:w-[40%] lg:rounded-s-[110px]">
        <Image
          src={cafeImage}
          alt="فضای داخلی کافه ریشه"
          fill
          className="object-cover object-[50%_90%]"
        />
      </div>
    </div>
  );
}
