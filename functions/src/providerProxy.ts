import { HttpsError } from "firebase-functions/v2/https";
import { providerEndpoints, type allowedProviders } from "./config.js";

type Provider = (typeof allowedProviders)[number];

export async function callAiProvider(provider: Provider, apiKey: string, prompt: string, model: string) {
  const endpoint = providerEndpoints[provider];

  const response = await fetch(endpoint, {
    method: "POST",
    headers: buildHeaders(provider, apiKey),
    body: JSON.stringify(buildBody(provider, prompt, model))
  });

  if (!response.ok) {
    throw new HttpsError("failed-precondition", `AI provider request failed with ${response.status}.`);
  }

  return response.json() as Promise<unknown>;
}

function buildHeaders(provider: Provider, apiKey: string) {
  const headers: Record<string, string> = {
    "content-type": "application/json",
    authorization: `Bearer ${apiKey}`
  };

  if (provider === "anthropic") {
    headers["x-api-key"] = apiKey;
    headers["anthropic-version"] = "2023-06-01";
    delete headers.authorization;
  }

  return headers;
}

function buildBody(provider: Provider, prompt: string, model: string) {
  if (provider === "openai") {
    return { model, input: prompt, max_output_tokens: 900 };
  }

  if (provider === "anthropic") {
    return { model, max_tokens: 900, messages: [{ role: "user", content: prompt }] };
  }

  return { model, messages: [{ role: "user", content: prompt }], max_tokens: 900 };
}
