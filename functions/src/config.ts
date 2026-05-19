export const kmsKeyName = process.env.KMS_KEY_NAME ?? "";

export const allowedProviders = ["openai", "anthropic", "groq", "openrouter"] as const;

export const providerEndpoints: Record<(typeof allowedProviders)[number], string> = {
  openai: "https://api.openai.com/v1/responses",
  anthropic: "https://api.anthropic.com/v1/messages",
  groq: "https://api.groq.com/openai/v1/chat/completions",
  openrouter: "https://openrouter.ai/api/v1/chat/completions"
};
