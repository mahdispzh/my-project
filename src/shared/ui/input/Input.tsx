import { cn } from "../../lib/cn";
import type { InputProps } from "./input-types";

export function Input({ action, className, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "flex h-14 items-center gap-3 rounded-full bg-white p-2",
        className
      )}
    >
      <input
        className="h-full flex-1 bg-transparent px-5 text-primary outline-none placeholder:text-border"
        {...props}
      />
      {action}
    </div>
  );
}