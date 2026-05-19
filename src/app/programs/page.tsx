import { CalendarDays, Dumbbell, Flame, Plus, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { programs } from "@/data/dashboard";

export default function ProgramsPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Program studio"
          title="Build leadership and wellness programs that feel premium at scale."
          description="Plan cohorts, assign coaches, generate draft workouts and reflections, then publish structured experiences across teams and communities."
          badge="3 flagship tracks"
          actions={
            <>
              <Button variant="secondary">
                <Sparkles size={18} aria-hidden="true" />
                AI blueprint
              </Button>
              <Button>
                <Plus size={18} aria-hidden="true" />
                New program
              </Button>
            </>
          }
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Published programs" value="38" detail="Across fitness, nutrition, leadership, and hybrid tracks" icon={Dumbbell} />
          <StatCard label="Completion lift" value="+21%" detail="After AI sequencing and coach approvals" icon={Flame} />
          <StatCard label="Milestones due" value="14" detail="Cohort events and sponsor reviews this week" icon={CalendarDays} />
        </section>
        <section className="grid gap-5 lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.id}>
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="honey">{program.track}</Badge>
                  <span className="text-sm font-semibold text-copper-700">{program.completionRate}%</span>
                </div>
                <CardTitle className="mt-3">{program.title}</CardTitle>
                <p className="text-sm leading-6 text-espresso-700">{program.nextMilestone}</p>
              </CardHeader>
              <CardContent>
                <Progress value={program.completionRate} />
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-md bg-cream-100 p-3">
                    <p className="text-espresso-600">Clients</p>
                    <p className="mt-1 text-xl font-semibold">{program.clients}</p>
                  </div>
                  <div className="rounded-md bg-espresso-900 p-3 text-cream-50">
                    <p className="text-cream-200">Coach tasks</p>
                    <p className="mt-1 text-xl font-semibold">7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </AppShell>
  );
}
