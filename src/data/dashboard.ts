import type { CoachAiSettingsSafeView, LeadershipProgram } from "@/types/domain";

export const coachAiSettings: CoachAiSettingsSafeView = {
  coachId: "coach_demo",
  provider: "openai",
  model: "gpt-4.1-mini",
  enabledFeatures: ["workout", "nutrition", "leadershipReflection", "checkIn"],
  monthlyTokenLimit: 1500000,
  usedTokensMonthToDate: 428900,
  hasEncryptedKey: true,
  updatedAt: "2026-05-19T08:00:00.000Z"
};

export const programs: LeadershipProgram[] = [
  {
    id: "strength-leadership",
    title: "Strength Leadership Cohort",
    track: "hybrid",
    clients: 32,
    completionRate: 84,
    nextMilestone: "Executive check-ins due today"
  },
  {
    id: "coffee-reflections",
    title: "Coffee Reflection Circle",
    track: "leadership",
    clients: 18,
    completionRate: 91,
    nextMilestone: "Weekly roast notes publishing"
  },
  {
    id: "performance-nutrition",
    title: "Performance Nutrition Sprint",
    track: "nutrition",
    clients: 24,
    completionRate: 76,
    nextMilestone: "AI macro review awaiting approval"
  }
];

export const metrics = [
  { label: "Active clients", value: "214", delta: "+18 this month" },
  { label: "Coach response time", value: "7m", delta: "42% faster" },
  { label: "AI drafts approved", value: "1,284", delta: "96% acceptance" },
  { label: "Retention forecast", value: "94%", delta: "+6 pts" }
];

export const feedItems = [
  "Generated 12 leadership check-ins for the executive cohort.",
  "Flagged 5 nutrition plans that need protein target review.",
  "Published a coffee reflection prompt for Monday mentoring groups.",
  "Synced Stripe subscription health into enterprise analytics."
];
