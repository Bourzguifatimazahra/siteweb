import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/politique-cookies")({
  head: () => ({
    meta: [
      { title: "Politique de cookies — Eqnovia" },
      { name: "description", content: "Politique d'utilisation des cookies sur le site Eqnovia : cookies fonctionnels, analytiques et tiers." },
    ],
  }),
  component: CookiesPage,
});

const COPY = {
  fr: {
    kicker: "Ressources",
    title: "Politique de cookies",
    updated: "Dernière mise à jour",
    locale: "fr-FR",
    sections: [
      { title: "1. Qu'est-ce qu'un cookie ?", body: "Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site. Il permet de mémoriser des informations relatives à votre navigation et d'améliorer votre expérience." },
      { title: "2. Cookies strictement nécessaires", body: "Ces cookies sont indispensables au fonctionnement du site : gestion de session, sécurité, préférences de consentement. Ils ne peuvent pas être désactivés." },
      { title: "3. Cookies analytiques (Google Analytics 4)", body: "Nous utilisons Google Analytics 4 pour mesurer l'audience du site, analyser le comportement des visiteurs et améliorer notre contenu. Ces cookies collectent des données anonymisées." },
      { title: "4. Cookies fonctionnels", body: "Ils permettent au site de retenir vos choix (langue, région) pour offrir une expérience personnalisée." },
      { title: "5. Cookies tiers", body: "Certains services intégrés (cartes, vidéos, réseaux sociaux) déposent leurs propres cookies. Consultez les politiques de confidentialité de ces services pour plus d'informations." },
      { title: "6. Gestion de vos préférences", body: "Vous pouvez à tout moment modifier vos préférences via la bannière de consentement ou les paramètres de votre navigateur. Refuser certains cookies peut altérer le fonctionnement du site." },
      { title: "7. Contact", body: "Pour toute question relative à cette politique, contactez-nous à contact@eqnovia.com." },
    ],
  },
  en: {
    kicker: "Resources",
    title: "Cookie Policy",
    updated: "Last updated",
    locale: "en-US",
    sections: [
      { title: "1. What is a cookie?", body: "A cookie is a small text file stored on your device when you visit our site. It helps remember information related to your browsing and improve your experience." },
      { title: "2. Strictly necessary cookies", body: "These cookies are essential for the site to function: session management, security, consent preferences. They cannot be disabled." },
      { title: "3. Analytics cookies (Google Analytics 4)", body: "We use Google Analytics 4 to measure site traffic, analyze visitor behavior and improve our content. These cookies collect anonymized data." },
      { title: "4. Functional cookies", body: "They allow the site to remember your choices (language, region) to offer a personalized experience." },
      { title: "5. Third-party cookies", body: "Some integrated services (maps, videos, social networks) set their own cookies. Refer to the privacy policies of these services for more information." },
      { title: "6. Managing your preferences", body: "You can change your preferences at any time via the consent banner or your browser settings. Refusing certain cookies may affect the site's functioning." },
      { title: "7. Contact", body: "For any question about this policy, contact us at contact@eqnovia.com." },
    ],
  },
  es: {
    kicker: "Recursos",
    title: "Política de cookies",
    updated: "Última actualización",
    locale: "es-ES",
    sections: [
      { title: "1. ¿Qué es una cookie?", body: "Una cookie es un pequeño archivo de texto almacenado en su dispositivo cuando visita nuestro sitio. Permite recordar información relacionada con su navegación y mejorar su experiencia." },
      { title: "2. Cookies estrictamente necesarias", body: "Estas cookies son indispensables para el funcionamiento del sitio: gestión de sesión, seguridad, preferencias de consentimiento. No se pueden desactivar." },
      { title: "3. Cookies analíticas (Google Analytics 4)", body: "Utilizamos Google Analytics 4 para medir la audiencia del sitio, analizar el comportamiento de los visitantes y mejorar nuestro contenido. Estas cookies recopilan datos anonimizados." },
      { title: "4. Cookies funcionales", body: "Permiten al sitio recordar sus elecciones (idioma, región) para ofrecer una experiencia personalizada." },
      { title: "5. Cookies de terceros", body: "Algunos servicios integrados (mapas, videos, redes sociales) instalan sus propias cookies. Consulte las políticas de privacidad de estos servicios para más información." },
      { title: "6. Gestión de sus preferencias", body: "Puede modificar sus preferencias en cualquier momento a través del banner de consentimiento o la configuración de su navegador. Rechazar ciertas cookies puede alterar el funcionamiento del sitio." },
      { title: "7. Contacto", body: "Para cualquier pregunta relacionada con esta política, contáctenos en contact@eqnovia.com." },
    ],
  },
} as const;

function CookiesPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-16 lg:pt-24 max-w-3xl">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">{c.kicker}</p>
          <h1 className="text-[36px] lg:text-[48px] font-semibold leading-[1.05]">
            {c.title}
          </h1>
          <p className="mt-6 text-muted-foreground">{c.updated} : {new Date().toLocaleDateString(c.locale, { year: "numeric", month: "long", day: "numeric" })}</p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 max-w-3xl space-y-8">
        {c.sections.map((s, i) => (
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
