import { DishItem } from "./recommended-dishes-type";
import cheesecakeImage from "./chees-cake.svg";
import chocolateCakeImage from "./chocolate-cake.svg";
import cookieImage from "./cookie.svg";

export const DISHES: DishItem[] = [
  {
    name: "چیزکیک",
    description: "دسر نرم و خامه‌ای با سس میوه‌های فصل",
    price: "۱۶۰,۰۰۰ تومان",
    image: cheesecakeImage,
  },
  {
    name: "کیک شکلاتی",
    description: "شکلاتی، غلیظ و خیلی نرم",
    price: "۱۵۰,۰۰۰ تومان",
    image: chocolateCakeImage,
  },
  {
    name: "کوکی",
    description: "گرم، نرم و پر از تکه‌های شکلات",
    price: "۹۰,۰۰۰ تومان",
    image: cookieImage,
  },
];