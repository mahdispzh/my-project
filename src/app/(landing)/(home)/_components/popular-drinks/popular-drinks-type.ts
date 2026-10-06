import { StaticImageData } from "next/image";

export interface DrinkItem {
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
}

export interface PopularDrinksProps {
  title: string;
  description: string;
  drinks: DrinkItem[];
}