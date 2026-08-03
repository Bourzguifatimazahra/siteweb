import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Eqnovia" },
      { name: "description", content: "Politique de confidentialité conforme à la loi 09-08 et au règlement de la CNDP." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <article className="container-eq py-16 max-w-3xl">
        <h1 className="text-[36px] font-semibold">Politique de confidentialité</h1>
        <p className="mt-4 text-muted-foreground">Conforme à la loi 09-08 et au règlement de la <strong>CNDP</strong> (Commission Nationale de contrôle de la protection des Données à caractère Personnel).</p>

        <S title="1. Responsable du traitement">
          <p>Eqnovia, dont le siège est à Casablanca, Maroc, est responsable du traitement des données personnelles collectées via ce site.</p>
        </S>

        <S title="2. Données collectées">
          <ul className="list-disc pl-6 space-y-1">
            <li>Formulaire de contact : nom, prénom, email, téléphone, entreprise, message.</li>
            <li>Données de navigation : adresse IP anonymisée, pages visitées, durée de visite.</li>
            <li>Cookies : voir notre <Link to="/politique-cookies" className="text-brand underline">politique de cookies</Link>.</li>
          </ul>
        </S>

        <S title="3. Finalités">
          <ul className="list-disc pl-6 space-y-1">
            <li>Répondre aux demandes commerciales et techniques.</li>
            <li>Améliorer l'expérience utilisateur et la performance du site.</li>
            <li>Envoyer des communications informationnelles avec votre consentement.</li>
          </ul>
        </S>

        <S title="4. Base légale">
          <p>Les traitements reposent sur votre consentement explicite, l'exécution de mesures précontractuelles, et l'intérêt légitime d'Eqnovia à développer son activité.</p>
        </S>

        <S title="5. Durée de conservation">
          <p>Les données de contact sont conservées 3 ans après le dernier échange. Les données de navigation sont conservées 13 mois maximum.</p>
        </S>

        <S title="6. Destinataires">
          <p>Les données sont destinées exclusivement aux équipes internes d'Eqnovia. Aucune donnée n'est vendue à des tiers. Certains prestataires techniques (hébergement, analytics) peuvent y accéder dans le cadre strict de leur mission, sous engagement de confidentialité.</p>
        </S>

        <S title="7. Vos droits (loi 09-08)">
          <p>Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Pour exercer ces droits, contactez-nous à <a href="mailto:contact@eqnovia.com" className="text-brand underline">contact@eqnovia.com</a>.</p>
          <p>Une déclaration a été effectuée auprès de la CNDP. Vous pouvez également saisir la CNDP en cas de désaccord : <a href="https://www.cndp.ma" target="_blank" rel="noreferrer" className="text-brand underline">www.cndp.ma</a>.</p>
        </S>

        <S title="8. Sécurité">
          <p>Eqnovia met en œuvre des mesures techniques et organisationnelles appropriées (chiffrement HTTPS, contrôle d'accès, sauvegardes) pour garantir la sécurité de vos données.</p>
        </S>
      </article>
    </SiteLayout>
  );
}

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-brand">{title}</h2>
      <div className="mt-3 space-y-2 text-foreground/85 leading-relaxed">{children}</div>
    </section>
  );
}
