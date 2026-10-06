import { DrinkItem } from "./popular-drinks-type";
import coffeeImage from "./coffee.svg";
import matchaImage from "./matcha.svg";


export const DRINKS: DrinkItem[] = [
  {
    name: "لاته",
    description: "نرم و خامه‌ای",
    price: "۱۲۰,۰۰۰ تومان",
    image: coffeeImage,
  },
  {
    name: "ماچا لاته",
    description: "هماهنگی سبز",
    price: "۱۳۵,۰۰۰ تومان",
    image: matchaImage, 
  },
  {
    name: "کاپوچینو",
    description: "غلیظ و خوش‌عطر",
    price: "۱۲۵,۰۰۰ تومان",
    image: coffeeImage,
  },
];