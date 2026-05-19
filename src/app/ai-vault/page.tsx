import { BrainCircuit, KeyRound, LockKeyhole, RefreshCcw, ShieldCheck, Zap } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { aiWorkflows, coachAiSettings } from "@/data/dashboard";

export default function AiVaultPage() {
  const usage = Math.round((coachAiSettings.usedTokensMonthToDate / coachAiSettings.monthlyTokenLimit) * 100);

  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Encrypted AI operations"
          title="Let every coach bring their own AI provider without exposing secrets."
          description="Provider keys stay out of clients, encrypted with AES-256-GCM, wrapped by Cloud KMS, and decrypted only inside Firebase Functions."
          badge="KMS enforced"
          actions={<Button><KeyRound size={18} aria-hidden="true" />Rotate provider key</Button>}
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Configured providers" value="4" detail="OpenAI, Anthropic, Groq, and OpenRouter" icon={BrainCircuit} />
          <StatCard label="Key exposure" value="0" detail="No plaintext keys stored or sent to clients" icon={LockKeyhole} />
          <StatCard label="Avg AI latency" value="1.5s" detail="Across approved generation workflows" icon={Zap} />
        </section>
        <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <CardHeader>
              <CardTitle>Coach Provider Settings</CardTitle>
              <p className="text-sm text-espresso-700">Safe view only. Secret material never renders here.</p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-md bg-sage-100 p-4 text-sage-950">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={19} aria-hidden="true" />
                  <p className="font-semibold">Encrypted key active</p>
                </div>
                <p className="mt-2 text-sm">Provider: {coachAiSettings.provider}</p>
                <p className="text-sm">Model: {coachAiSettings.model}</p>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Token limit used</span>
                  <span className="font-semibold">{usage}%</span>
                </div>
                <Progress value={usage} />
              </div>
              <Button variant="outline" className="w-full"><RefreshCcw size={17} aria-hidden="true" />Validate connection</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Workflow Control Plane</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {aiWorkflows.map((workflow) => (
                <div key={workflow.name} className="grid gap-3 rounded-md border border-espresso-200 bg-cream-100/70 p-4 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
                  <div>
                    <p className="font-semibold">{workflow.name}</p>
                    <p className="text-sm text-espresso-700">Provider: {workflow.provider}</p>
                  </div>
                  <Badge variant={workflow.status === "Active" ? "sage" : "honey"}>{workflow.status}</Badge>
                  <p className="text-sm text-espresso-700">{workflow.latency}</p>
                  <p className="text-sm font-semibold text-copper-700">{workflow.approvals}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}
