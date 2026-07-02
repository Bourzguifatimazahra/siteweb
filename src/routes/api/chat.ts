import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM = `Tu es l'assistant virtuel officiel d'Eqnovia, expert marocain des solutions solaires photovoltaïques (C&I) et de stockage d'énergie (BESS) au Maroc et en Afrique.

Ton rôle:
- Répondre aux questions sur les services d'Eqnovia: étude & financement, fourniture & installation, exploitation & maintenance.
- Expliquer les solutions solaires C&I, autoconsommation, ombrières, centrales toiture, systèmes de stockage.
- Orienter vers un contact commercial (formulaire /contact, tél 0655563404, WhatsApp) pour toute demande de devis.
- Répondre dans la langue de l'utilisateur (français par défaut, anglais, arabe, chinois).
- Rester concis, professionnel, chaleureux. Utilise le markdown quand pertinent.
- Ne jamais inventer de chiffres précis: renvoyer vers l'équipe pour un devis chiffré.`;

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
