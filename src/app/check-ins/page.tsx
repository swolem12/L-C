import { HeartPulse, MessageSquareText, Sparkles, TimerReset } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { checkIns } from "@/data/dashboard";

export default function CheckInsPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Check-in engine"
          title="Collect client signals and convert them into coach-ready next actions."
          description="Unify fitness, nutrition, leadership, and coffee reflections into one review flow with AI summaries and human approval."
          badge="Realtime coaching loop"
          actions={<Button><Sparkles size={18} aria-hidden="true" />Generate check-ins</Button>}
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Due today" value="68" detail="Across client and cohort plans" icon={TimerReset} />
          <StatCard label="AI summaries" value="54" detail="Ready for coach review" icon={MessageSquareText} />
          <StatCard label="Risk flags" value="9" detail="Low adherence or negative sentiment" icon={HeartPulse} />
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Coach Review Queue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {checkIns.map((checkIn) => (
              <div key={checkIn.id} className="rounded-md border border-espresso-200 bg-cream-100/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">{checkIn.client}</p>
                    <p className="text-sm text-espresso-700">{checkIn.type} check-in</p>
                  </div>
                  <Badge variant={checkIn.sentiment === "Strong" ? "sage" : checkIn.sentiment === "At risk" ? "honey" : "outline"}>{checkIn.sentiment}</Badge>
                </div>
                <p className="mt-3 text-sm leading-6 text-espresso-800">{checkIn.summary}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
