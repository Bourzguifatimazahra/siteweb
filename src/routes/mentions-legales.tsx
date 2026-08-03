import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Eqnovia" },
      { name: "description", content: "Mentions légales du site Eqnovia." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <article className="container-eq py-16 max-w-3xl prose-eq">
        <h1 className="text-[36px] font-semibold">Mentions légales</h1>
        <p className="mt-4 text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString()}</p>

        <Section title="Éditeur du site">
          <p><strong>Eqnovia</strong> — Société marocaine spécialisée dans les solutions solaires photovoltaïques et le stockage d'énergie.</p>
          <p>Siège social : Casablanca, Maroc</p>
          <p>Email : contact@eqnovia.com</p>
          <p>Téléphone : +212 6 55 56 34 04</p>
        </Section>

        <Section title="Directeur de la publication">
          <p>Le directeur de la publication est le représentant légal d'Eqnovia.</p>
        </Section>

        <Section title="Hébergement">
          <p>Ce site est hébergé sur une infrastructure Cloud sécurisée. Les données sont stockées dans des centres de données conformes aux normes internationales de sécurité.</p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>L'ensemble du contenu du site (textes, images, logos, graphismes, vidéos) est la propriété exclusive d'Eqnovia ou de ses partenaires, et est protégé par la législation marocaine et internationale sur la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation est strictement interdite sans autorisation écrite préalable.</p>
        </Section>

        <Section title="Responsabilité">
          <p>Eqnovia s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur son site, mais ne peut garantir l'absence d'erreurs ou d'omissions. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>
        </Section>

        <Section title="Loi applicable">
          <p>Les présentes mentions légales sont soumises au droit marocain. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux de Casablanca.</p>
        </Section>

        <Section title="Contact">
          <p>Pour toute question relative aux mentions légales, contactez-nous à <a href="mailto:contact@eqnovia.com" className="text-brand underline">contact@eqnovia.com</a>.</p>
        </Section>
      </article>
    </SiteLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-brand">{title}</h2>
      <div className="mt-3 space-y-2 text-foreground/85 leading-relaxed">{children}</div>
    </section>
  );
}
