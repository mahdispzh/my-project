import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs shadow-card",
  {
    variants: {
      variant: {
        light: "bg-background text-primary",
        accent: "bg-accent text-background",
        primary: "bg-primary text-background",
        muted: "bg-muted text-primary",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);