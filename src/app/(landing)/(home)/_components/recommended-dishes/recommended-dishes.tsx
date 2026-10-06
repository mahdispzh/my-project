import Image from "next/image";
import { PlusIcon } from "@/src/shared/ui/icons/plus-icon";
import { DISHES } from "./recommended-dishes-constant";

export default function RecommendedDishes() {
  return (
    <div className="flex flex-col gap-6 p-5">
      {/* title */}
      <div className="flex items-center gap-4">
        <div className="bg-primary/30 h-px flex-1" />
        <h2 className="text-primary text-[24px] font-semibold">
          پیشنهاد ما برای امتحان
        </h2>
        <div className="bg-primary/30 h-px flex-1" />
      </div>

      {/* dishes */}
      <div className="grid gap-4 lg:grid-cols-3">
        {DISHES.map((dish) => (
          <div
            key={dish.name}
            className="border-primary/10 flex gap-4 rounded-3xl border p-4"
          >
            {/* image */}
            <div className="relative aspect-square w-[140px] shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-3">
              {/* name and description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-primary text-[18px] font-semibold">
                  {dish.name}
                </h3>
                <p className="text-primary text-[13px] font-light">
                  {dish.description}
                </p>
              </div>

              {/* price and button */}
              <div className="flex items-center justify-between">
                <span className="text-primary text-[15px] font-semibold">
                  {dish.price}
                </span>
                <button
                  type="button"
                  aria-label={`افزودن ${dish.name}`}
                  className="bg-primary text-background flex h-10 w-10 items-center justify-center rounded-xl text-[20px]"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}