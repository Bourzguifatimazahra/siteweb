import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Eqnovia" },
      { name: "description", content: "Découvrez Eqnovia : mission, valeurs, équipe et engagement pour une énergie plus propre au Maroc et en Afrique." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, title: "Mission", desc: "Accélérer la transition énergétique de l'industrie africaine avec des solutions solaires bancables et durables." },
  { icon: Eye, title: "Vision", desc: "Devenir le partenaire de référence en Afrique pour l'énergie solaire et le stockage à l'échelle industrielle." },
  { icon: Heart, title: "Valeurs", desc: "Rigueur d'ingénieur, exigence de qualité et transparence à chaque étape du projet." },
];



function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-16 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">Qui sommes-nous</p>
          <h1 className="text-[36px] lg:text-[56px] font-semibold leading-[1.05] max-w-3xl">
            L'expertise solaire au service de l'industrie africaine.
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
            Fondée par des ingénieurs passionnés, Eqnovia accompagne les entreprises marocaines
            et africaines dans leur transition énergétique — de l'étude à l'exploitation.
          </p>
        </Reveal>
      </section>

      <section className="container-eq pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
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
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">Notre histoire</p>
            <h2 className="text-[28px] lg:text-[40px] font-semibold leading-tight">
              20 ans d'expertise, 12 experts, une seule ambition.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Depuis notre création, nous avons développé une approche unique combinant expertise
              technique, ingénierie financière et exploitation opérationnelle. Chaque projet est
              conçu pour maximiser votre retour sur investissement.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Ingénieurs et techniciens certifiés",
                "Approche end-to-end : étude, EPC, O&M",
                "Financement structuré adapté à chaque profil",
                "Supervision continue depuis notre centre de contrôle",
              ].map((item) => (
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
          <h2 className="text-[28px] lg:text-[40px] font-semibold">Envie de travailler avec nous ?</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Discutons de votre projet et voyons comment nous pouvons vous accompagner.
          </p>
          <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-8">Nous contacter</Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
