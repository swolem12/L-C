import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  detail,
  icon: Icon
}: {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="min-h-36 overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-espresso-700">{label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-espresso-950">{value}</p>
          </div>
          <div className="flex size-11 items-center justify-center rounded-md bg-espresso-900 text-cream-50">
            <Icon size={20} aria-hidden="true" />
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-sage-800">{detail}</p>
      </CardContent>
    </Card>
  );
}
