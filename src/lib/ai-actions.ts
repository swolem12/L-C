import { httpsCallable } from "firebase/functions";
import { functions } from "@/lib/firebase";
import type { AiFeature, AiProvider } from "@/types/domain";

export interface SaveCoachApiKeyInput {
  provider: AiProvider;
  apiKey: string;
  model: string;
  enabledFeatures: AiFeature[];
  monthlyTokenLimit: number;
}

export async function saveCoachApiKey(input: SaveCoachApiKeyInput) {
  const callable = httpsCallable<SaveCoachApiKeyInput, { ok: boolean; hasEncryptedKey: boolean }>(
    functions,
    "saveCoachApiKey"
  );
  return callable(input);
}

export async function generateCoachArtifact(input: { coachId: string; feature: AiFeature; prompt: string }) {
  const callable = httpsCallable<typeof input, { ok: boolean; result: unknown }>(functions, "generateCoachArtifact");
  return callable(input);
}
