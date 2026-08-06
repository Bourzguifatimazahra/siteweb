import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Eqnovia" },
      { name: "description", content: "Mentions légales du site Eqnovia." },
    ],
  }),
  component: Page,
});

const COPY = {
  fr: {
    heading: "Mentions légales",
    updated: "Dernière mise à jour",
    editorTitle: "Éditeur du site",
    editorDesc: "Société marocaine spécialisée dans les solutions solaires photovoltaïques et le stockage d'énergie.",
    hq: "Siège social : Casablanca, Maroc",
    email: "Email : contact@eqnovia.com",
    phone: "Téléphone : +212 6 55 56 34 04",
    directorTitle: "Directeur de la publication",
    directorBody: "Le directeur de la publication est le représentant légal d'Eqnovia.",
    hostingTitle: "Hébergement",
    hostingBody: "Ce site est hébergé sur une infrastructure Cloud sécurisée. Les données sont stockées dans des centres de données conformes aux normes internationales de sécurité.",
    ipTitle: "Propriété intellectuelle",
    ipBody: "L'ensemble du contenu du site (textes, images, logos, graphismes, vidéos) est la propriété exclusive d'Eqnovia ou de ses partenaires, et est protégé par la législation marocaine et internationale sur la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation est strictement interdite sans autorisation écrite préalable.",
    liabilityTitle: "Responsabilité",
    liabilityBody: "Eqnovia s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur son site, mais ne peut garantir l'absence d'erreurs ou d'omissions. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.",
    lawTitle: "Loi applicable",
    lawBody: "Les présentes mentions légales sont soumises au droit marocain. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux de Casablanca.",
    contactTitle: "Contact",
    contactBody: "Pour toute question relative aux mentions légales, contactez-nous à",
  },
  en: {
    heading: "Legal Notice",
    updated: "Last updated",
    editorTitle: "Site publisher",
    editorDesc: "Moroccan company specialized in solar photovoltaic solutions and energy storage.",
    hq: "Headquarters: Casablanca, Morocco",
    email: "Email: contact@eqnovia.com",
    phone: "Phone: +212 6 55 56 34 04",
    directorTitle: "Publication director",
    directorBody: "The publication director is Eqnovia's legal representative.",
    hostingTitle: "Hosting",
    hostingBody: "This site is hosted on a secure Cloud infrastructure. Data is stored in data centers compliant with international security standards.",
    ipTitle: "Intellectual property",
    ipBody: "All content on the site (text, images, logos, graphics, videos) is the exclusive property of Eqnovia or its partners, and is protected by Moroccan and international intellectual property legislation. Any reproduction, representation, modification or use is strictly prohibited without prior written authorization.",
    liabilityTitle: "Liability",
    liabilityBody: "Eqnovia strives to ensure the accuracy and up-to-date nature of the information published on its site, but cannot guarantee the absence of errors or omissions. The user acknowledges using this information at their own risk.",
    lawTitle: "Applicable law",
    lawBody: "This legal notice is governed by Moroccan law. Any dispute relating to its interpretation or execution falls under the exclusive jurisdiction of the Casablanca courts.",
    contactTitle: "Contact",
    contactBody: "For any question regarding this legal notice, contact us at",
  },
  es: {
    heading: "Aviso legal",
    updated: "Última actualización",
    editorTitle: "Editor del sitio",
    editorDesc: "Empresa marroquí especializada en soluciones solares fotovoltaicas y almacenamiento de energía.",
    hq: "Sede social: Casablanca, Marruecos",
    email: "Correo: contact@eqnovia.com",
    phone: "Teléfono: +212 6 55 56 34 04",
    directorTitle: "Director de la publicación",
    directorBody: "El director de la publicación es el representante legal de Eqnovia.",
    hostingTitle: "Alojamiento",
    hostingBody: "Este sitio está alojado en una infraestructura Cloud segura. Los datos se almacenan en centros de datos conformes con los estándares internacionales de seguridad.",
    ipTitle: "Propiedad intelectual",
    ipBody: "Todo el contenido del sitio (textos, imágenes, logotipos, gráficos, videos) es propiedad exclusiva de Eqnovia o de sus socios, y está protegido por la legislación marroquí e internacional sobre propiedad intelectual. Queda estrictamente prohibida cualquier reproducción, representación, modificación o explotación sin autorización previa por escrito.",
    liabilityTitle: "Responsabilidad",
    liabilityBody: "Eqnovia se esfuerza por garantizar la exactitud y actualización de la información difundida en su sitio, pero no puede garantizar la ausencia de errores u omisiones. El usuario reconoce utilizar esta información bajo su exclusiva responsabilidad.",
    lawTitle: "Ley aplicable",
    lawBody: "El presente aviso legal está sujeto al derecho marroquí. Cualquier litigio relativo a su interpretación o ejecución es de competencia exclusiva de los tribunales de Casablanca.",
    contactTitle: "Contacto",
    contactBody: "Para cualquier pregunta relacionada con este aviso legal, contáctenos en",
  },
} as const;

function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <SiteLayout>
      <article className="container-eq py-16 max-w-3xl prose-eq">
        <h1 className="text-[36px] font-semibold">{c.heading}</h1>
        <p className="mt-4 text-muted-foreground">{c.updated} : {new Date().toLocaleDateString()}</p>

        <Section title={c.editorTitle}>
          <p><strong>Eqnovia</strong> — {c.editorDesc}</p>
          <p>{c.hq}</p>
          <p>{c.email}</p>
          <p>{c.phone}</p>
        </Section>

        <Section title={c.directorTitle}>
          <p>{c.directorBody}</p>
        </Section>

        <Section title={c.hostingTitle}>
          <p>{c.hostingBody}</p>
        </Section>

        <Section title={c.ipTitle}>
          <p>{c.ipBody}</p>
        </Section>

        <Section title={c.liabilityTitle}>
          <p>{c.liabilityBody}</p>
        </Section>

        <Section title={c.lawTitle}>
          <p>{c.lawBody}</p>
        </Section>

        <Section title={c.contactTitle}>
          <p>{c.contactBody} <a href="mailto:contact@eqnovia.com" className="text-brand underline">contact@eqnovia.com</a>.</p>
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
