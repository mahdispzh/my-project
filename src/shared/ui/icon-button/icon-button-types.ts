import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { iconButtonVariants } from "./icon-button-variants";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}