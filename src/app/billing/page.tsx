import { CreditCard, DollarSign, FileCheck2, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { billingAccounts } from "@/data/dashboard";

export default function BillingPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Stripe billing"
          title="Manage subscriptions, seats, sponsors, and enterprise accounts."
          description="Give finance and operations a calm view of plan health, revenue, trial conversion, and partner account status."
          badge="Stripe ready"
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Monthly revenue" value="$24.9k" detail="From active subscriptions and enterprise pilots" icon={DollarSign} />
          <StatCard label="Paid seats" value="558" detail="Across coaches, mentors, and organizational clients" icon={CreditCard} />
          <StatCard label="Compliance status" value="Good" detail="Invoices, terms, and account ownership aligned" icon={ShieldCheck} />
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Account Ledger</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {billingAccounts.map((account) => (
              <div key={account.id} className="grid gap-3 rounded-md border border-espresso-200 bg-cream-100/70 p-4 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
                <div>
                  <p className="font-semibold">{account.name}</p>
                  <p className="text-sm text-espresso-700">{account.plan} plan</p>
                </div>
                <p className="text-sm"><span className="font-semibold">{account.seats}</span> seats</p>
                <p className="font-semibold text-copper-700">{account.monthlyRevenue}</p>
                <Badge variant={account.status === "Current" ? "sage" : "honey"}><FileCheck2 size={14} aria-hidden="true" />{account.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
