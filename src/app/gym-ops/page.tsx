import { Building2, CalendarClock, UsersRound, Warehouse } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { gyms } from "@/data/dashboard";

export default function GymOpsPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Gym management"
          title="Operate coaching teams, locations, and hybrid programs from one command surface."
          description="Track location utilization, coach capacity, active clients, launch readiness, and staffing risks for multi-coach organizations."
          badge="Multi-location ops"
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Locations" value="12" detail="Flagship, studio, and enterprise partner sites" icon={Building2} />
          <StatCard label="Coaches" value="84" detail="Across roles, cohorts, and specialties" icon={UsersRound} />
          <StatCard label="Booked sessions" value="1,420" detail="This month across gym and remote delivery" icon={CalendarClock} />
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Location Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {gyms.map((gym) => (
              <div key={gym.id} className="rounded-md border border-espresso-200 bg-cream-100/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-md bg-espresso-900 text-cream-50"><Warehouse size={18} aria-hidden="true" /></div>
                    <div>
                      <p className="font-semibold">{gym.name}</p>
                      <p className="text-sm text-espresso-700">{gym.coaches} coaches / {gym.clients} clients</p>
                    </div>
                  </div>
                  <Badge variant={gym.status === "Healthy" ? "sage" : "honey"}>{gym.status}</Badge>
                </div>
                <div className="mt-4 flex justify-between text-sm"><span>Utilization</span><span>{gym.utilization}%</span></div>
                <Progress value={gym.utilization} className="mt-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
