import { Activity, Filter, Plus, Search, UsersRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { clients } from "@/data/dashboard";

const statusVariant = {
  active: "sage",
  atRisk: "honey",
  paused: "outline",
  lead: "copper"
} as const;

export default function ClientsPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Client intelligence"
          title="Coach every client with timely context, not scattered notes."
          description="Segment clients by adherence, organizational account, AI risk signals, and check-in freshness so coaches know where to spend attention first."
          badge="214 active clients"
          actions={
            <>
              <Button variant="secondary">
                <Filter size={18} aria-hidden="true" />
                Segment
              </Button>
              <Button>
                <Plus size={18} aria-hidden="true" />
                Add client
              </Button>
            </>
          }
        />

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Adherence average" value="84%" detail="Across fitness, nutrition, and reflection tracks" icon={Activity} />
          <StatCard label="At-risk clients" value="19" detail="Down 7 after AI-assisted check-ins" icon={UsersRound} />
          <StatCard label="Check-ins today" value="68" detail="33 already approved by coaches" icon={Search} />
        </section>

        <Card>
          <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Client Portfolio</CardTitle>
              <p className="text-sm text-espresso-700">Operational view for coaches and enterprise account leaders.</p>
            </div>
            <div className="flex h-10 items-center gap-2 rounded-md border border-espresso-200 bg-cream-50 px-3 text-sm text-espresso-700">
              <Search size={16} aria-hidden="true" />
              Search clients
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {clients.map((client) => (
              <div key={client.id} className="grid gap-4 rounded-md border border-espresso-200 bg-cream-100/70 p-4 lg:grid-cols-[1fr_0.8fr_0.5fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{client.name}</p>
                    <Badge variant={statusVariant[client.status]}>{client.status}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-espresso-700">{client.organization}</p>
                  <p className="mt-2 text-sm leading-6 text-espresso-800">{client.goal}</p>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Adherence</span>
                    <span className="font-semibold">{client.adherence}%</span>
                  </div>
                  <Progress value={client.adherence} />
                </div>
                <div className="text-sm lg:text-right">
                  <p className="font-semibold">{client.coach}</p>
                  <p className="mt-1 text-espresso-700">{client.lastCheckIn}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
