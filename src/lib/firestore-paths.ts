export const collections = {
  users: "users",
  coachAiSettings: "coach_ai_settings",
  aiUsageLogs: "ai_usage_logs",
  coffeePosts: "coffee_posts",
  leadershipPosts: "leadership_posts"
} as const;

export function organizationCollection(organizationId: string, collection: string) {
  return `organizations/${organizationId}/${collection}`;
}

export const organizationCollections = {
  clients: (organizationId: string) => organizationCollection(organizationId, "clients"),
  programs: (organizationId: string) => organizationCollection(organizationId, "programs"),
  workouts: (organizationId: string) => organizationCollection(organizationId, "workouts"),
  nutritionPlans: (organizationId: string) => organizationCollection(organizationId, "nutrition_plans"),
  checkIns: (organizationId: string) => organizationCollection(organizationId, "check_ins"),
  gyms: (organizationId: string) => organizationCollection(organizationId, "gyms"),
  messages: (organizationId: string) => organizationCollection(organizationId, "messages"),
  notificationRules: (organizationId: string) => organizationCollection(organizationId, "notification_rules"),
  subscriptions: (organizationId: string) => organizationCollection(organizationId, "subscriptions")
} as const;
