import { ArmchairIcon } from "@/src/shared/ui/icons/armchair-icon";
import { UsersGroupIcon } from "@/src/shared/ui/icons/users-group-icon";
import { CalendarCheckIcon } from "@/src/shared/ui/icons/calendar-check-icon";
import { ReservationFeature } from "./reservation-section-type";


export const RESERVATION_FEATURES: ReservationFeature[] = [
  {
    icon: <ArmchairIcon />,
    title: "فضای دنج و آرام",
  },
  {
    icon: <UsersGroupIcon />,
    title: "مناسب جمع‌های دوستانه",
  },
  {
    icon: <CalendarCheckIcon />,
    title: "رزرو آسان و سریع",
  },
];