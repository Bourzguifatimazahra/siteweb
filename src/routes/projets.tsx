import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Zap, TrendingDown, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import projAgadir from "@/assets/project-agadir.jpg";
import projCasa from "@/assets/project-casablanca.jpg";
import heroImg from "@/assets/hero-solar.jpg";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — Eqnovia" },
      { name: "description", content: "Portfolio des centrales solaires réalisées par Eqnovia au Maroc et en Afrique." },
    ],
  }),
  component: ProjectsPage,
});

const COPY = {
  fr: {
    kicker: "Nos réalisations",
    title: "Des projets, des chiffres, des impacts.",
    intro:
      "Découvrez une sélection de centrales conçues, installées et exploitées par nos équipes à travers le Maroc et l'Afrique.",
    statPower: "Puissance",
    statSavings: "Économies",
    statRoi: "ROI",
    ctaTitle: "Le prochain projet, c'est le vôtre ?",
    ctaBtn: "Démarrer mon projet",
    projects: [
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
    ],
  },
  en: {
    kicker: "Our achievements",
    title: "Projects, numbers, impact.",
    intro:
      "Discover a selection of plants designed, installed and operated by our teams across Morocco and Africa.",
    statPower: "Power",
    statSavings: "Savings",
    statRoi: "ROI",
    ctaTitle: "Is the next project yours?",
    ctaBtn: "Start my project",
    projects: [
      {
        img: projAgadir,
        location: "Agadir, Morocco",
        title: "Agro-industrial rooftop plant",
        sector: "Agro-industry",
        power: "1.2 MWp",
        savings: "38%",
        roi: "5.2 years",
        desc: "Rooftop photovoltaic plant covering the electricity needs of an agricultural packaging unit.",
      },
      {
        img: projCasa,
        location: "Casablanca, Morocco",
        title: "Logistics canopy",
        sector: "Logistics",
        power: "2.5 MWp",
        savings: "42%",
        roi: "4.8 years",
        desc: "Solar canopy over a logistics warehouse parking lot with real-time production monitoring.",
      },
      {
        img: heroImg,
        location: "Southern Morocco",
        title: "Industrial ground-mounted plant",
        sector: "Industry",
        power: "5.0 MWp",
        savings: "48%",
        roi: "4.5 years",
        desc: "Large ground-mounted photovoltaic plant dedicated to an industrial site with a 2 MWh BESS.",
      },
    ],
  },
  es: {
    kicker: "Nuestros logros",
    title: "Proyectos, cifras, impacto.",
    intro:
      "Descubra una selección de plantas diseñadas, instaladas y operadas por nuestros equipos en Marruecos y África.",
    statPower: "Potencia",
    statSavings: "Ahorros",
    statRoi: "ROI",
    ctaTitle: "¿El próximo proyecto es el suyo?",
    ctaBtn: "Iniciar mi proyecto",
    projects: [
      {
        img: projAgadir,
        location: "Agadir, Marruecos",
        title: "Planta en techo agroindustrial",
        sector: "Agroindustria",
        power: "1.2 MWp",
        savings: "38%",
        roi: "5.2 años",
        desc: "Planta fotovoltaica en techo que cubre las necesidades eléctricas de una unidad de envasado agrícola.",
      },
      {
        img: projCasa,
        location: "Casablanca, Marruecos",
        title: "Sombrilla logística",
        sector: "Logística",
        power: "2.5 MWp",
        savings: "42%",
        roi: "4.8 años",
        desc: "Sombrilla solar sobre el estacionamiento de un almacén logístico con seguimiento de producción en tiempo real.",
      },
      {
        img: heroImg,
        location: "Sur de Marruecos",
        title: "Planta en suelo industrial",
        sector: "Industria",
        power: "5.0 MWp",
        savings: "48%",
        roi: "4.5 años",
        desc: "Gran planta fotovoltaica en suelo dedicada a un sitio industrial con BESS de 2 MWh.",
      },
    ],
  },
  zh: {
    kicker: "我们的成果",
    title: "项目、数据、影响力。",
    intro:
      "了解我们团队在摩洛哥及非洲各地设计、安装和运营的一系列电站。",
    statPower: "功率",
    statSavings: "节省",
    statRoi: "投资回收期",
    ctaTitle: "下一个项目会是您的吗？",
    ctaBtn: "启动我的项目",
    projects: [
      {
        img: projAgadir,
        location: "摩洛哥阿加迪尔",
        title: "农工业屋顶电站",
        sector: "农工业",
        power: "1.2 兆瓦峰值",
        savings: "38%",
        roi: "5.2 年",
        desc: "屋顶光伏电站，满足农产品包装厂的用电需求。",
      },
      {
        img: projCasa,
        location: "摩洛哥卡萨布兰卡",
        title: "物流停车棚",
        sector: "物流",
        power: "2.5 兆瓦峰值",
        savings: "42%",
        roi: "4.8 年",
        desc: "物流仓库停车场太阳能停车棚，配备实时发电监控系统。",
      },
      {
        img: heroImg,
        location: "摩洛哥南部",
        title: "工业地面电站",
        sector: "工业",
        power: "5.0 兆瓦峰值",
        savings: "48%",
        roi: "4.5 年",
        desc: "为工业场地打造的大型地面光伏电站，配备 2 兆瓦时储能系统（BESS）。",
      },
    ],
  },
  ar: {
    kicker: "إنجازاتنا",
    title: "مشاريع، أرقام، تأثير.",
    intro:
      "اكتشف مجموعة من المحطات التي صممتها فرقنا وركبتها وتشغلها في المغرب وأفريقيا.",
    statPower: "القدرة",
    statSavings: "التوفير",
    statRoi: "مدة الاسترداد",
    ctaTitle: "هل المشروع القادم هو مشروعك؟",
    ctaBtn: "ابدأ مشروعي",
    projects: [
      {
        img: projAgadir,
        location: "أكادير، المغرب",
        title: "محطة سطحية زراعية صناعية",
        sector: "الصناعة الزراعية",
        power: "1.2 ميغاواط ذروة",
        savings: "38%",
        roi: "5.2 سنوات",
        desc: "محطة كهروضوئية على السطح تغطي الاحتياجات الكهربائية لوحدة تعبئة زراعية.",
      },
      {
        img: projCasa,
        location: "الدار البيضاء، المغرب",
        title: "مظلة لوجستية",
        sector: "اللوجستيك",
        power: "2.5 ميغاواط ذروة",
        savings: "42%",
        roi: "4.8 سنوات",
        desc: "مظلة شمسية فوق موقف سيارات مستودع لوجستي مع نظام مراقبة الإنتاج في الوقت الفعلي.",
      },
      {
        img: heroImg,
        location: "جنوب المغرب",
        title: "محطة أرضية صناعية",
        sector: "الصناعة",
        power: "5.0 ميغاواط ذروة",
        savings: "48%",
        roi: "4.5 سنوات",
        desc: "محطة كهروضوئية أرضية كبيرة مخصصة لموقع صناعي مع نظام تخزين طاقة بسعة 2 ميغاواط ساعة.",
      },
    ],
  },
} as const;

function ProjectsPage() {
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
        {c.projects.map((p, i) => (
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
                  <Stat icon={Zap} label={c.statPower} value={p.power} />
                  <Stat icon={TrendingDown} label={c.statSavings} value={p.savings} />
                  <Stat icon={Clock} label={c.statRoi} value={p.roi} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-eq pb-24 text-center">
        <Reveal>
          <h2 className="text-[28px] lg:text-[40px] font-semibold">{c.ctaTitle}</h2>
          <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-8">{c.ctaBtn}</Link>
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
