"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Coffee, KeyRound, Send, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { coachAiSettings, feedItems, metrics, programs } from "@/data/dashboard";

export function Dashboard() {
  const tokenPercent = Math.round(
    (coachAiSettings.usedTokensMonthToDate / coachAiSettings.monthlyTokenLimit) * 100
  );

  return (
    <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <Card className="min-h-32">
              <CardHeader>
                <CardTitle className="text-sm text-espresso-700">{metric.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{metric.value}</p>
                <p className="mt-2 text-sm text-sage-800">{metric.delta}</p>
              </CardContent>
            </Card>
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
              <div className="h-3 overflow-hidden rounded-full bg-espresso-100">
                <div className="h-full rounded-full bg-copper-600" style={{ width: `${tokenPercent}%` }} />
              </div>
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
