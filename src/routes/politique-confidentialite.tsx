import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Eqnovia" },
      { name: "description", content: "Politique de confidentialité conforme à la loi 09-08 et au règlement de la CNDP." },
    ],
  }),
  component: Page,
});

const COPY = {
  fr: {
    heading: "Politique de confidentialité",
    intro: "Conforme à la loi 09-08 et au règlement de la",
    cndpFull: "(Commission Nationale de contrôle de la protection des Données à caractère Personnel).",
    s1Title: "1. Responsable du traitement",
    s1Body: "Eqnovia, dont le siège est à Casablanca, Maroc, est responsable du traitement des données personnelles collectées via ce site.",
    s2Title: "2. Données collectées",
    s2Item1: "Formulaire de contact : nom, prénom, email, téléphone, entreprise, message.",
    s2Item2: "Données de navigation : adresse IP anonymisée, pages visitées, durée de visite.",
    s2Item3Prefix: "Cookies : voir notre",
    s2Item3Link: "politique de cookies",
    s3Title: "3. Finalités",
    s3Item1: "Répondre aux demandes commerciales et techniques.",
    s3Item2: "Améliorer l'expérience utilisateur et la performance du site.",
    s3Item3: "Envoyer des communications informationnelles avec votre consentement.",
    s4Title: "4. Base légale",
    s4Body: "Les traitements reposent sur votre consentement explicite, l'exécution de mesures précontractuelles, et l'intérêt légitime d'Eqnovia à développer son activité.",
    s5Title: "5. Durée de conservation",
    s5Body: "Les données de contact sont conservées 3 ans après le dernier échange. Les données de navigation sont conservées 13 mois maximum.",
    s6Title: "6. Destinataires",
    s6Body: "Les données sont destinées exclusivement aux équipes internes d'Eqnovia. Aucune donnée n'est vendue à des tiers. Certains prestataires techniques (hébergement, analytics) peuvent y accéder dans le cadre strict de leur mission, sous engagement de confidentialité.",
    s7Title: "7. Vos droits (loi 09-08)",
    s7Body1Prefix: "Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Pour exercer ces droits, contactez-nous à",
    s7Body2Prefix: "Une déclaration a été effectuée auprès de la CNDP. Vous pouvez également saisir la CNDP en cas de désaccord :",
    s8Title: "8. Sécurité",
    s8Body: "Eqnovia met en œuvre des mesures techniques et organisationnelles appropriées (chiffrement HTTPS, contrôle d'accès, sauvegardes) pour garantir la sécurité de vos données.",
  },
  en: {
    heading: "Privacy Policy",
    intro: "Compliant with law 09-08 and the regulation of the",
    cndpFull: "(National Commission for the Control of Personal Data Protection).",
    s1Title: "1. Data controller",
    s1Body: "Eqnovia, headquartered in Casablanca, Morocco, is responsible for processing personal data collected via this site.",
    s2Title: "2. Data collected",
    s2Item1: "Contact form: first name, last name, email, phone, company, message.",
    s2Item2: "Browsing data: anonymized IP address, pages visited, visit duration.",
    s2Item3Prefix: "Cookies: see our",
    s2Item3Link: "cookie policy",
    s3Title: "3. Purposes",
    s3Item1: "Respond to commercial and technical requests.",
    s3Item2: "Improve user experience and site performance.",
    s3Item3: "Send informational communications with your consent.",
    s4Title: "4. Legal basis",
    s4Body: "Processing is based on your explicit consent, the execution of pre-contractual measures, and Eqnovia's legitimate interest in developing its business.",
    s5Title: "5. Retention period",
    s5Body: "Contact data is retained for 3 years after the last exchange. Browsing data is retained for a maximum of 13 months.",
    s6Title: "6. Recipients",
    s6Body: "Data is intended exclusively for Eqnovia's internal teams. No data is sold to third parties. Some technical providers (hosting, analytics) may access it strictly within the scope of their mission, under a confidentiality commitment.",
    s7Title: "7. Your rights (law 09-08)",
    s7Body1Prefix: "You have the right to access, rectify, object to and delete your data. To exercise these rights, contact us at",
    s7Body2Prefix: "A declaration has been made to the CNDP. You may also refer to the CNDP in case of disagreement:",
    s8Title: "8. Security",
    s8Body: "Eqnovia implements appropriate technical and organizational measures (HTTPS encryption, access control, backups) to guarantee the security of your data.",
  },
  es: {
    heading: "Política de privacidad",
    intro: "Conforme a la ley 09-08 y al reglamento de la",
    cndpFull: "(Comisión Nacional de control de la protección de Datos de carácter Personal).",
    s1Title: "1. Responsable del tratamiento",
    s1Body: "Eqnovia, con sede en Casablanca, Marruecos, es responsable del tratamiento de los datos personales recopilados a través de este sitio.",
    s2Title: "2. Datos recopilados",
    s2Item1: "Formulario de contacto: nombre, apellido, correo, teléfono, empresa, mensaje.",
    s2Item2: "Datos de navegación: dirección IP anonimizada, páginas visitadas, duración de la visita.",
    s2Item3Prefix: "Cookies: consulte nuestra",
    s2Item3Link: "política de cookies",
    s3Title: "3. Finalidades",
    s3Item1: "Responder a las solicitudes comerciales y técnicas.",
    s3Item2: "Mejorar la experiencia del usuario y el rendimiento del sitio.",
    s3Item3: "Enviar comunicaciones informativas con su consentimiento.",
    s4Title: "4. Base legal",
    s4Body: "Los tratamientos se basan en su consentimiento explícito, la ejecución de medidas precontractuales, y el interés legítimo de Eqnovia en desarrollar su actividad.",
    s5Title: "5. Duración de conservación",
    s5Body: "Los datos de contacto se conservan 3 años después del último intercambio. Los datos de navegación se conservan un máximo de 13 meses.",
    s6Title: "6. Destinatarios",
    s6Body: "Los datos se destinan exclusivamente a los equipos internos de Eqnovia. Ningún dato se vende a terceros. Algunos proveedores técnicos (alojamiento, analítica) pueden acceder a ellos estrictamente en el marco de su misión, bajo compromiso de confidencialidad.",
    s7Title: "7. Sus derechos (ley 09-08)",
    s7Body1Prefix: "Usted dispone de un derecho de acceso, rectificación, oposición y supresión de sus datos. Para ejercer estos derechos, contáctenos en",
    s7Body2Prefix: "Se ha realizado una declaración ante la CNDP. También puede acudir a la CNDP en caso de desacuerdo:",
    s8Title: "8. Seguridad",
    s8Body: "Eqnovia implementa medidas técnicas y organizativas apropiadas (cifrado HTTPS, control de acceso, copias de seguridad) para garantizar la seguridad de sus datos.",
  },
} as const;

function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <SiteLayout>
      <article className="container-eq py-16 max-w-3xl">
        <h1 className="text-[36px] font-semibold">{c.heading}</h1>
        <p className="mt-4 text-muted-foreground">{c.intro} <strong>CNDP</strong> {c.cndpFull}</p>

        <S title={c.s1Title}>
          <p>{c.s1Body}</p>
        </S>

        <S title={c.s2Title}>
          <ul className="list-disc pl-6 space-y-1">
            <li>{c.s2Item1}</li>
            <li>{c.s2Item2}</li>
            <li>{c.s2Item3Prefix} <Link to="/politique-cookies" className="text-brand underline">{c.s2Item3Link}</Link>.</li>
          </ul>
        </S>

        <S title={c.s3Title}>
          <ul className="list-disc pl-6 space-y-1">
            <li>{c.s3Item1}</li>
            <li>{c.s3Item2}</li>
            <li>{c.s3Item3}</li>
          </ul>
        </S>

        <S title={c.s4Title}>
          <p>{c.s4Body}</p>
        </S>

        <S title={c.s5Title}>
          <p>{c.s5Body}</p>
        </S>

        <S title={c.s6Title}>
          <p>{c.s6Body}</p>
        </S>

        <S title={c.s7Title}>
          <p>{c.s7Body1Prefix} <a href="mailto:contact@eqnovia.com" className="text-brand underline">contact@eqnovia.com</a>.</p>
          <p>{c.s7Body2Prefix} <a href="https://www.cndp.ma" target="_blank" rel="noreferrer" className="text-brand underline">www.cndp.ma</a>.</p>
        </S>

        <S title={c.s8Title}>
          <p>{c.s8Body}</p>
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
