export type Role = "owner" | "admin" | "coach" | "client" | "mentor";

export type AiProvider = "openai" | "anthropic" | "groq" | "openrouter";

export type AiFeature =
  | "workout"
  | "nutrition"
  | "leadershipReflection"
  | "coffeeReflection"
  | "messaging"
  | "analytics"
  | "checkIn";

export type ClientStatus = "active" | "atRisk" | "paused" | "lead";

export interface CoachAiSettingsSafeView {
  coachId: string;
  provider: AiProvider;
  model: string;
  enabledFeatures: AiFeature[];
  monthlyTokenLimit: number;
  usedTokensMonthToDate: number;
  hasEncryptedKey: boolean;
  updatedAt: string;
}

export interface LeadershipProgram {
  id: string;
  title: string;
  track: "fitness" | "leadership" | "nutrition" | "hybrid";
  clients: number;
  completionRate: number;
  nextMilestone: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  organization: string;
  status: ClientStatus;
  goal: string;
  adherence: number;
  lastCheckIn: string;
  coach: string;
}

export interface MessageThread {
  id: string;
  name: string;
  channel: string;
  lastMessage: string;
  priority: "high" | "medium" | "low";
  unread: number;
}

export interface CommunityPost {
  id: string;
  title: string;
  category: "Coffee" | "Leadership" | "Fitness" | "Mentorship";
  engagement: string;
  sponsorFit: string;
}

export interface BillingAccount {
  id: string;
  name: string;
  plan: string;
  seats: number;
  monthlyRevenue: string;
  status: "Current" | "Review" | "Trial";
}

export interface WorkoutTemplate {
  id: string;
  name: string;
  phase: string;
  focus: string;
  sessions: number;
  readiness: number;
}

export interface NutritionPlan {
  id: string;
  client: string;
  target: string;
  calories: number;
  protein: number;
  status: "Draft" | "Approved" | "Needs review";
}

export interface CheckInItem {
  id: string;
  client: string;
  type: "Fitness" | "Nutrition" | "Leadership" | "Coffee";
  sentiment: "Strong" | "Neutral" | "At risk";
  summary: string;
}

export interface GymLocation {
  id: string;
  name: string;
  coaches: number;
  clients: number;
  utilization: number;
  status: "Healthy" | "Needs staffing" | "Launch";
}

export interface NotificationRule {
  id: string;
  name: string;
  channel: "Push" | "Email" | "SMS" | "In-app";
  trigger: string;
  enabled: boolean;
}
