import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, BatteryCharging, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Eqnovia" },
      { name: "description", content: "Solaire C&I et stockage d'énergie : deux solutions clés pour votre indépendance énergétique." },
    ],
  }),
  component: SolutionsPage,
});

const COPY = {
  fr: {
    kicker: "Nos solutions",
    title: "Solaire et stockage : le duo gagnant.",
    intro:
      "Nous combinons production photovoltaïque et stockage d'énergie pour vous offrir une autonomie maximale et un retour sur investissement optimisé.",
    benefitsTitle: "Bénéfices clés",
    ctaTitle: "Quelle solution pour votre site ?",
    ctaText: "Chaque site est unique. Contactez-nous pour une étude personnalisée.",
    ctaBtn: "Étudier mon projet",
    solutions: [
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
    ],
  },
  en: {
    kicker: "Our solutions",
    title: "Solar and storage: the winning duo.",
    intro:
      "We combine photovoltaic production and energy storage to offer you maximum autonomy and an optimized return on investment.",
    benefitsTitle: "Key benefits",
    ctaTitle: "Which solution for your site?",
    ctaText: "Every site is unique. Contact us for a personalized study.",
    ctaBtn: "Study my project",
    solutions: [
      {
        icon: Sun,
        title: "Solar C&I",
        subtitle: "Commercial & industrial photovoltaic",
        desc: "Rooftop plants, canopies and ground-mounted plants to cover up to 60% of your electricity consumption through self-consumption.",
        benefits: [
          { icon: TrendingUp, label: "Immediate savings on your bill" },
          { icon: Shield, label: "Protection against price volatility" },
          { icon: Zap, label: "Green energy, ESG decarbonization" },
        ],
      },
      {
        icon: BatteryCharging,
        title: "Energy storage",
        subtitle: "Battery Energy Storage Systems (BESS)",
        desc: "Lithium storage solutions to smooth your consumption, secure your critical processes and maximize solar self-consumption.",
        benefits: [
          { icon: TrendingUp, label: "Peak shaving & tariff arbitrage" },
          { icon: Shield, label: "Service continuity (backup)" },
          { icon: Zap, label: "Self-consumption > 90%" },
        ],
      },
    ],
  },
  es: {
    kicker: "Nuestras soluciones",
    title: "Solar y almacenamiento: el dúo ganador.",
    intro:
      "Combinamos producción fotovoltaica y almacenamiento de energía para ofrecerle una autonomía máxima y un retorno de inversión optimizado.",
    benefitsTitle: "Beneficios clave",
    ctaTitle: "¿Qué solución para su sitio?",
    ctaText: "Cada sitio es único. Contáctenos para un estudio personalizado.",
    ctaBtn: "Estudiar mi proyecto",
    solutions: [
      {
        icon: Sun,
        title: "Solar C&I",
        subtitle: "Fotovoltaico comercial e industrial",
        desc: "Plantas en techo, sombrillas y plantas en suelo para cubrir hasta el 60% de su consumo eléctrico mediante autoconsumo.",
        benefits: [
          { icon: TrendingUp, label: "Ahorros inmediatos en la factura" },
          { icon: Shield, label: "Protección contra la volatilidad de precios" },
          { icon: Zap, label: "Energía verde, descarbonización ESG" },
        ],
      },
      {
        icon: BatteryCharging,
        title: "Almacenamiento de energía",
        subtitle: "Battery Energy Storage Systems (BESS)",
        desc: "Soluciones de almacenamiento de litio para suavizar sus consumos, asegurar sus procesos críticos y maximizar el autoconsumo solar.",
        benefits: [
          { icon: TrendingUp, label: "Peak shaving y arbitraje tarifario" },
          { icon: Shield, label: "Continuidad de servicio (backup)" },
          { icon: Zap, label: "Autoconsumo > 90%" },
        ],
      },
    ],
  },
} as const;

function SolutionsPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-16 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">{c.kicker}</p>
          <h1 className="text-[36px] lg:text-[56px] font-semibold leading-[1.05] max-w-3xl">
            {c.title}
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl">
            {c.intro}
          </p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 grid gap-8">
        {c.solutions.map((s, i) => (
          <Reveal key={s.title} delay={i * 150}>
            <article className="rounded-3xl overflow-hidden border border-border bg-card">
              <div className="grid lg:grid-cols-2">
                <div className="bg-brand text-white p-10 lg:p-14 relative overflow-hidden">
                  <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                  <s.icon className="h-12 w-12 text-[color:var(--sun)]" />
                  <p className="mt-6 text-sm uppercase tracking-widest text-white/70">{s.subtitle}</p>
                  <h2 className="mt-2 text-[32px] font-semibold leading-tight">{s.title}</h2>
                  <p className="mt-4 text-white/85 leading-relaxed max-w-md">{s.desc}</p>
                </div>
                <div className="p-10 lg:p-14 space-y-5">
                  <h3 className="text-lg font-semibold text-brand">{c.benefitsTitle}</h3>
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
          <h2 className="text-[28px] lg:text-[40px] font-semibold">{c.ctaTitle}</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {c.ctaText}
          </p>
          <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-8">
            {c.ctaBtn} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
