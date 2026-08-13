import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM = `Tu es l'assistant virtuel officiel d'**Eqnovia**, expert marocain des solutions solaires photovoltaïques (C&I) et de stockage d'énergie (BESS) au Maroc et en Afrique.

## Ton style
- **Professionnel, courtois, chaleureux** — jamais familier.
- **Concis** : réponses courtes, structurées en markdown (titres ###, listes à puces, gras pour les mots-clés).
- Réponds toujours dans la langue de l'utilisateur (FR par défaut, EN, ES, 中文 (zh), العربية (ar)).
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
        const { messages, lang } = (await request.json()) as {
          messages?: UIMessage[];
          lang?: "fr" | "en" | "es" | "zh" | "ar";
        };
        if (!Array.isArray(messages)) {
          return new Response("Messages required", { status: 400 });
        }
        const key = process.env.AI_GATEWAY_API_KEY;
        if (!key) return new Response("Missing AI_GATEWAY_API_KEY", { status: 500 });

        const LANG_NAMES: Record<string, string> = {
          fr: "français",
          en: "English",
          es: "español",
          zh: "中文 (简体中文)",
          ar: "العربية (الفصحى)",
        };
        const system = lang && LANG_NAMES[lang]
          ? `${SYSTEM}\n\n## Langue de réponse\nRéponds impérativement en ${LANG_NAMES[lang]}, quelle que soit la langue du message précédent, sauf si l'utilisateur écrit explicitement dans une autre langue.`
          : SYSTEM;

        const gateway = createAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system,
          messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
