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
  zh: {
    kicker: "我们的服务",
    title: "从构思到运营的全方位服务。",
    subtitle: "三大服务支柱，同一标准：交付高效、可靠且长期盈利的太阳能电站。",
    services: [
      {
        icon: LineChart,
        title: "研究与融资",
        desc: "我们分析您的用电情况，设计您的电站规模，并构建最佳的融资方案。",
        features: ["能源审计", "技术经济研究", "PPA / 租赁 / 自筹资金", "可融资商业计划"],
      },
      {
        icon: Wrench,
        title: "供货与安装",
        desc: "我们精选性能最佳的设备，并全权负责整个交钥匙工程。",
        features: ["一级组件与逆变器采购", "详细工程设计", "认证的 EPC 安装", "调试与并网"],
      },
      {
        icon: Cog,
        title: "运营与维护",
        desc: "我们保证您的设施在整个使用寿命期间的性能表现。",
        features: ["24/7 实时监控", "预防性和纠正性维护", "清洁与无人机检查", "月度性能报告"],
      },
    ],
    ctaTitle: "有项目构想？让我们聊聊。",
    ctaText: "我们的团队将在 48 小时内回复初步评估结果。",
    ctaBtn: "申请研究",
  },
  ar: {
    kicker: "خدماتنا",
    title: "عرض متكامل، من الفكرة إلى التشغيل.",
    subtitle: "ثلاث ركائز للخدمات، نفس المتطلبات: تقديم محطات شمسية فعالة وموثوقة ومربحة على المدى الطويل.",
    services: [
      {
        icon: LineChart,
        title: "الدراسة والتمويل",
        desc: "نحلل استهلاككم، ونصمم محطتكم، ونهيكل أفضل ترتيب مالي.",
        features: ["تدقيق طاقي", "دراسة تقنية-اقتصادية", "PPA / تأجير / تمويل ذاتي", "خطة عمل قابلة للتمويل"],
      },
      {
        icon: Wrench,
        title: "التوريد والتركيب",
        desc: "نختار المعدات الأكثر كفاءة وندير كامل الورش بشكل جاهز.",
        features: ["توريد ألواح وعواكس من الفئة الأولى", "هندسة تفصيلية", "تركيب EPC معتمد", "التشغيل والربط بالشبكة"],
      },
      {
        icon: Cog,
        title: "التشغيل والصيانة",
        desc: "نضمن أداء منشأتكم طوال عمرها الافتراضي.",
        features: ["إشراف فوري على مدار الساعة", "صيانة وقائية وتصحيحية", "تنظيف وفحوصات بالطائرات المسيّرة", "تقرير أداء شهري"],
      },
    ],
    ctaTitle: "لديكم مشروع في الذهن؟ لنتحدث.",
    ctaText: "سيتواصل معكم فريقنا خلال 48 ساعة بتقييم أولي.",
    ctaBtn: "طلب دراسة",
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
