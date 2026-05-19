import { Bell, Building2, LockKeyhole, Settings, ShieldCheck, UsersRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const settingsGroups = [
  { title: "Organization profile", detail: "Brand, regions, billing owner, and sponsor metadata", icon: Building2, badge: "Enterprise" },
  { title: "Roles and permissions", detail: "Owner, admin, coach, mentor, and client access boundaries", icon: UsersRound, badge: "RBAC" },
  { title: "Security controls", detail: "App Check, KMS key names, audit logs, and API key policies", icon: LockKeyhole, badge: "Required" },
  { title: "Notifications", detail: "Push, email, check-in reminders, and escalation policies", icon: Bell, badge: "Realtime" }
];

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Platform administration"
          title="Keep enterprise configuration clear, secure, and easy to operate."
          description="Manage organization settings, coach access, AI security controls, notifications, and deployment readiness from one admin surface."
          badge="Production controls"
        />
        <section className="grid gap-5 md:grid-cols-2">
          {settingsGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-md bg-espresso-900 text-cream-50">
                    <group.icon size={20} aria-hidden="true" />
                  </div>
                  <Badge variant="honey">{group.badge}</Badge>
                </div>
                <CardTitle className="mt-4">{group.title}</CardTitle>
                <p className="text-sm leading-6 text-espresso-700">{group.detail}</p>
              </CardHeader>
            </Card>
          ))}
        </section>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} aria-hidden="true" />
              <CardTitle>Production Readiness</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {["Firebase App Check", "Cloud KMS key", "Firestore rules", "Stripe webhooks", "Push certificates", "CI build gates"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md bg-sage-100 p-3 text-sm font-semibold text-sage-950">
                <Settings size={16} aria-hidden="true" />
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}