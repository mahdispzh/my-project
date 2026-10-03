import { cn } from "../../lib/cn";
import { badgeVariants } from "./badge-variants";
import type { BadgeProps } from "./badge-types";

export function Badge({ variant, className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}