import { HttpsError } from "firebase-functions/v2/https";

export interface AuthContext {
  uid: string;
  organizationId: string;
  role: string;
}

export function requireCoachAuth(auth: { uid: string; token: Record<string, unknown> } | undefined): AuthContext {
  if (!auth) {
    throw new HttpsError("unauthenticated", "Sign in is required.");
  }

  const organizationId = String(auth.token.organizationId ?? "");
  const role = String(auth.token.role ?? "");

  if (!organizationId) {
    throw new HttpsError("permission-denied", "Organization membership is required.");
  }

  if (!["owner", "admin", "coach"].includes(role)) {
    throw new HttpsError("permission-denied", "Coach permissions are required.");
  }

  return { uid: auth.uid, organizationId, role };
}
