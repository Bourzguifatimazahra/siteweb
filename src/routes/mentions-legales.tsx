import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Eqnovia" },
      { name: "description", content: "Mentions légales du site Eqnovia." },
    ],
  }),
  component: Page,
});

const COPY = {
  fr: {
    heading: "Mentions légales",
    updated: "Dernière mise à jour",
    editorTitle: "Éditeur du site",
    editorDesc: "Société marocaine spécialisée dans les solutions solaires photovoltaïques et le stockage d'énergie.",
    hq: "Siège social : Casablanca, Maroc",
    email: "Email : contact@eqnovia.com",
    phone: "Téléphone : +212 6 55 56 34 04",
    directorTitle: "Directeur de la publication",
    directorBody: "Le directeur de la publication est le représentant légal d'Eqnovia.",
    hostingTitle: "Hébergement",
    hostingBody: "Ce site est hébergé sur une infrastructure Cloud sécurisée. Les données sont stockées dans des centres de données conformes aux normes internationales de sécurité.",
    ipTitle: "Propriété intellectuelle",
    ipBody: "L'ensemble du contenu du site (textes, images, logos, graphismes, vidéos) est la propriété exclusive d'Eqnovia ou de ses partenaires, et est protégé par la législation marocaine et internationale sur la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation est strictement interdite sans autorisation écrite préalable.",
    liabilityTitle: "Responsabilité",
    liabilityBody: "Eqnovia s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur son site, mais ne peut garantir l'absence d'erreurs ou d'omissions. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.",
    lawTitle: "Loi applicable",
    lawBody: "Les présentes mentions légales sont soumises au droit marocain. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux de Casablanca.",
    contactTitle: "Contact",
    contactBody: "Pour toute question relative aux mentions légales, contactez-nous à",
  },
  en: {
    heading: "Legal Notice",
    updated: "Last updated",
    editorTitle: "Site publisher",
    editorDesc: "Moroccan company specialized in solar photovoltaic solutions and energy storage.",
    hq: "Headquarters: Casablanca, Morocco",
    email: "Email: contact@eqnovia.com",
    phone: "Phone: +212 6 55 56 34 04",
    directorTitle: "Publication director",
    directorBody: "The publication director is Eqnovia's legal representative.",
    hostingTitle: "Hosting",
    hostingBody: "This site is hosted on a secure Cloud infrastructure. Data is stored in data centers compliant with international security standards.",
    ipTitle: "Intellectual property",
    ipBody: "All content on the site (text, images, logos, graphics, videos) is the exclusive property of Eqnovia or its partners, and is protected by Moroccan and international intellectual property legislation. Any reproduction, representation, modification or use is strictly prohibited without prior written authorization.",
    liabilityTitle: "Liability",
    liabilityBody: "Eqnovia strives to ensure the accuracy and up-to-date nature of the information published on its site, but cannot guarantee the absence of errors or omissions. The user acknowledges using this information at their own risk.",
    lawTitle: "Applicable law",
    lawBody: "This legal notice is governed by Moroccan law. Any dispute relating to its interpretation or execution falls under the exclusive jurisdiction of the Casablanca courts.",
    contactTitle: "Contact",
    contactBody: "For any question regarding this legal notice, contact us at",
  },
  es: {
    heading: "Aviso legal",
    updated: "Última actualización",
    editorTitle: "Editor del sitio",
    editorDesc: "Empresa marroquí especializada en soluciones solares fotovoltaicas y almacenamiento de energía.",
    hq: "Sede social: Casablanca, Marruecos",
    email: "Correo: contact@eqnovia.com",
    phone: "Teléfono: +212 6 55 56 34 04",
    directorTitle: "Director de la publicación",
    directorBody: "El director de la publicación es el representante legal de Eqnovia.",
    hostingTitle: "Alojamiento",
    hostingBody: "Este sitio está alojado en una infraestructura Cloud segura. Los datos se almacenan en centros de datos conformes con los estándares internacionales de seguridad.",
    ipTitle: "Propiedad intelectual",
    ipBody: "Todo el contenido del sitio (textos, imágenes, logotipos, gráficos, videos) es propiedad exclusiva de Eqnovia o de sus socios, y está protegido por la legislación marroquí e internacional sobre propiedad intelectual. Queda estrictamente prohibida cualquier reproducción, representación, modificación o explotación sin autorización previa por escrito.",
    liabilityTitle: "Responsabilidad",
    liabilityBody: "Eqnovia se esfuerza por garantizar la exactitud y actualización de la información difundida en su sitio, pero no puede garantizar la ausencia de errores u omisiones. El usuario reconoce utilizar esta información bajo su exclusiva responsabilidad.",
    lawTitle: "Ley aplicable",
    lawBody: "El presente aviso legal está sujeto al derecho marroquí. Cualquier litigio relativo a su interpretación o ejecución es de competencia exclusiva de los tribunales de Casablanca.",
    contactTitle: "Contacto",
    contactBody: "Para cualquier pregunta relacionada con este aviso legal, contáctenos en",
  },
  zh: {
    heading: "法律声明",
    updated: "最后更新时间",
    editorTitle: "网站发布者",
    editorDesc: "一家专注于太阳能光伏解决方案和储能的摩洛哥公司。",
    hq: "总部：摩洛哥卡萨布兰卡",
    email: "电子邮箱：contact@eqnovia.com",
    phone: "电话：+212 6 55 56 34 04",
    directorTitle: "出版负责人",
    directorBody: "出版负责人是 Eqnovia 的法定代表人。",
    hostingTitle: "网站托管",
    hostingBody: "本网站托管于安全的云基础设施上。数据存储在符合国际安全标准的数据中心中。",
    ipTitle: "知识产权",
    ipBody: "本网站的所有内容（文本、图片、标志、图形、视频）均为 Eqnovia 或其合作伙伴的专有财产，受摩洛哥及国际知识产权法保护。未经事先书面授权，严禁任何形式的复制、展示、修改或使用。",
    liabilityTitle: "责任声明",
    liabilityBody: "Eqnovia 致力于确保其网站上发布信息的准确性和时效性，但不能保证不存在错误或遗漏。用户承认使用这些信息须自行承担责任。",
    lawTitle: "适用法律",
    lawBody: "本法律声明受摩洛哥法律管辖。任何有关其解释或执行的争议均由卡萨布兰卡法院专属管辖。",
    contactTitle: "联系方式",
    contactBody: "如对本法律声明有任何疑问，请通过以下方式联系我们",
  },
  ar: {
    heading: "الإشعار القانوني",
    updated: "آخر تحديث",
    editorTitle: "ناشر الموقع",
    editorDesc: "شركة مغربية متخصصة في حلول الطاقة الشمسية الكهروضوئية وتخزين الطاقة.",
    hq: "المقر الرئيسي: الدار البيضاء، المغرب",
    email: "البريد الإلكتروني: contact@eqnovia.com",
    phone: "الهاتف: +212 6 55 56 34 04",
    directorTitle: "مدير النشر",
    directorBody: "مدير النشر هو الممثل القانوني لشركة Eqnovia.",
    hostingTitle: "الاستضافة",
    hostingBody: "يستضاف هذا الموقع على بنية تحتية سحابية آمنة. يتم تخزين البيانات في مراكز بيانات متوافقة مع المعايير الدولية للأمان.",
    ipTitle: "الملكية الفكرية",
    ipBody: "جميع محتويات الموقع (النصوص، الصور، الشعارات، الرسومات، الفيديوهات) هي ملكية حصرية لشركة Eqnovia أو شركائها، ومحمية بموجب التشريعات المغربية والدولية للملكية الفكرية. يُمنع منعًا باتًا أي نسخ أو تمثيل أو تعديل أو استغلال دون إذن كتابي مسبق.",
    liabilityTitle: "المسؤولية",
    liabilityBody: "تسعى Eqnovia جاهدة لضمان دقة وتحديث المعلومات المنشورة على موقعها، لكنها لا تضمن خلوها من الأخطاء أو الإغفالات. يقر المستخدم بأنه يستخدم هذه المعلومات على مسؤوليته الخاصة.",
    lawTitle: "القانون المعمول به",
    lawBody: "يخضع هذا الإشعار القانوني للقانون المغربي. أي نزاع يتعلق بتفسيره أو تنفيذه يخضع للاختصاص القضائي الحصري لمحاكم الدار البيضاء.",
    contactTitle: "اتصل بنا",
    contactBody: "لأي سؤال يتعلق بهذا الإشعار القانوني، يرجى التواصل معنا على",
  },
} as const;

function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <SiteLayout>
      <article className="container-eq py-16 max-w-3xl prose-eq">
        <h1 className="text-[36px] font-semibold">{c.heading}</h1>
        <p className="mt-4 text-muted-foreground">{c.updated} : {new Date().toLocaleDateString()}</p>

        <Section title={c.editorTitle}>
          <p><strong>Eqnovia</strong> — {c.editorDesc}</p>
          <p>{c.hq}</p>
          <p>{c.email}</p>
          <p>{c.phone}</p>
        </Section>

        <Section title={c.directorTitle}>
          <p>{c.directorBody}</p>
        </Section>

        <Section title={c.hostingTitle}>
          <p>{c.hostingBody}</p>
        </Section>

        <Section title={c.ipTitle}>
          <p>{c.ipBody}</p>
        </Section>

        <Section title={c.liabilityTitle}>
          <p>{c.liabilityBody}</p>
        </Section>

        <Section title={c.lawTitle}>
          <p>{c.lawBody}</p>
        </Section>

        <Section title={c.contactTitle}>
          <p>{c.contactBody} <a href="mailto:contact@eqnovia.com" className="text-brand underline">contact@eqnovia.com</a>.</p>
        </Section>
      </article>
    </SiteLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-brand">{title}</h2>
      <div className="mt-3 space-y-2 text-foreground/85 leading-relaxed">{children}</div>
    </section>
  );
}
