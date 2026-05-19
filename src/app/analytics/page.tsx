import { BarChart3, LineChart, Target, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { analyticsSeries } from "@/data/dashboard";

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Business intelligence"
          title="Tie coaching outcomes to retention, revenue, and sponsor value."
          description="Track wellness adherence, leadership engagement, AI usage, community health, and enterprise account performance in one executive-ready view."
          badge="Executive dashboard"
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Retention forecast" value="94%" detail="Weighted by adherence and message response" icon={TrendingUp} />
          <StatCard label="Sponsor alignment" value="4.8/5" detail="Brand safety, engagement, and audience fit" icon={Target} />
          <StatCard label="AI time saved" value="312h" detail="Coach workflow hours recovered this month" icon={BarChart3} />
        </section>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <LineChart size={20} aria-hidden="true" />
              <CardTitle>Engagement Quality Index</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex h-80 items-end gap-3 rounded-lg bg-espresso-950 p-5">
              {analyticsSeries.map((value, index) => (
                <div key={`${value}-${index}`} className="flex flex-1 flex-col items-center gap-3">
                  <div className="w-full rounded-t-md bg-copper-600" style={{ height: `${value * 2.45}px` }} />
                  <span className="text-xs font-semibold text-cream-200">W{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="sage">Client adherence</Badge>
              <Badge variant="honey">Community engagement</Badge>
              <Badge variant="outline">Sponsor readiness</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
