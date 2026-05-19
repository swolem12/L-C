import type {
  BillingAccount,
  CheckInItem,
  ClientProfile,
  CoachAiSettingsSafeView,
  CommunityPost,
  GymLocation,
  LeadershipProgram,
  MessageThread,
  NotificationRule,
  NutritionPlan,
  WorkoutTemplate
} from "@/types/domain";

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

export const clients: ClientProfile[] = [
  {
    id: "client-001",
    name: "Maya Robinson",
    organization: "Northstar Retail Leadership",
    status: "active",
    goal: "Executive stamina and public leadership",
    adherence: 92,
    lastCheckIn: "12 minutes ago",
    coach: "Avery Stone"
  },
  {
    id: "client-002",
    name: "Theo Hampton",
    organization: "Summit Strength Club",
    status: "atRisk",
    goal: "Nutrition consistency and schedule recovery",
    adherence: 61,
    lastCheckIn: "2 days ago",
    coach: "Jordan Vale"
  },
  {
    id: "client-003",
    name: "Iris Chen",
    organization: "Harbor Mentorship Network",
    status: "active",
    goal: "Leadership reflection cadence",
    adherence: 88,
    lastCheckIn: "41 minutes ago",
    coach: "Morgan Hale"
  },
  {
    id: "client-004",
    name: "Samuel Ortiz",
    organization: "Copperline Coffee Ops",
    status: "paused",
    goal: "Return-to-training plan",
    adherence: 47,
    lastCheckIn: "1 week ago",
    coach: "Avery Stone"
  }
];

export const messageThreads: MessageThread[] = [
  {
    id: "thread-1",
    name: "Enterprise coach leads",
    channel: "Leadership Cohort A",
    lastMessage: "Approve AI-generated check-ins before 3 PM.",
    priority: "high",
    unread: 8
  },
  {
    id: "thread-2",
    name: "Nutrition review queue",
    channel: "Performance Sprint",
    lastMessage: "Five plans need macro target confirmation.",
    priority: "medium",
    unread: 3
  },
  {
    id: "thread-3",
    name: "Coffee circle mentors",
    channel: "Monday Reflection",
    lastMessage: "New prompt draft is ready for sponsor approval.",
    priority: "low",
    unread: 1
  }
];

export const communityPosts: CommunityPost[] = [
  {
    id: "post-1",
    title: "Morning roast reflection: steady leadership under pressure",
    category: "Coffee",
    engagement: "14.8k views",
    sponsorFit: "Brand-safe community feature"
  },
  {
    id: "post-2",
    title: "Mentor roundtable: coaching managers through change",
    category: "Leadership",
    engagement: "342 replies",
    sponsorFit: "Executive audience alignment"
  },
  {
    id: "post-3",
    title: "Strength week: five-minute resets for retail teams",
    category: "Fitness",
    engagement: "71% completion",
    sponsorFit: "Operations wellness program"
  }
];

export const billingAccounts: BillingAccount[] = [
  {
    id: "acct-1",
    name: "Copperline Coffee Ops",
    plan: "Enterprise",
    seats: 420,
    monthlyRevenue: "$18,900",
    status: "Current"
  },
  {
    id: "acct-2",
    name: "Summit Strength Club",
    plan: "Growth",
    seats: 86,
    monthlyRevenue: "$4,120",
    status: "Current"
  },
  {
    id: "acct-3",
    name: "Harbor Mentorship Network",
    plan: "Pilot",
    seats: 52,
    monthlyRevenue: "$1,840",
    status: "Trial"
  }
];

export const analyticsSeries = [72, 78, 81, 79, 86, 88, 92, 94];

export const aiWorkflows = [
  { name: "Workout generator", provider: "OpenAI", status: "Active", latency: "1.2s", approvals: "98%" },
  { name: "Leadership reflection", provider: "Anthropic", status: "Active", latency: "1.8s", approvals: "95%" },
  { name: "Coffee reflection", provider: "OpenRouter", status: "Review", latency: "2.1s", approvals: "91%" },
  { name: "Nutrition planner", provider: "Groq", status: "Active", latency: "0.9s", approvals: "96%" }
];

export const workouts: WorkoutTemplate[] = [
  { id: "w-1", name: "Executive Strength Base", phase: "Foundation", focus: "Full-body strength", sessions: 24, readiness: 92 },
  { id: "w-2", name: "Travel Week Reset", phase: "Deload", focus: "Mobility and hotel gym", sessions: 8, readiness: 86 },
  { id: "w-3", name: "Retail Leader Conditioning", phase: "Capacity", focus: "Energy systems", sessions: 18, readiness: 78 }
];

export const nutritionPlans: NutritionPlan[] = [
  { id: "n-1", client: "Maya Robinson", target: "Performance maintenance", calories: 2250, protein: 165, status: "Approved" },
  { id: "n-2", client: "Theo Hampton", target: "Adherence recovery", calories: 2480, protein: 180, status: "Needs review" },
  { id: "n-3", client: "Iris Chen", target: "High-travel stability", calories: 1980, protein: 142, status: "Draft" }
];

export const checkIns: CheckInItem[] = [
  { id: "c-1", client: "Maya Robinson", type: "Leadership", sentiment: "Strong", summary: "Reflection cadence is consistent and energy is up after morning training." },
  { id: "c-2", client: "Theo Hampton", type: "Nutrition", sentiment: "At risk", summary: "Missed two planned meals and asked for a lower-friction reset." },
  { id: "c-3", client: "Samuel Ortiz", type: "Fitness", sentiment: "Neutral", summary: "Ready to resume with two low-impact sessions and a coffee reflection." }
];

export const gyms: GymLocation[] = [
  { id: "g-1", name: "Copperline Flagship", coaches: 18, clients: 420, utilization: 88, status: "Healthy" },
  { id: "g-2", name: "Summit Strength East", coaches: 6, clients: 112, utilization: 74, status: "Needs staffing" },
  { id: "g-3", name: "Harbor Pilot Studio", coaches: 4, clients: 52, utilization: 61, status: "Launch" }
];

export const notificationRules: NotificationRule[] = [
  { id: "r-1", name: "Missed workout recovery", channel: "Push", trigger: "2 missed sessions", enabled: true },
  { id: "r-2", name: "Nutrition adherence review", channel: "Email", trigger: "Below 70% for 7 days", enabled: true },
  { id: "r-3", name: "Leadership reflection reminder", channel: "In-app", trigger: "Monday morning", enabled: true },
  { id: "r-4", name: "Sponsor report ready", channel: "Email", trigger: "Monthly close", enabled: false }
];
