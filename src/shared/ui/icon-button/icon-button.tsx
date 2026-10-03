import { cn } from "../../lib/cn";
import { iconButtonVariants } from "./icon-button-variants";
import type { IconButtonProps } from "./icon-button-types";

export function IconButton({
  variant,
  size,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}