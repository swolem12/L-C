import * as React from "react";
import { cn } from "@/lib/utils";

export function Progress({ value, className }: { value: number; className?: string }) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("h-2.5 overflow-hidden rounded-full bg-espresso-100", className)}>
      <div className="h-full rounded-full bg-copper-600" style={{ width: `${safeValue}%` }} />
    </div>
  );
}
