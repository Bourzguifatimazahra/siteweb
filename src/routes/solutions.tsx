import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, BatteryCharging, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Eqnovia" },
      { name: "description", content: "Solaire C&I et stockage d'énergie : deux solutions clés pour votre indépendance énergétique." },
    ],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  {
    icon: Sun,
    title: "Solaire C&I",
    subtitle: "Photovoltaïque commercial & industriel",
    desc: "Centrales toitures, ombrières et centrales au sol pour couvrir jusqu'à 60% de votre consommation électrique en autoconsommation.",
    benefits: [
      { icon: TrendingUp, label: "Économies immédiates sur la facture" },
      { icon: Shield, label: "Protection contre la volatilité des prix" },
      { icon: Zap, label: "Énergie verte, décarbonation ESG" },
    ],
  },
  {
    icon: BatteryCharging,
    title: "Stockage d'énergie",
    subtitle: "Battery Energy Storage Systems (BESS)",
    desc: "Solutions de stockage lithium pour lisser vos consommations, sécuriser vos process critiques et maximiser l'autoconsommation solaire.",
    benefits: [
      { icon: TrendingUp, label: "Peak shaving & arbitrage tarifaire" },
      { icon: Shield, label: "Continuité de service (backup)" },
      { icon: Zap, label: "Autoconsommation > 90%" },
    ],
  },
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-16 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">Nos solutions</p>
          <h1 className="text-[40px] lg:text-[64px] font-semibold leading-[1.05] max-w-3xl">
            Solaire et stockage : le duo gagnant.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Nous combinons production photovoltaïque et stockage d'énergie pour vous offrir
            une autonomie maximale et un retour sur investissement optimisé.
          </p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 grid gap-8">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 150}>
            <article className="rounded-3xl overflow-hidden border border-border bg-card">
              <div className="grid lg:grid-cols-2">
                <div className="bg-brand text-white p-10 lg:p-14 relative overflow-hidden">
                  <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                  <s.icon className="h-12 w-12 text-[color:var(--sun)]" />
                  <p className="mt-6 text-sm uppercase tracking-widest text-white/70">{s.subtitle}</p>
                  <h2 className="mt-2 text-[36px] font-semibold leading-tight">{s.title}</h2>
                  <p className="mt-4 text-white/85 leading-relaxed max-w-md">{s.desc}</p>
                </div>
                <div className="p-10 lg:p-14 space-y-5">
                  <h3 className="text-lg font-semibold text-brand">Bénéfices clés</h3>
                  {s.benefits.map((b) => (
                    <div key={b.label} className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-xl bg-primary-soft text-brand grid place-items-center shrink-0">
                        <b.icon className="h-5 w-5" />
                      </div>
                      <p className="text-foreground pt-2">{b.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-eq pb-24 text-center">
        <Reveal>
          <h2 className="text-[32px] lg:text-[44px] font-semibold">Quelle solution pour votre site ?</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Chaque site est unique. Contactez-nous pour une étude personnalisée.
          </p>
          <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-8">
            Étudier mon projet <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
