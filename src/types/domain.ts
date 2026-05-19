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
