import Image from "next/image";
import { Button } from "@/src/shared/ui";
import { DRINKS } from "./popular-drinks-constant";

export default function PopularDrinks() {
  return (
    <div className="bg-secondary flex flex-col items-center justify-between gap-8 rounded-3xl p-8 lg:flex-row">
      {/* title */}
      <div className="flex flex-col gap-4">
        <h2 className="text-primary text-[28px] font-semibold">
          نوشیدنی‌های محبوب
        </h2>
        <p className="text-primary text-[14px] font-light">
          کلاسیک‌ها و نوشیدنی‌های خاص برای هر سلیقه.
        </p>
        <Button variant="primary" size="md">
          <p className="text-[15px] font-light">دیدن همه منو</p>
        </Button>
      </div>

      {/* drinks */}
      <div className="flex">
        {DRINKS.map((drink, index) => (
          <div
            key={drink.name}
            className={`flex flex-col items-center gap-2 px-6 text-center ${
              index > 0 ? "border-primary/20 border-s" : ""
            }`}
          >
            {/* image */}
            <div className="bg-background/50 relative aspect-square w-[150px] overflow-hidden rounded-full">
              <Image
                src={drink.image}
                alt={drink.name}
                fill
                className="object-cover object-[50%_70%]"
              />
            </div>
            {/* name */}
            <h3 className="text-primary text-[16px] font-semibold">
              {drink.name}
            </h3>
            {/* description */}
            <p className="text-primary text-[13px] font-light">
              {drink.description}
            </p>
            {/* price */}
            <span className="text-primary text-[15px] font-semibold">
              {drink.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}