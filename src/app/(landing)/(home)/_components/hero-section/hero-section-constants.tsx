import {HeroSectionProps} from "./hero-section-type" 
import heroImage from "./hero-section-image.svg";
export const HeroSectionData : HeroSectionProps = {
  title: "هر فنجان، ترکیبی از عطر، طعم و کیفیت",
  description:
    "قهوه‌ای باکیفیت، خوش‌عطر و تازه‌دم؛\n در کافه ریشه تلاش می‌کنیم هر فنجان دقیقاً همان چیزی باشد که از یک قهوه خوب انتظار دارید.",
  eyebrow: "یک فنجان خوب، حال خوب",
  stats: [
    {
      value: "+۵۰۰۰ فنجان",
      label: "سرو شده در هر ماه",
    },
    {
      value: "+۲۰ نوع",
      label: "قهوه و دمنوش متنوع",
    },
    // {
    //   value: "+۳ سال",
    //   label: "تجربهٔ قهوه‌سازی",
    // },
  ],
  image: heroImage.src,
};
