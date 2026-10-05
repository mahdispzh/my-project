export interface HeroStats {
    value: string;
    label: string;
}

export interface HeroSectionProps{
    title:string;
    description:string;
    eyebrow:string;
    stats:HeroStats[];
    image:string;
}