import { Bot, MessageSquare, Send, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { messageThreads } from "@/data/dashboard";

export default function MessagesPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Realtime communication"
          title="Message clients, coaches, and communities with human approval built in."
          description="AI can draft check-ins and summaries, but coaches keep control of tone, timing, and sensitive client communication."
          badge="12 drafts pending"
          actions={<Button><Send size={18} aria-hidden="true" />Compose</Button>}
        />
        <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Priority Inbox</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {messageThreads.map((thread) => (
                <div key={thread.id} className="rounded-md border border-espresso-200 bg-cream-100/70 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">{thread.name}</p>
                      <p className="mt-1 text-sm text-espresso-700">{thread.channel}</p>
                    </div>
                    <Badge variant={thread.priority === "high" ? "copper" : thread.priority === "medium" ? "honey" : "sage"}>{thread.unread}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-espresso-800">{thread.lastMessage}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Coach-Approved Draft</CardTitle>
              <p className="text-sm text-espresso-700">Prepared for Performance Sprint clients with low adherence.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-espresso-950 p-5 text-cream-50">
                <div className="mb-4 flex items-center gap-2 text-honey-100">
                  <Bot size={18} aria-hidden="true" />
                  <p className="text-sm font-semibold">AI draft</p>
                </div>
                <p className="text-sm leading-7 text-cream-100">
                  I noticed this week has been heavy and your training rhythm shifted. Let&apos;s make the next step smaller: one strength session, one protein-forward breakfast, and a quick leadership reflection after your first coffee tomorrow.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <Button variant="outline"><MessageSquare size={17} aria-hidden="true" />Edit</Button>
                <Button variant="secondary"><ShieldCheck size={17} aria-hidden="true" />Approve</Button>
                <Button><Send size={17} aria-hidden="true" />Send</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}
