import { KeyManagementServiceClient } from "@google-cloud/kms";
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { kmsKeyName } from "./config.js";

const kms = new KeyManagementServiceClient();

export interface EncryptedSecret {
  encryptedDataKey: string;
  iv: string;
  authTag: string;
  ciphertext: string;
  algorithm: "aes-256-gcm";
  kmsKeyName: string;
}

async function encryptDataKey(dataKey: Buffer) {
  if (!kmsKeyName) {
    throw new Error("KMS_KEY_NAME is required to encrypt API keys.");
  }

  const [result] = await kms.encrypt({ name: kmsKeyName, plaintext: dataKey });
  if (!result.ciphertext) {
    throw new Error("Cloud KMS returned no ciphertext.");
  }
  return Buffer.from(result.ciphertext).toString("base64");
}

async function decryptDataKey(encryptedDataKey: string) {
  const [result] = await kms.decrypt({
    name: kmsKeyName,
    ciphertext: Buffer.from(encryptedDataKey, "base64")
  });
  if (!result.plaintext) {
    throw new Error("Cloud KMS returned no plaintext.");
  }
  return Buffer.from(result.plaintext);
}

export async function encryptSecret(secret: string): Promise<EncryptedSecret> {
  const dataKey = randomBytes(32);
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", dataKey, iv);
  const ciphertext = Buffer.concat([cipher.update(secret, "utf8"), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return {
    encryptedDataKey: await encryptDataKey(dataKey),
    iv: iv.toString("base64"),
    authTag: authTag.toString("base64"),
    ciphertext: ciphertext.toString("base64"),
    algorithm: "aes-256-gcm",
    kmsKeyName
  };
}

export async function decryptSecret(secret: EncryptedSecret): Promise<string> {
  if (secret.algorithm !== "aes-256-gcm") {
    throw new Error("Unsupported encryption algorithm.");
  }

  const dataKey = await decryptDataKey(secret.encryptedDataKey);
  const decipher = createDecipheriv("aes-256-gcm", dataKey, Buffer.from(secret.iv, "base64"));
  decipher.setAuthTag(Buffer.from(secret.authTag, "base64"));
  return Buffer.concat([
    decipher.update(Buffer.from(secret.ciphertext, "base64")),
    decipher.final()
  ]).toString("utf8");
}
