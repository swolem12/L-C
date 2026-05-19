import { Coffee, MessageCircle, Radio, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { communityPosts } from "@/data/dashboard";

export default function CommunityPage() {
  return (
    <AppShell>
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Coffee culture community"
          title="Create sponsor-safe rituals that deepen leadership engagement."
          description="Blend coffee reflections, mentorship prompts, wellness resets, and cohort conversations into a community experience that feels premium and intentional."
          badge="14.8k weekly reach"
          actions={<Button><Sparkles size={18} aria-hidden="true" />Draft prompt</Button>}
        />
        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Weekly reflections" value="6,420" detail="Across coffee and leadership communities" icon={Coffee} />
          <StatCard label="Mentor replies" value="1,180" detail="High-quality threaded discussion" icon={MessageCircle} />
          <StatCard label="Live sessions" value="22" detail="Hosted for enterprise cohorts this month" icon={Radio} />
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Publishing Calendar</CardTitle>
            <p className="text-sm text-espresso-700">Brand-ready community content with measurable engagement.</p>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-3">
            {communityPosts.map((post) => (
              <article key={post.id} className="rounded-md border border-espresso-200 bg-cream-100/70 p-4">
                <Badge variant="honey">{post.category}</Badge>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{post.title}</h3>
                <p className="mt-4 text-sm text-espresso-700">{post.engagement}</p>
                <p className="mt-2 text-sm font-semibold text-sage-800">{post.sponsorFit}</p>
              </article>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
