import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, LineChart, Wrench, Cog, Factory, School, Hotel,
  Building2, Tractor, HeartPulse, Sun, BatteryCharging, CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { HomeHero } from "@/components/site/HomeHero";
import projAgadir from "@/assets/project-agadir.jpg";
import projCasa from "@/assets/project-casablanca.jpg";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eqnovia — L'énergie de demain. Aujourd'hui." },
      {
        name: "description",
        content:
          "Solutions solaires C&I et stockage d'énergie au Maroc et en Afrique. Étude, financement, installation, exploitation & maintenance.",
      },
    ],
  }),
  component: HomePage,
});

const COPY = {
  fr: {
    stats: [
      { value: "20+", label: "années d'expertise" },
      { value: "12", label: "experts dédiés" },
      { value: "15+", label: "projets livrés" },
      { value: "25 MW", label: "installés & suivis" },
    ],
    services: [
      {
        icon: LineChart,
        title: "Étude & Financement",
        desc: "Audit énergétique, dimensionnement technique et montage financier sur-mesure pour votre projet solaire.",
      },
      {
        icon: Wrench,
        title: "Fourniture & Installation",
        desc: "Sélection des meilleurs équipements et installation clé en main par nos équipes certifiées.",
      },
      {
        icon: Cog,
        title: "Exploitation & Maintenance",
        desc: "Supervision 24/7, maintenance préventive et corrective pour garantir la performance dans la durée.",
      },
    ],
    sectors: [
      { icon: Factory, label: "Industrie" },
      { icon: Building2, label: "Tertiaire" },
      { icon: Tractor, label: "Agriculture" },
      { icon: Hotel, label: "Hôtellerie" },
      { icon: School, label: "Éducation" },
      { icon: HeartPulse, label: "Santé" },
    ],
    projects: [
      {
        img: projAgadir,
        location: "Agadir, Maroc",
        title: "Centrale toiture industrielle",
        power: "1.2 MWc",
        savings: "38%",
        roi: "5.2 ans",
      },
      {
        img: projCasa,
        location: "Casablanca, Maroc",
        title: "Ombrière logistique",
        power: "2.5 MWc",
        savings: "42%",
        roi: "4.8 ans",
      },
    ],
    solutions: [
      { icon: Sun, title: "Solaire C&I", desc: "Centrales photovoltaïques pour l'industrie et le tertiaire." },
      { icon: BatteryCharging, title: "Stockage d'énergie", desc: "Systèmes BESS pour autonomie et sécurisation de l'alimentation." },
    ],
    aboutKicker: "Qui sommes-nous",
    aboutTitle: "L'expertise solaire au service de l'industrie africaine.",
    aboutDesc:
      "Fondée par des ingénieurs passionnés, Eqnovia accompagne les entreprises marocaines et africaines dans leur transition énergétique — de l'étude à l'exploitation.",
    aboutList: [
      "Ingénieurs et techniciens certifiés",
      "Approche end-to-end : étude, EPC, O&M",
      "Financement structuré adapté à chaque profil",
      "Supervision continue depuis notre centre de contrôle",
    ],
    aboutMore: "En savoir plus",
    aboutImgAlt: "Projet Eqnovia Casablanca",
    servicesKicker: "Nos services",
    servicesTitle: "Trois piliers pour votre transition énergétique.",
    servicesMore: "En savoir plus",
    sectorsKicker: "Nos secteurs",
    sectorsTitle: "Une expertise multi-sectorielle.",
    sectorsDesc:
      "De l'industrie lourde aux établissements publics, nous adaptons nos solutions à chaque activité et contrainte de site.",
    projectsKicker: "Projets phares",
    projectsTitle: "Des réalisations concrètes.",
    seeAllProjects: "Voir tous les projets",
    power: "Puissance",
    savingsLbl: "Économies",
    roiLbl: "ROI",
    explore: "Explorer",
    ctaTitle: "Lancez votre projet solaire maintenant.",
    ctaDesc:
      "Parlons de votre site, vos consommations et vos objectifs. Nous vous répondons sous 48h avec une première estimation.",
    ctaBtn: "Démarrer maintenant",
  },
  en: {
    stats: [
      { value: "20+", label: "years of expertise" },
      { value: "12", label: "dedicated experts" },
      { value: "15+", label: "projects delivered" },
      { value: "25 MW", label: "installed & monitored" },
    ],
    services: [
      {
        icon: LineChart,
        title: "Study & Financing",
        desc: "Energy audit, technical sizing and tailor-made financial structuring for your solar project.",
      },
      {
        icon: Wrench,
        title: "Supply & Installation",
        desc: "Selection of the best equipment and turnkey installation by our certified teams.",
      },
      {
        icon: Cog,
        title: "Operation & Maintenance",
        desc: "24/7 supervision, preventive and corrective maintenance to guarantee long-term performance.",
      },
    ],
    sectors: [
      { icon: Factory, label: "Industry" },
      { icon: Building2, label: "Tertiary" },
      { icon: Tractor, label: "Agriculture" },
      { icon: Hotel, label: "Hospitality" },
      { icon: School, label: "Education" },
      { icon: HeartPulse, label: "Healthcare" },
    ],
    projects: [
      {
        img: projAgadir,
        location: "Agadir, Morocco",
        title: "Industrial rooftop plant",
        power: "1.2 MWp",
        savings: "38%",
        roi: "5.2 years",
      },
      {
        img: projCasa,
        location: "Casablanca, Morocco",
        title: "Logistics carport",
        power: "2.5 MWp",
        savings: "42%",
        roi: "4.8 years",
      },
    ],
    solutions: [
      { icon: Sun, title: "C&I Solar", desc: "Photovoltaic plants for industry and the tertiary sector." },
      { icon: BatteryCharging, title: "Energy storage", desc: "BESS systems for autonomy and secure power supply." },
    ],
    aboutKicker: "Who we are",
    aboutTitle: "Solar expertise serving African industry.",
    aboutDesc:
      "Founded by passionate engineers, Eqnovia supports Moroccan and African companies in their energy transition — from study to operation.",
    aboutList: [
      "Certified engineers and technicians",
      "End-to-end approach: study, EPC, O&M",
      "Structured financing adapted to each profile",
      "Continuous supervision from our control center",
    ],
    aboutMore: "Learn more",
    aboutImgAlt: "Eqnovia Casablanca project",
    servicesKicker: "Our services",
    servicesTitle: "Three pillars for your energy transition.",
    servicesMore: "Learn more",
    sectorsKicker: "Our sectors",
    sectorsTitle: "Multi-sector expertise.",
    sectorsDesc:
      "From heavy industry to public institutions, we adapt our solutions to each activity and site constraint.",
    projectsKicker: "Flagship projects",
    projectsTitle: "Concrete achievements.",
    seeAllProjects: "See all projects",
    power: "Power",
    savingsLbl: "Savings",
    roiLbl: "ROI",
    explore: "Explore",
    ctaTitle: "Launch your solar project now.",
    ctaDesc:
      "Let's talk about your site, your consumption and your goals. We respond within 48h with an initial estimate.",
    ctaBtn: "Get started now",
  },
  es: {
    stats: [
      { value: "20+", label: "años de experiencia" },
      { value: "12", label: "expertos dedicados" },
      { value: "15+", label: "proyectos entregados" },
      { value: "25 MW", label: "instalados y supervisados" },
    ],
    services: [
      {
        icon: LineChart,
        title: "Estudio y Financiamiento",
        desc: "Auditoría energética, dimensionamiento técnico y estructuración financiera a medida para su proyecto solar.",
      },
      {
        icon: Wrench,
        title: "Suministro e Instalación",
        desc: "Selección de los mejores equipos e instalación llave en mano por nuestros equipos certificados.",
      },
      {
        icon: Cog,
        title: "Explotación y Mantenimiento",
        desc: "Supervisión 24/7, mantenimiento preventivo y correctivo para garantizar el rendimiento a largo plazo.",
      },
    ],
    sectors: [
      { icon: Factory, label: "Industria" },
      { icon: Building2, label: "Terciario" },
      { icon: Tractor, label: "Agricultura" },
      { icon: Hotel, label: "Hotelería" },
      { icon: School, label: "Educación" },
      { icon: HeartPulse, label: "Salud" },
    ],
    projects: [
      {
        img: projAgadir,
        location: "Agadir, Marruecos",
        title: "Central en techo industrial",
        power: "1.2 MWp",
        savings: "38%",
        roi: "5.2 años",
      },
      {
        img: projCasa,
        location: "Casablanca, Marruecos",
        title: "Aparcamiento solar logístico",
        power: "2.5 MWp",
        savings: "42%",
        roi: "4.8 años",
      },
    ],
    solutions: [
      { icon: Sun, title: "Solar C&I", desc: "Plantas fotovoltaicas para la industria y el sector terciario." },
      { icon: BatteryCharging, title: "Almacenamiento de energía", desc: "Sistemas BESS para autonomía y seguridad del suministro." },
    ],
    aboutKicker: "Quiénes somos",
    aboutTitle: "Experiencia solar al servicio de la industria africana.",
    aboutDesc:
      "Fundada por ingenieros apasionados, Eqnovia acompaña a las empresas marroquíes y africanas en su transición energética — desde el estudio hasta la explotación.",
    aboutList: [
      "Ingenieros y técnicos certificados",
      "Enfoque integral: estudio, EPC, O&M",
      "Financiamiento estructurado adaptado a cada perfil",
      "Supervisión continua desde nuestro centro de control",
    ],
    aboutMore: "Saber más",
    aboutImgAlt: "Proyecto Eqnovia Casablanca",
    servicesKicker: "Nuestros servicios",
    servicesTitle: "Tres pilares para su transición energética.",
    servicesMore: "Saber más",
    sectorsKicker: "Nuestros sectores",
    sectorsTitle: "Una experiencia multisectorial.",
    sectorsDesc:
      "Desde la industria pesada hasta las instituciones públicas, adaptamos nuestras soluciones a cada actividad y limitación del sitio.",
    projectsKicker: "Proyectos destacados",
    projectsTitle: "Realizaciones concretas.",
    seeAllProjects: "Ver todos los proyectos",
    power: "Potencia",
    savingsLbl: "Ahorros",
    roiLbl: "ROI",
    explore: "Explorar",
    ctaTitle: "Inicie su proyecto solar ahora.",
    ctaDesc:
      "Hablemos de su sitio, sus consumos y sus objetivos. Le respondemos en 48h con una primera estimación.",
    ctaBtn: "Empezar ahora",
  },
} as const;

function HomePage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <SiteLayout>
      <HomeHero />

      {/* ABOUT */}
      <section className="container-eq py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">{c.aboutKicker}</p>
            <h2 className="text-[32px] lg:text-[44px] font-semibold leading-tight max-w-xl">
              {c.aboutTitle}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              {c.aboutDesc}
            </p>
            <ul className="mt-8 space-y-3">
              {c.aboutList.map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/a-propos" className="btn-primary hover:btn-primary-hover mt-8">
              {c.aboutMore} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
              <img
                src={projCasa}
                alt={c.aboutImgAlt}
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/60">
        <div className="container-eq py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {c.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center lg:text-left">
              <p className="text-3xl lg:text-4xl font-semibold text-brand">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-eq py-24">
        <div className="max-w-2xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">{c.servicesKicker}</p>
          <h2 className="text-[32px] lg:text-[44px] font-semibold leading-tight">
            {c.servicesTitle}
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {c.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="group h-full rounded-3xl border border-border bg-card p-8 hover:border-brand/40 hover:shadow-elegant transition-all duration-500">
                <div className="h-14 w-14 rounded-2xl bg-primary-soft grid place-items-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-3 transition-all">
                  {c.servicesMore} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-secondary/40 py-24">
        <div className="container-eq">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">{c.sectorsKicker}</p>
              <h2 className="text-[32px] lg:text-[40px] font-semibold leading-tight">
                {c.sectorsTitle}
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              {c.sectorsDesc}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {c.sectors.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="rounded-2xl bg-background border border-border px-4 py-8 flex flex-col items-center gap-3 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                  <s.icon className="h-8 w-8 text-brand" />
                  <p className="text-sm font-semibold">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container-eq py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">{c.projectsKicker}</p>
            <h2 className="text-[32px] lg:text-[40px] font-semibold leading-tight">
              {c.projectsTitle}
            </h2>
          </div>
          <Link to="/projets" className="btn-outline hover:bg-primary-soft self-start">
            {c.seeAllProjects} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {c.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 150}>
              <article className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur text-xs font-semibold px-3 py-1.5">
                    {p.location}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    <div>
                      <p className="text-xs text-muted-foreground">{c.power}</p>
                      <p className="text-base font-semibold text-brand">{p.power}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.savingsLbl}</p>
                      <p className="text-base font-semibold text-brand">{p.savings}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.roiLbl}</p>
                      <p className="text-base font-semibold text-brand">{p.roi}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SOLUTIONS TEASER */}
      <section className="container-eq pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {c.solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="rounded-3xl bg-brand text-white p-10 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl group-hover:scale-125 transition-transform duration-700" />
                <s.icon className="h-10 w-10 text-[color:var(--sun)]" />
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-white/80 max-w-md">{s.desc}</p>
                <Link to="/solutions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold border-b border-white/40 pb-1 hover:border-white transition-colors">
                  {c.explore} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-eq pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-radial-brand border border-border p-10 lg:p-16 text-center">
            <div className="absolute top-6 right-8 h-6 w-6 rounded-full bg-[color:var(--sun)] animate-float" />
            <h2 className="text-[28px] lg:text-[44px] font-semibold max-w-2xl mx-auto leading-tight">
              {c.ctaTitle}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              {c.ctaDesc}
            </p>
            <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-8">
              {c.ctaBtn} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
