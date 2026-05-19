import { Dumbbell, Library, Plus, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { workouts } from "@/data/dashboard";

export default function WorkoutsPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Workout design"
          title="Build, personalize, and approve premium training programs."
          description="Create reusable templates, adapt sessions for travel or equipment limits, and generate coach-reviewed training blocks with AI assistance."
          badge="CoachRx-style program design"
          actions={<Button><Plus size={18} aria-hidden="true" />New workout block</Button>}
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Workout templates" value="128" detail="Strength, mobility, conditioning, and executive resets" icon={Library} />
          <StatCard label="AI blocks drafted" value="340" detail="Coach-reviewed before client delivery" icon={Sparkles} />
          <StatCard label="Completion rate" value="87%" detail="Across active hybrid programs" icon={Dumbbell} />
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Training Library</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-3">
            {workouts.map((workout) => (
              <article key={workout.id} className="rounded-md border border-espresso-200 bg-cream-100/70 p-4">
                <Badge variant="honey">{workout.phase}</Badge>
                <h3 className="mt-4 text-lg font-semibold">{workout.name}</h3>
                <p className="mt-2 text-sm text-espresso-700">{workout.focus}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span>{workout.sessions} sessions</span>
                  <span className="font-semibold text-copper-700">{workout.readiness}% ready</span>
                </div>
                <Progress value={workout.readiness} className="mt-3" />
              </article>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
