import { StaticImageData } from "next/image";

export interface DishItem {
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
}