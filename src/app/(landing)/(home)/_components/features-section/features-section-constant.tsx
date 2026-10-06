import { CoffeeIcon } from "@/src/shared/ui/icons/coffee-icon";
import { FlameIcon } from "@/src/shared/ui/icons/flame-icon";
import { MedalIcon } from "@/src/shared/ui/icons/medal-icon";
import { ClockIcon } from "@/src/shared/ui/icons/clock-icon";
import { FeatureItem } from "./features-section-type";

export const FEATURES: FeatureItem[] = [
  {
    icon: <CoffeeIcon />,
    title: "دمنوش و نوشیدنی متنوع",
    description: "از قهوه تا چای و دمنوش، برای هر سلیقه",
  },
  {
    icon: <FlameIcon />,
    title: "همیشه تازه و داغ",
    description: "هر فنجان سر موقع و تازه آماده می‌شه",
  },
  {
    icon: <MedalIcon />,
    title: "طعم مطمئن",
    description: "کیفیتی که هر بار همون‌قدر خوبه",
  },
  {
    icon: <ClockIcon />,
    title: "سرو سریع",
    description: "بدون انتظار طولانی، با خیال راحت",
  },
];