# L&C - Leadership & Coffee

L&C is a premium AI-powered coaching, mentorship, leadership, and coffee culture platform designed for modern coaches, gyms, leadership organizations, and mentorship communities.

The platform combines:
- Fitness coaching
- Nutrition systems
- Leadership development
- Coffee culture
- AI-assisted coaching
- Business operations
- Community ecosystems
- Realtime communication
- Enterprise scaling

The system is built around:
- Next.js 15
- React 19
- TypeScript
- TailwindCSS
- Firebase
- Firestore
- Firebase Hosting
- Firebase Functions
- OpenAI integrations
- Multi-provider AI architecture

L&C allows every coach or organization to connect their own AI provider API key securely through encrypted backend infrastructure.

Supported providers:
- OpenAI
- Anthropic
- Groq
- OpenRouter

The platform is designed to feel:
- Warm
- Premium
- Rustic-modern
- Human-centered
- Executive
- Calm
- Coffeehouse-inspired

## Repository status

This repository now contains the production-oriented foundation for the L&C platform:

- Next.js 15 app router application with React 19 and strict TypeScript
- TailwindCSS design system with ShadCN-style primitives
- Firebase Hosting, Firestore, Storage, and Functions configuration
- Cloud KMS + AES-256-GCM API key encryption inside Firebase Functions
- Multi-provider AI proxy foundation for OpenAI, Anthropic, Groq, and OpenRouter
- Firestore rules that prevent client writes to encrypted AI key records
- GitHub Actions CI for app and Functions builds

## Local development

```bash
npm install
npm install --prefix functions
npm run dev
```

Copy `.env.example` to `.env.local` and fill in the public Firebase web app values. Never place AI provider API keys in frontend environment variables.

## Security model

Coach AI keys are submitted only to callable Firebase Functions with App Check enabled. Functions encrypt keys with AES-256-GCM, wrap data keys with Google Cloud KMS, and store only ciphertext in Firestore. Decryption happens only during server-side AI provider calls.

Set `KMS_KEY_NAME` in the Functions runtime environment before using encrypted key storage.