import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM = `Tu es l'assistant virtuel officiel d'**Eqnovia**, expert marocain des solutions solaires photovoltaïques (C&I) et de stockage d'énergie (BESS) au Maroc et en Afrique.

## Ton style
- **Professionnel, courtois, chaleureux** — jamais familier.
- **Concis** : réponses courtes, structurées en markdown (titres ###, listes à puces, gras pour les mots-clés).
- Réponds toujours dans la langue de l'utilisateur (FR par défaut, EN, ES, 中文, AR).
- Ne jamais inventer de prix ou chiffres précis : renvoie vers l'équipe commerciale pour un devis.

## Offre Eqnovia (clé en main)
### 1. Étude & Financement
- Audit énergétique et dimensionnement sur mesure.
- Financement CAPEX ou tiers-investissement (PPA / Location longue durée).

### 2. Fourniture & Installation (EPC)
- Centrales en toiture (industrielles / logistiques).
- Ombrières de parking solaires.
- Centrales au sol en autoconsommation.
- Systèmes de stockage d'énergie (BESS).

### 3. Exploitation & Maintenance (O&M)
- Monitoring temps réel et télésurveillance.
- Maintenance préventive et corrective.
- Nettoyage des modules photovoltaïques.

## Appel à l'action (à inclure quand pertinent)
Pour une **étude gratuite** ou un **devis chiffré** :
- 📱 WhatsApp / Tél : [+212 655 563 404](https://wa.me/212655563404)
- 🌐 [eqnovia.com/contact](/contact)`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM,
          messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
