import { createFileRoute, Link } from "@tanstack/react-router";
import { LineChart, Wrench, Cog, CheckCircle2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Eqnovia" },
      { name: "description", content: "Étude & financement, fourniture & installation, exploitation & maintenance de vos centrales solaires." },
    ],
  }),
  component: ServicesPage,
});

const COPY = {
  fr: {
    kicker: "Nos services",
    title: "Une offre complète, de l'idée à l'exploitation.",
    subtitle: "Trois piliers de services, une même exigence : livrer des centrales solaires performantes, fiables et rentables sur le long terme.",
    services: [
      {
        icon: LineChart,
        title: "Étude & Financement",
        desc: "Nous analysons vos consommations, dimensionnons votre centrale et structurons le meilleur montage financier.",
        features: ["Audit énergétique", "Étude technico-économique", "PPA / leasing / autofinancement", "Business plan bancable"],
      },
      {
        icon: Wrench,
        title: "Fourniture & Installation",
        desc: "Nous sélectionnons les équipements les plus performants et gérons l'intégralité du chantier clé en main.",
        features: ["Sourcing tier-1 modules & onduleurs", "Ingénierie de détail", "Installation EPC certifiée", "Mise en service et raccordement"],
      },
      {
        icon: Cog,
        title: "Exploitation & Maintenance",
        desc: "Nous garantissons la performance de votre installation pendant toute sa durée de vie.",
        features: ["Supervision 24/7 temps réel", "Maintenance préventive & corrective", "Nettoyage et inspections drones", "Reporting mensuel de performance"],
      },
    ],
    ctaTitle: "Un projet en tête ? Parlons-en.",
    ctaText: "Notre équipe revient vers vous sous 48h avec une première évaluation.",
    ctaBtn: "Demander une étude",
  },
  en: {
    kicker: "Our services",
    title: "A complete offer, from idea to operation.",
    subtitle: "Three service pillars, one same standard: delivering solar plants that are efficient, reliable and profitable over the long term.",
    services: [
      {
        icon: LineChart,
        title: "Study & Financing",
        desc: "We analyze your consumption, size your plant and structure the best financial setup.",
        features: ["Energy audit", "Techno-economic study", "PPA / leasing / self-financing", "Bankable business plan"],
      },
      {
        icon: Wrench,
        title: "Supply & Installation",
        desc: "We select the best-performing equipment and manage the entire turnkey construction.",
        features: ["Tier-1 module & inverter sourcing", "Detailed engineering", "Certified EPC installation", "Commissioning and grid connection"],
      },
      {
        icon: Cog,
        title: "Operation & Maintenance",
        desc: "We guarantee your installation's performance throughout its entire lifespan.",
        features: ["24/7 real-time monitoring", "Preventive & corrective maintenance", "Cleaning and drone inspections", "Monthly performance reporting"],
      },
    ],
    ctaTitle: "Have a project in mind? Let's talk.",
    ctaText: "Our team will get back to you within 48h with an initial assessment.",
    ctaBtn: "Request a study",
  },
  es: {
    kicker: "Nuestros servicios",
    title: "Una oferta completa, de la idea a la explotación.",
    subtitle: "Tres pilares de servicios, una misma exigencia: entregar centrales solares eficientes, fiables y rentables a largo plazo.",
    services: [
      {
        icon: LineChart,
        title: "Estudio y Financiación",
        desc: "Analizamos su consumo, dimensionamos su central y estructuramos el mejor montaje financiero.",
        features: ["Auditoría energética", "Estudio técnico-económico", "PPA / leasing / autofinanciación", "Plan de negocio bancable"],
      },
      {
        icon: Wrench,
        title: "Suministro e Instalación",
        desc: "Seleccionamos los equipos más eficientes y gestionamos toda la obra llave en mano.",
        features: ["Sourcing de módulos e inversores tier-1", "Ingeniería de detalle", "Instalación EPC certificada", "Puesta en marcha y conexión a red"],
      },
      {
        icon: Cog,
        title: "Explotación y Mantenimiento",
        desc: "Garantizamos el rendimiento de su instalación durante toda su vida útil.",
        features: ["Supervisión 24/7 en tiempo real", "Mantenimiento preventivo y correctivo", "Limpieza e inspecciones con drones", "Informe mensual de rendimiento"],
      },
    ],
    ctaTitle: "¿Tiene un proyecto en mente? Hablemos.",
    ctaText: "Nuestro equipo le responderá en 48h con una primera evaluación.",
    ctaBtn: "Solicitar un estudio",
  },
} as const;

function ServicesPage() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-12 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">{c.kicker}</p>
          <h1 className="text-[36px] lg:text-[56px] font-semibold leading-[1.05] max-w-3xl">
            {c.title}
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl">
            {c.subtitle}
          </p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 space-y-6">
        {c.services.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article className="rounded-3xl border border-border bg-card p-8 lg:p-12 grid lg:grid-cols-12 gap-8 hover:shadow-elegant transition-all duration-500">
              <div className="lg:col-span-4">
                <div className="h-16 w-16 rounded-2xl bg-brand text-white grid place-items-center">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-[28px] font-semibold leading-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-4 content-start">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3 rounded-2xl bg-secondary/60 p-5">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-eq pb-24">
        <div className="rounded-[32px] bg-brand text-white p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-8 right-10 h-6 w-6 rounded-full bg-[color:var(--sun)] animate-float" />
          <h2 className="text-[28px] lg:text-[40px] font-semibold max-w-2xl mx-auto">{c.ctaTitle}</h2>
          <p className="mt-4 text-white/80 max-w-lg mx-auto">{c.ctaText}</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-white text-brand font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors">
            {c.ctaBtn} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
