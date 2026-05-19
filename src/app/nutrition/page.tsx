import { Apple, ClipboardCheck, Sparkles, Utensils } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { nutritionPlans } from "@/data/dashboard";

export default function NutritionPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Nutrition coaching"
          title="Turn goals, adherence, and schedule realities into practical nutrition plans."
          description="Draft meal targets, review macros, approve check-in adjustments, and keep nutrition coaching aligned with fitness and leadership demands."
          badge="AI nutrition generator"
          actions={<Button><Sparkles size={18} aria-hidden="true" />Generate plan</Button>}
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Plans active" value="176" detail="Personalized by goals and work rhythm" icon={Utensils} />
          <StatCard label="Review queue" value="11" detail="Macro and adherence exceptions" icon={ClipboardCheck} />
          <StatCard label="Adherence lift" value="+16%" detail="After lower-friction meal planning" icon={Apple} />
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Nutrition Plan Queue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {nutritionPlans.map((plan) => (
              <div key={plan.id} className="grid gap-3 rounded-md border border-espresso-200 bg-cream-100/70 p-4 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
                <div>
                  <p className="font-semibold">{plan.client}</p>
                  <p className="text-sm text-espresso-700">{plan.target}</p>
                </div>
                <p className="text-sm"><span className="font-semibold">{plan.calories}</span> kcal</p>
                <p className="text-sm"><span className="font-semibold">{plan.protein}g</span> protein</p>
                <Badge variant={plan.status === "Approved" ? "sage" : plan.status === "Needs review" ? "honey" : "outline"}>{plan.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
