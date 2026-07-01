import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, LineChart, Wrench, Cog, Factory, School, Hotel,
  Building2, Tractor, HeartPulse, Sun, BatteryCharging, Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-solar.jpg";
import projAgadir from "@/assets/project-agadir.jpg";
import projCasa from "@/assets/project-casablanca.jpg";

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

const STATS = [
  { value: "20+", label: "années d'expertise" },
  { value: "12", label: "experts dédiés" },
  { value: "15+", label: "projets livrés" },
  { value: "25 MW", label: "installés & suivis" },
];

const SERVICES = [
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
];

const SECTORS = [
  { icon: Factory, label: "Industrie" },
  { icon: Building2, label: "Tertiaire" },
  { icon: Tractor, label: "Agriculture" },
  { icon: Hotel, label: "Hôtellerie" },
  { icon: School, label: "Éducation" },
  { icon: HeartPulse, label: "Santé" },
];

const PROJECTS = [
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
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-radial-brand">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-[color:var(--sun)]/15 blur-3xl animate-float" />
        </div>
        <div className="container-eq pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-[fade-up_0.8s_ease-out]">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-primary-soft text-brand text-xs font-semibold px-4 py-2 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Expert solaire & stockage · Maroc · Afrique
            </span>
            <h1 className="text-[42px] leading-[1.05] sm:text-[56px] lg:text-[72px] lg:leading-[1.02] font-semibold tracking-tight">
              L'énergie de demain.
              <span className="block text-brand">Aujourd'hui.</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Nous concevons, finançons, installons et exploitons vos centrales solaires
              et solutions de stockage — pour une énergie plus propre, plus fiable et plus rentable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary hover:btn-primary-hover">
                Lancez votre projet <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-outline hover:bg-primary-soft">
                Découvrir nos services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 animate-[scale-in_0.7s_ease-out]">
            <div className="relative rounded-[28px] overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Centrale solaire au Maroc"
                width={1920}
                height={1280}
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-background/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-brand grid place-items-center text-white">
                  <Sun className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Production annuelle moyenne</p>
                  <p className="text-base font-semibold">+42 GWh d'énergie propre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/60">
        <div className="container-eq py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center lg:text-left">
              <p className="text-4xl lg:text-5xl font-semibold text-brand">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-eq py-24">
        <div className="max-w-2xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">Nos services</p>
          <h2 className="text-[36px] lg:text-[48px] font-semibold leading-tight">
            Trois piliers pour votre transition énergétique.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="group h-full rounded-3xl border border-border bg-card p-8 hover:border-brand/40 hover:shadow-elegant transition-all duration-500">
                <div className="h-14 w-14 rounded-2xl bg-primary-soft grid place-items-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-3 transition-all">
                  En savoir plus <ArrowUpRight className="h-4 w-4" />
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
              <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">Nos secteurs</p>
              <h2 className="text-[36px] lg:text-[44px] font-semibold leading-tight">
                Une expertise multi-sectorielle.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              De l'industrie lourde aux établissements publics, nous adaptons nos solutions à
              chaque activité et contrainte de site.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SECTORS.map((s, i) => (
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
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">Projets phares</p>
            <h2 className="text-[36px] lg:text-[44px] font-semibold leading-tight">
              Des réalisations concrètes.
            </h2>
          </div>
          <Link to="/projets" className="btn-outline hover:bg-primary-soft self-start">
            Voir tous les projets <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
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
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    <div>
                      <p className="text-xs text-muted-foreground">Puissance</p>
                      <p className="text-lg font-semibold text-brand">{p.power}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Économies</p>
                      <p className="text-lg font-semibold text-brand">{p.savings}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">ROI</p>
                      <p className="text-lg font-semibold text-brand">{p.roi}</p>
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
          {[
            { icon: Sun, title: "Solaire C&I", desc: "Centrales photovoltaïques pour l'industrie et le tertiaire." },
            { icon: BatteryCharging, title: "Stockage d'énergie", desc: "Systèmes BESS pour autonomie et sécurisation de l'alimentation." },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="rounded-3xl bg-brand text-white p-10 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl group-hover:scale-125 transition-transform duration-700" />
                <s.icon className="h-10 w-10 text-[color:var(--sun)]" />
                <h3 className="mt-6 text-3xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-white/80 max-w-md">{s.desc}</p>
                <Link to="/solutions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold border-b border-white/40 pb-1 hover:border-white transition-colors">
                  Explorer <ArrowUpRight className="h-4 w-4" />
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
            <h2 className="text-[32px] lg:text-[48px] font-semibold max-w-2xl mx-auto leading-tight">
              Lancez votre projet solaire maintenant.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Parlons de votre site, vos consommations et vos objectifs.
              Nous vous répondons sous 48h avec une première estimation.
            </p>
            <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-8">
              Démarrer maintenant <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
