import { cva } from "class-variance-authority";

export const buttonVariants = cva(

  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background hover:bg-primary-light",
        outline: "border border-border bg-background text-primary hover:bg-muted",
        text: "text-primary hover:text-accent px-0! h-auto!",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-8 text-base",
        lg: "h-16 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);