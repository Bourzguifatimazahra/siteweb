import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Factory, Building2, Tractor, Hotel, School, HeartPulse,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/secteurs")({
  head: () => ({
    meta: [
      { title: "Secteurs — Eqnovia" },
      {
        name: "description",
        content:
          "Une expertise multi-sectorielle : de l'industrie lourde aux établissements publics, nous adaptons nos solutions solaires à chaque activité et contrainte de site.",
      },
    ],
  }),
  component: SecteursPage,
});

const SECTORS = [
  {
    icon: Factory,
    fr: "Industrie",
    en: "Industry",
    es: "Industria",
    zh: "工业",
    ar: "الصناعة",
    frDesc: "Usines, sites de production et chaînes industrielles : nous dimensionnons des centrales toitures ou ombrières adaptées à vos process et à vos pics de consommation.",
    enDesc: "Factories, production sites and industrial chains: we design rooftop or canopy plants tailored to your processes and consumption peaks.",
    esDesc: "Fábricas, sitios de producción y cadenas industriales: dimensionamos centrales en techo o aparcamientos adaptadas a sus procesos y picos de consumo.",
    zhDesc: "工厂、生产场地和工业链：我们设计适合您工艺流程和用电高峰的屋顶或车棚电站。",
    arDesc: "المصانع ومواقع الإنتاج والسلاسل الصناعية: نصمم محطات على الأسطح أو المظلات متكيفة مع عملياتكم وذروة استهلاككم.",
  },
  {
    icon: Building2,
    fr: "Tertiaire",
    en: "Tertiary",
    es: "Terciario",
    zh: "服务业",
    ar: "القطاع الثالث",
    frDesc: "Bureaux, centres commerciaux et bâtiments tertiaires : réduisez vos charges fixes grâce à l'autoconsommation solaire et valorisez votre patrimoine immobilier.",
    enDesc: "Offices, shopping centers and tertiary buildings: reduce your fixed costs through solar self-consumption and enhance your real estate assets.",
    esDesc: "Oficinas, centros comerciales y edificios terciarios: reduzca sus costes fijos mediante el autoconsumo solar y valore su patrimonio inmobiliario.",
    zhDesc: "办公楼、购物中心和服务业建筑：通过太阳能自用电降低固定成本，提升您的房地产资产价值。",
    arDesc: "المكاتب ومراكز التسوق والمباني الثالثة: قللوا تكاليفكم الثابتة عبر الاستهلاك الذاتي للطاقة الشمسية وعززوا أصولكم العقارية.",
  },
  {
    icon: Tractor,
    fr: "Agriculture",
    en: "Agriculture",
    es: "Agricultura",
    zh: "农业",
    ar: "الفلاحة",
    frDesc: "Exploitations agricoles, serres et unités de transformation : profitez de grandes surfaces pour installer des centrales au sol ou sur toitures agricoles.",
    enDesc: "Farms, greenhouses and processing units: take advantage of large areas to install ground-mounted or agricultural rooftop plants.",
    esDesc: "Explotaciones agrícolas, invernaderos y unidades de transformación: aproveche grandes superficies para instalar plantas en suelo o en techos agrícolas.",
    zhDesc: "农场、温室和加工单位：利用大面积场地安装地面或农业屋顶电站。",
    arDesc: "المزارع والدفيئات ووحدات التحويل: استفيدوا من المساحات الكبيرة لتركيب محطات أرضية أو على أسطح زراعية.",
  },
  {
    icon: Hotel,
    fr: "Hôtellerie",
    en: "Hospitality",
    es: "Hotelería",
    zh: "酒店业",
    ar: "الفندقة",
    frDesc: "Hôtels, resorts et campings : sécurisez votre alimentation électrique, réduisez votre facture énergétique et renforcez votre engagement RSE auprès de vos clients.",
    enDesc: "Hotels, resorts and campsites: secure your power supply, reduce your energy bill and strengthen your CSR commitment to your guests.",
    esDesc: "Hoteles, resorts y campings: asegure su suministro eléctrico, reduzca su factura energética y refuerce su compromiso RSE ante sus clientes.",
    zhDesc: "酒店、度假村和露营地：保障电力供应，降低能源账单，并向客户展示您的企业社会责任承诺。",
    arDesc: "الفنادق والمنتجعات والمخيمات: أمّنوا تغذيتكم الكهربائية وقللوا فاتورتكم الطاقية وعززوا التزامكم بالمسؤولية الاجتماعية تجاه زبائنكم.",
  },
  {
    icon: School,
    fr: "Éducation",
    en: "Education",
    es: "Educación",
    zh: "教育",
    ar: "التعليم",
    frDesc: "Écoles, universités et centres de formation : équipez vos bâtiments de panneaux photovoltaïques pour former les étudiants aux énergies renouvelables tout en réduisant vos coûts.",
    enDesc: "Schools, universities and training centers: equip your buildings with photovoltaic panels to train students in renewable energies while reducing your costs.",
    esDesc: "Colegios, universidades y centros de formación: equipe sus edificios con paneles fotovoltaicos para formar a los estudiantes en energías renovables mientras reduce sus costes.",
    zhDesc: "学校、大学和培训中心：为您的建筑配备光伏板，在培养学生可再生能源知识的同时降低您的成本。",
    arDesc: "المدارس والجامعات ومراكز التكوين: زودوا مبانيكم بألواح كهروضوئية لتدريب الطلاب على الطاقات المتجددة مع تقليل تكاليفكم.",
  },
  {
    icon: HeartPulse,
    fr: "Santé",
    en: "Healthcare",
    es: "Salud",
    zh: "医疗健康",
    ar: "الصحة",
    frDesc: "Hôpitaux, cliniques et centres de santé : garantissez une alimentation électrique fiable et sécurisée pour vos équipements médicaux critiques grâce au solaire couplé au stockage.",
    enDesc: "Hospitals, clinics and health centers: guarantee a reliable and secure power supply for your critical medical equipment through solar coupled with storage.",
    esDesc: "Hospitales, clínicas y centros de salud: garantice un suministro eléctrico fiable y seguro para sus equipos médicos críticos mediante solar acoplado a almacenamiento.",
    zhDesc: "医院、诊所和健康中心：通过太阳能耦合储能，为您的关键医疗设备提供可靠安全的电力供应。",
    arDesc: "المستشفيات والعيادات ومراكز الصحة: ضمنوا تغذية كهربائية موثوقة وآمنة لأجهزتكم الطبية الحرجة عبر الشمس coupled مع التخزين.",
  },
];

const COPY = {
  fr: {
    kicker: "Nos secteurs",
    title: "Une expertise multi-sectorielle.",
    desc: "De l'industrie lourde aux établissements publics, nous adaptons nos solutions à chaque activité et contrainte de site.",
    ctaTitle: "Votre secteur n'est pas listé ?",
    ctaText: "Nous étudions chaque projet avec la même exigence, quel que soit votre domaine d'activité.",
    ctaBtn: "Discutons de votre projet",
  },
  en: {
    kicker: "Our sectors",
    title: "Multi-sector expertise.",
    desc: "From heavy industry to public institutions, we adapt our solutions to each activity and site constraint.",
    ctaTitle: "Your sector is not listed?",
    ctaText: "We study every project with the same standard, regardless of your field of activity.",
    ctaBtn: "Let's discuss your project",
  },
  es: {
    kicker: "Nuestros sectores",
    title: "Una experiencia multisectorial.",
    desc: "Desde la industria pesada hasta las instituciones públicas, adaptamos nuestras soluciones a cada actividad y limitación del sitio.",
    ctaTitle: "¿Su sector no aparece en la lista?",
    ctaText: "Estudiamos cada proyecto con el mismo estándar, independientemente de su campo de actividad.",
    ctaBtn: "Hablemos de su proyecto",
  },
  zh: {
    kicker: "我们的行业",
    title: "多行业专业能力。",
    desc: "从重工业到公共机构，我们根据每种活动和现场限制调整解决方案。",
    ctaTitle: "您的行业未列出？",
    ctaText: "我们以同样的标准研究每个项目，无论您的活动领域如何。",
    ctaBtn: "讨论您的项目",
  },
  ar: {
    kicker: "قطاعاتنا",
    title: "خبرة متعددة القطاعات.",
    desc: "من الصناعة الثقيلة إلى المؤسسات العمومية، نُكيّف حلولنا مع كل نشاط وقيود كل موقع.",
    ctaTitle: "قطاعكم غير مدرج؟",
    ctaText: "ندرس كل مشروع بنفس المعيار، بغض النظر عن مجال نشاطكم.",
    ctaBtn: "لنتحدث عن مشروعكم",
  },
} as const;

function SecteursPage() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-eq pt-16 pb-12 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">{c.kicker}</p>
          <h1 className="text-[36px] lg:text-[56px] font-semibold leading-[1.05] max-w-3xl">
            {c.title}
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl">
            {c.desc}
          </p>
        </Reveal>
      </section>

      {/* SECTORS GRID */}
      <section className="container-eq pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((s, i) => (
            <Reveal key={s.fr} delay={i * 100}>
              <article className="group h-full rounded-3xl border border-border bg-card p-8 hover:border-brand/40 hover:shadow-elegant transition-all duration-500">
                <div className="h-14 w-14 rounded-2xl bg-primary-soft grid place-items-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  {lang === "fr" && s.fr}
                  {lang === "en" && s.en}
                  {lang === "es" && s.es}
                  {lang === "zh" && s.zh}
                  {lang === "ar" && s.ar}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {lang === "fr" && s.frDesc}
                  {lang === "en" && s.enDesc}
                  {lang === "es" && s.esDesc}
                  {lang === "zh" && s.zhDesc}
                  {lang === "ar" && s.arDesc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary/40 py-24">
        <div className="container-eq">
          <div className="max-w-2xl">
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">Pourquoi Eqnovia ?</p>
            <h2 className="text-[32px] lg:text-[40px] font-semibold leading-tight">
              Une approche sur-mesure pour chaque secteur.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Quelle que soit votre activité, nous analysons vos contraintes spécifiques — réglementaires, techniques, opérationnelles — pour concevoir une solution solaire parfaitement adaptée.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Audit énergétique dédié", desc: "Analyse fine de vos consommations et de vos profils de charge par secteur d'activité." },
              { title: "Ingénierie adaptée", desc: "Dimensionnement et choix d'équipements optimisés pour les contraintes de votre site." },
              { title: "Financement structuré", desc: "PPA, leasing, autofinancement : nous adaptons le montage à votre secteur et votre taille." },
              { title: "Exploitation sécurisée", desc: "Supervision 24/7 et maintenance préventive pour garantir la performance dans la durée." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="rounded-2xl bg-background border border-border p-6">
                  <CheckCircle2 className="h-6 w-6 text-brand shrink-0" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-eq pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-radial-brand border border-border p-10 lg:p-16 text-center">
            <h2 className="text-[28px] lg:text-[44px] font-semibold max-w-2xl mx-auto leading-tight">
              {c.ctaTitle}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              {c.ctaText}
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
