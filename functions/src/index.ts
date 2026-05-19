import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import { z } from "zod";
import { allowedProviders } from "./config.js";
import { requireCoachAuth } from "./auth.js";
import { decryptSecret, encryptSecret, type EncryptedSecret } from "./crypto.js";
import { callAiProvider } from "./providerProxy.js";

initializeApp();

const db = getFirestore();

const saveKeySchema = z.object({
  provider: z.enum(allowedProviders),
  apiKey: z.string().min(20).max(4096),
  model: z.string().min(2).max(100),
  enabledFeatures: z.array(z.string()).max(12).default([]),
  monthlyTokenLimit: z.number().int().positive().max(10000000).default(1000000)
});

const generateSchema = z.object({
  coachId: z.string().min(1).max(128),
  feature: z.enum(["workout", "nutrition", "leadershipReflection", "coffeeReflection", "messaging", "analytics", "checkIn"]),
  prompt: z.string().min(10).max(12000)
});

export const saveCoachApiKey = onCall({ enforceAppCheck: true, cors: true }, async (request) => {
  const actor = requireCoachAuth(request.auth);
  const input = saveKeySchema.parse(request.data);
  const encryptedSecret = await encryptSecret(input.apiKey);

  await db.collection("coach_ai_settings").doc(actor.uid).set(
    {
      coachId: actor.uid,
      organizationId: actor.organizationId,
      provider: input.provider,
      model: input.model,
      enabledFeatures: input.enabledFeatures,
      monthlyTokenLimit: input.monthlyTokenLimit,
      encryptedSecret,
      hasEncryptedKey: true,
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: actor.uid
    },
    { merge: true }
  );

  return { ok: true, provider: input.provider, hasEncryptedKey: true };
});

export const deleteCoachApiKey = onCall({ enforceAppCheck: true, cors: true }, async (request) => {
  const actor = requireCoachAuth(request.auth);

  await db.collection("coach_ai_settings").doc(actor.uid).set(
    {
      encryptedSecret: FieldValue.delete(),
      hasEncryptedKey: false,
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: actor.uid
    },
    { merge: true }
  );

  return { ok: true, hasEncryptedKey: false };
});

export const generateCoachArtifact = onCall({ enforceAppCheck: true, cors: true }, async (request) => {
  const actor = requireCoachAuth(request.auth);
  const input = generateSchema.parse(request.data);

  if (input.coachId !== actor.uid && !["owner", "admin"].includes(actor.role)) {
    throw new HttpsError("permission-denied", "You cannot use another coach's AI provider.");
  }

  const settingsSnapshot = await db.collection("coach_ai_settings").doc(input.coachId).get();
  if (!settingsSnapshot.exists) {
    throw new HttpsError("failed-precondition", "Coach AI settings are not configured.");
  }

  const settings = settingsSnapshot.data() as {
    organizationId: string;
    provider: (typeof allowedProviders)[number];
    model: string;
    enabledFeatures: string[];
    encryptedSecret?: EncryptedSecret;
  };

  if (settings.organizationId !== actor.organizationId) {
    throw new HttpsError("permission-denied", "Organization mismatch.");
  }

  if (!settings.encryptedSecret) {
    throw new HttpsError("failed-precondition", "No encrypted API key is available.");
  }

  if (!settings.enabledFeatures.includes(input.feature)) {
    throw new HttpsError("permission-denied", "This AI feature is disabled for the coach.");
  }

  const apiKey = await decryptSecret(settings.encryptedSecret);
  const result = await callAiProvider(settings.provider, apiKey, input.prompt, settings.model);

  await db.collection("ai_usage_logs").add({
    coachId: input.coachId,
    organizationId: actor.organizationId,
    feature: input.feature,
    provider: settings.provider,
    model: settings.model,
    createdAt: FieldValue.serverTimestamp(),
    requestedBy: actor.uid
  });

  return { ok: true, result };
});
