import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-espresso-900 text-cream-50",
  copper: "bg-copper-600 text-cream-50",
  sage: "bg-sage-100 text-sage-950",
  honey: "bg-honey-100 text-espresso-950",
  outline: "border border-espresso-200 bg-cream-50 text-espresso-700"
};

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof variants }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-md px-2.5 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
