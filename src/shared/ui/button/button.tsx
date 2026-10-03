import { buttonVariants } from "./button-variants";
import type { ButtonProps } from "./button-types";

export function Button({
  variant,
  size,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}