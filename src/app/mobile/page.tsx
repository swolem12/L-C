import { Bell, CheckCircle2, Smartphone, Wifi } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notificationRules } from "@/data/dashboard";

export default function MobilePage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Mobile client experience"
          title="Give clients a polished app-like coaching experience wherever they are."
          description="Support push notifications, offline-friendly flows, quick check-ins, mobile program review, and client messaging for busy leaders."
          badge="Mobile-first UX"
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Push reach" value="91%" detail="Clients with active notification permissions" icon={Bell} />
          <StatCard label="Mobile check-ins" value="74%" detail="Completed from phones this week" icon={Smartphone} />
          <StatCard label="Realtime sync" value="Live" detail="Firestore-backed coaching state" icon={Wifi} />
        </section>
        <section className="grid gap-6 xl:grid-cols-[0.65fr_1.35fr]">
          <Card className="bg-espresso-950 text-cream-50">
            <CardHeader>
              <CardTitle className="text-cream-50">Client Today View</CardTitle>
              <p className="text-sm text-cream-200">Workout, meal target, reflection prompt, and coach message in one mobile rhythm.</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Strength session", "Protein target", "Coffee reflection", "Coach reply"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md bg-cream-50/10 p-3 text-sm"><CheckCircle2 size={16} aria-hidden="true" />{item}</div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notification Rules</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              {notificationRules.map((rule) => (
                <div key={rule.id} className="rounded-md border border-espresso-200 bg-cream-100/70 p-4">
                  <div className="flex items-center justify-between gap-3"><p className="font-semibold">{rule.name}</p><Badge variant={rule.enabled ? "sage" : "outline"}>{rule.enabled ? "On" : "Off"}</Badge></div>
                  <p className="mt-2 text-sm text-espresso-700">{rule.channel} / {rule.trigger}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}