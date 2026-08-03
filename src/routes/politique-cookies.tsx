import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/politique-cookies")({
  head: () => ({
    meta: [
      { title: "Politique de cookies — Eqnovia" },
      { name: "description", content: "Politique d'utilisation des cookies sur le site Eqnovia : cookies fonctionnels, analytiques et tiers." },
    ],
  }),
  component: CookiesPage,
});

const SECTIONS = [
  {
    title: "1. Qu'est-ce qu'un cookie ?",
    body: "Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site. Il permet de mémoriser des informations relatives à votre navigation et d'améliorer votre expérience.",
  },
  {
    title: "2. Cookies strictement nécessaires",
    body: "Ces cookies sont indispensables au fonctionnement du site : gestion de session, sécurité, préférences de consentement. Ils ne peuvent pas être désactivés.",
  },
  {
    title: "3. Cookies analytiques (Google Analytics 4)",
    body: "Nous utilisons Google Analytics 4 pour mesurer l'audience du site, analyser le comportement des visiteurs et améliorer notre contenu. Ces cookies collectent des données anonymisées.",
  },
  {
    title: "4. Cookies fonctionnels",
    body: "Ils permettent au site de retenir vos choix (langue, région) pour offrir une expérience personnalisée.",
  },
  {
    title: "5. Cookies tiers",
    body: "Certains services intégrés (cartes, vidéos, réseaux sociaux) déposent leurs propres cookies. Consultez les politiques de confidentialité de ces services pour plus d'informations.",
  },
  {
    title: "6. Gestion de vos préférences",
    body: "Vous pouvez à tout moment modifier vos préférences via la bannière de consentement ou les paramètres de votre navigateur. Refuser certains cookies peut altérer le fonctionnement du site.",
  },
  {
    title: "7. Contact",
    body: "Pour toute question relative à cette politique, contactez-nous à contact@eqnovia.com.",
  },
];

function CookiesPage() {
  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-16 lg:pt-24 max-w-3xl">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">Ressources</p>
          <h1 className="text-[36px] lg:text-[48px] font-semibold leading-[1.05]">
            Politique de cookies
          </h1>
          <p className="mt-6 text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 max-w-3xl space-y-8">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <article className="border-t border-border pt-6">
              <h2 className="text-xl font-semibold text-brand">{s.title}</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </SiteLayout>
  );
}
