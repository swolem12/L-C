"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Activity,
  BrainCircuit,
  CalendarClock,
  Coffee,
  KeyRound,
  LineChart,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { coachAiSettings, feedItems, metrics, programs } from "@/data/dashboard";

export function Dashboard() {
  const tokenPercent = Math.round(
    (coachAiSettings.usedTokensMonthToDate / coachAiSettings.monthlyTokenLimit) * 100
  );

  return (
    <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Executive operations"
        title="A calm command center for leadership, coaching, coffee culture, and enterprise wellness."
        description="Monitor high-value accounts, approve AI-assisted coaching work, coordinate communities, and keep sponsor-ready programs moving from one polished workspace."
        badge="Brand partner ready"
        actions={
          <>
            <Button variant="secondary">
              <CalendarClock size={18} aria-hidden="true" />
              Schedule cohort
            </Button>
            <Button>
              <Sparkles size={18} aria-hidden="true" />
              Generate brief
            </Button>
          </>
        }
      />

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="overflow-hidden">
          <div className="grid min-h-[360px] md:grid-cols-[0.95fr_1.05fr]">
            <div className="p-6 sm:p-7">
              <Badge variant="honey">Sponsored program view</Badge>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-espresso-950">
                Coffeehouse leadership programs with operational rigor.
              </h3>
              <p className="mt-4 text-sm leading-6 text-espresso-700">
                L&amp;C pairs executive coaching, fitness adherence, nutrition support, and community rituals in a format enterprise partners can sponsor with confidence.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-md bg-espresso-900 p-4 text-cream-50">
                  <p className="text-2xl font-semibold">18</p>
                  <p className="mt-1 text-xs text-cream-200">Active cohorts</p>
                </div>
                <div className="rounded-md bg-sage-100 p-4 text-sage-950">
                  <p className="text-2xl font-semibold">4.8</p>
                  <p className="mt-1 text-xs">Sponsor score</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-72 border-t border-espresso-200 md:border-l md:border-t-0">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                alt="Premium coffeehouse workspace with people gathering over coffee"
                fill
                sizes="(min-width: 1280px) 36vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/55 via-transparent to-transparent" />
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Operating Rhythm</CardTitle>
            <p className="text-sm text-espresso-700">What needs approval, escalation, or sponsor visibility.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              ["AI check-ins", "42 drafts ready", 88],
              ["Client risk review", "9 accounts need attention", 64],
              ["Community publishing", "3 sponsor-safe posts queued", 74],
              ["Billing health", "97% accounts current", 97]
            ].map(([label, detail, value]) => (
              <div key={label} className="rounded-md border border-espresso-200 bg-cream-100/70 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-espresso-700">{detail}</p>
                  </div>
                  <span className="text-sm font-semibold text-copper-700">{value}%</span>
                </div>
                <Progress value={Number(value)} />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <StatCard
              label={metric.label}
              value={metric.value}
              detail={metric.delta}
              icon={[UsersRound, Activity, BrainCircuit, LineChart][index]}
            />
          </motion.div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Program Builder</CardTitle>
              <p className="text-sm text-espresso-700">Cohorts, coaching tracks, and AI-assisted next actions.</p>
            </div>
            <Button>
              <Sparkles size={18} aria-hidden="true" />
              Generate plan
            </Button>
          </CardHeader>
          <CardContent className="grid gap-3">
            {programs.map((program) => (
              <div
                key={program.id}
                className="grid gap-4 rounded-md border border-espresso-200 bg-cream-50 p-4 md:grid-cols-[1fr_auto] md:items-center"
              >
                <div>
                  <p className="font-semibold">{program.title}</p>
                  <p className="mt-1 text-sm text-espresso-700">{program.nextMilestone}</p>
                  <div className="mt-3 max-w-sm">
                    <Progress value={program.completionRate} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm md:min-w-56">
                  <div>
                    <p className="text-espresso-600">Clients</p>
                    <p className="font-semibold">{program.clients}</p>
                  </div>
                  <div>
                    <p className="text-espresso-600">Complete</p>
                    <p className="font-semibold">{program.completionRate}%</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Provider Vault</CardTitle>
            <p className="text-sm text-espresso-700">Keys are stored encrypted and only decrypted inside Firebase Functions.</p>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center gap-3 rounded-md bg-sage-100 p-4 text-sage-950">
              <ShieldCheck size={22} aria-hidden="true" />
              <div>
                <p className="font-semibold">Encrypted key active</p>
                <p className="text-sm">Provider: {coachAiSettings.provider}</p>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Monthly token usage</span>
                <span>{tokenPercent}%</span>
              </div>
              <Progress value={tokenPercent} className="h-3" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline">
                <KeyRound size={17} aria-hidden="true" />
                Rotate key
              </Button>
              <Button variant="outline">
                <BrainCircuit size={17} aria-hidden="true" />
                Models
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Realtime Coaching Feed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {feedItems.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-md border border-espresso-200 bg-white p-4">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-cream-200 text-copper-700">
                  {index % 2 === 0 ? <Activity size={18} aria-hidden="true" /> : <Coffee size={18} aria-hidden="true" />}
                </div>
                <p className="text-sm leading-6 text-espresso-800">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Messaging System</CardTitle>
            <p className="text-sm text-espresso-700">Coach-approved AI drafts for clients and teams.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md bg-espresso-900 p-4 text-cream-50">
              <p className="text-sm leading-6">
                Draft a calm, specific check-in for clients who missed two workouts and have nutrition adherence below 70%.
              </p>
            </div>
            <Button className="w-full">
              <Send size={17} aria-hidden="true" />
              Queue draft
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
