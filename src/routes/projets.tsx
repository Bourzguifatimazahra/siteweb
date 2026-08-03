import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Zap, TrendingDown, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import projAgadir from "@/assets/project-agadir.jpg";
import projCasa from "@/assets/project-casablanca.jpg";
import heroImg from "@/assets/hero-solar.jpg";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — Eqnovia" },
      { name: "description", content: "Portfolio des centrales solaires réalisées par Eqnovia au Maroc et en Afrique." },
    ],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  {
    img: projAgadir,
    location: "Agadir, Maroc",
    title: "Centrale toiture agro-industrielle",
    sector: "Agro-industrie",
    power: "1.2 MWc",
    savings: "38%",
    roi: "5.2 ans",
    desc: "Centrale photovoltaïque en toiture couvrant les besoins électriques d'une unité de conditionnement agricole.",
  },
  {
    img: projCasa,
    location: "Casablanca, Maroc",
    title: "Ombrière logistique",
    sector: "Logistique",
    power: "2.5 MWc",
    savings: "42%",
    roi: "4.8 ans",
    desc: "Ombrière solaire sur parking d'entrepôt logistique avec système de suivi de production en temps réel.",
  },
  {
    img: heroImg,
    location: "Sud du Maroc",
    title: "Centrale au sol industrielle",
    sector: "Industrie",
    power: "5.0 MWc",
    savings: "48%",
    roi: "4.5 ans",
    desc: "Grande centrale photovoltaïque au sol dédiée à un site industriel avec BESS de 2 MWh.",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-16 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">Nos réalisations</p>
          <h1 className="text-[36px] lg:text-[56px] font-semibold leading-[1.05] max-w-3xl">
            Des projets, des chiffres, des impacts.
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl">
            Découvrez une sélection de centrales conçues, installées et exploitées par nos équipes
            à travers le Maroc et l'Afrique.
          </p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 grid gap-8">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <article className="rounded-3xl overflow-hidden border border-border bg-card grid lg:grid-cols-2 hover:shadow-elegant transition-all duration-500">
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur text-xs font-semibold px-3 py-1.5 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </span>
              </div>
              <div className="p-10 flex flex-col">
                <p className="text-sm uppercase tracking-widest text-brand font-semibold">{p.sector}</p>
                <h2 className="mt-2 text-[24px] font-semibold leading-tight">{p.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-auto pt-8 grid grid-cols-3 gap-4 border-t border-border">
                  <Stat icon={Zap} label="Puissance" value={p.power} />
                  <Stat icon={TrendingDown} label="Économies" value={p.savings} />
                  <Stat icon={Clock} label="ROI" value={p.roi} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-eq pb-24 text-center">
        <Reveal>
          <h2 className="text-[28px] lg:text-[40px] font-semibold">Le prochain projet, c'est le vôtre ?</h2>
          <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-8">Démarrer mon projet</Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div>
      <Icon className="h-4 w-4 text-muted-foreground" />
      <p className="mt-2 text-xs text-muted-foreground">{label}</p>
      <p className="text-base font-semibold text-brand">{value}</p>
    </div>
  );
}
