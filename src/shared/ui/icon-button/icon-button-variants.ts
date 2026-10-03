import { cva } from "class-variance-authority";

export const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        muted: "bg-muted text-primary hover:bg-secondary",
        primary: "bg-primary text-background hover:bg-primary-light",
        accent: "bg-accent text-background hover:opacity-90",
      },
      size: {
        sm: "size-8",
        md: "size-10",
        lg: "size-12",
      },
    },
    defaultVariants: {
      variant: "muted",
      size: "md",
    },
  }
);