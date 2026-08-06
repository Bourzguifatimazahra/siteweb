import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Eqnovia" },
      { name: "description", content: "Découvrez Eqnovia : mission, valeurs, équipe et engagement pour une énergie plus propre au Maroc et en Afrique." },
    ],
  }),
  component: AboutPage,
});

const COPY = {
  fr: {
    kicker: "Qui sommes-nous",
    title: "L'expertise solaire au service de l'industrie africaine.",
    intro: "Fondée par des ingénieurs passionnés, Eqnovia accompagne les entreprises marocaines et africaines dans leur transition énergétique — de l'étude à l'exploitation.",
    values: [
      { icon: Target, title: "Mission", desc: "Accélérer la transition énergétique de l'industrie africaine avec des solutions solaires bancables et durables." },
      { icon: Eye, title: "Vision", desc: "Devenir le partenaire de référence en Afrique pour l'énergie solaire et le stockage à l'échelle industrielle." },
      { icon: Heart, title: "Valeurs", desc: "Rigueur d'ingénieur, exigence de qualité et transparence à chaque étape du projet." },
    ],
    historyKicker: "Notre histoire",
    historyTitle: "20 ans d'expertise, 12 experts, une seule ambition.",
    historyText: "Depuis notre création, nous avons développé une approche unique combinant expertise technique, ingénierie financière et exploitation opérationnelle. Chaque projet est conçu pour maximiser votre retour sur investissement.",
    bullets: [
      "Ingénieurs et techniciens certifiés",
      "Approche end-to-end : étude, EPC, O&M",
      "Financement structuré adapté à chaque profil",
      "Supervision continue depuis notre centre de contrôle",
    ],
    ctaTitle: "Envie de travailler avec nous ?",
    ctaText: "Discutons de votre projet et voyons comment nous pouvons vous accompagner.",
    ctaBtn: "Nous contacter",
  },
  en: {
    kicker: "About us",
    title: "Solar expertise serving African industry.",
    intro: "Founded by passionate engineers, Eqnovia supports Moroccan and African companies in their energy transition — from study to operation.",
    values: [
      { icon: Target, title: "Mission", desc: "Accelerate the energy transition of African industry with bankable, sustainable solar solutions." },
      { icon: Eye, title: "Vision", desc: "Become the reference partner in Africa for solar energy and storage at industrial scale." },
      { icon: Heart, title: "Values", desc: "Engineering rigor, quality standards and transparency at every step of the project." },
    ],
    historyKicker: "Our history",
    historyTitle: "20 years of expertise, 12 experts, one single ambition.",
    historyText: "Since our founding, we have developed a unique approach combining technical expertise, financial engineering and operational management. Every project is designed to maximize your return on investment.",
    bullets: [
      "Certified engineers and technicians",
      "End-to-end approach: study, EPC, O&M",
      "Structured financing adapted to each profile",
      "Continuous supervision from our control center",
    ],
    ctaTitle: "Want to work with us?",
    ctaText: "Let's discuss your project and see how we can support you.",
    ctaBtn: "Contact us",
  },
  es: {
    kicker: "Quiénes somos",
    title: "La experiencia solar al servicio de la industria africana.",
    intro: "Fundada por ingenieros apasionados, Eqnovia acompaña a las empresas marroquíes y africanas en su transición energética, desde el estudio hasta la explotación.",
    values: [
      { icon: Target, title: "Misión", desc: "Acelerar la transición energética de la industria africana con soluciones solares bancables y sostenibles." },
      { icon: Eye, title: "Visión", desc: "Convertirnos en el socio de referencia en África para la energía solar y el almacenamiento a escala industrial." },
      { icon: Heart, title: "Valores", desc: "Rigor de ingeniero, exigencia de calidad y transparencia en cada etapa del proyecto." },
    ],
    historyKicker: "Nuestra historia",
    historyTitle: "20 años de experiencia, 12 expertos, una sola ambición.",
    historyText: "Desde nuestra creación, hemos desarrollado un enfoque único que combina experiencia técnica, ingeniería financiera y explotación operativa. Cada proyecto está diseñado para maximizar su retorno de inversión.",
    bullets: [
      "Ingenieros y técnicos certificados",
      "Enfoque integral: estudio, EPC, O&M",
      "Financiación estructurada adaptada a cada perfil",
      "Supervisión continua desde nuestro centro de control",
    ],
    ctaTitle: "¿Quieres trabajar con nosotros?",
    ctaText: "Hablemos de su proyecto y veamos cómo podemos acompañarlo.",
    ctaBtn: "Contáctanos",
  },
} as const;

function AboutPage() {
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
          <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
            {c.intro}
          </p>
        </Reveal>
      </section>

      <section className="container-eq pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {c.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="h-12 w-12 rounded-2xl bg-primary-soft text-brand grid place-items-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="container-eq max-w-3xl">
          <Reveal>
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">{c.historyKicker}</p>
            <h2 className="text-[28px] lg:text-[40px] font-semibold leading-tight">
              {c.historyTitle}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {c.historyText}
            </p>
            <ul className="mt-8 space-y-3">
              {c.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-eq py-24 text-center">
        <Reveal>
          <h2 className="text-[28px] lg:text-[40px] font-semibold">{c.ctaTitle}</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {c.ctaText}
          </p>
          <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-8">{c.ctaBtn}</Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
