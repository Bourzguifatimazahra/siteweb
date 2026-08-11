import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eqnovia" },
      { name: "description", content: "Contactez Eqnovia pour votre projet solaire ou de stockage d'énergie au Maroc et en Afrique." },
    ],
  }),
  component: ContactPage,
});

const COPY = {
  fr: {
    kicker: "Contact",
    title: "Discutons de votre projet.",
    subtitle: "Notre équipe revient vers vous sous 48h avec une première évaluation.",
    coordinates: "Nos coordonnées",
    availability: "Nous sommes à votre écoute du lundi au vendredi, 9h-18h.",
    address: "Adresse",
    phone: "Téléphone",
    email: "Email",
    followUs: "Suivez-nous",
    sentTitle: "Message envoyé !",
    sentSubtitle: "Nous vous répondrons dans les 48h.",
    firstName: "Prénom",
    lastName: "Nom",
    company: "Entreprise",
    message: "Votre message",
    messagePlaceholder: "Décrivez votre projet, site, consommation…",
    send: "Envoyer le message",
  },
  en: {
    kicker: "Contact",
    title: "Let's discuss your project.",
    subtitle: "Our team gets back to you within 48h with an initial assessment.",
    coordinates: "Our contact details",
    availability: "We're available Monday to Friday, 9am-6pm.",
    address: "Address",
    phone: "Phone",
    email: "Email",
    followUs: "Follow us",
    sentTitle: "Message sent!",
    sentSubtitle: "We'll get back to you within 48h.",
    firstName: "First name",
    lastName: "Last name",
    company: "Company",
    message: "Your message",
    messagePlaceholder: "Describe your project, site, consumption…",
    send: "Send message",
  },
  es: {
    kicker: "Contacto",
    title: "Hablemos de tu proyecto.",
    subtitle: "Nuestro equipo te responderá en 48h con una primera evaluación.",
    coordinates: "Nuestros datos de contacto",
    availability: "Estamos disponibles de lunes a viernes, de 9h a 18h.",
    address: "Dirección",
    phone: "Teléfono",
    email: "Correo electrónico",
    followUs: "Síguenos",
    sentTitle: "¡Mensaje enviado!",
    sentSubtitle: "Te responderemos en un plazo de 48h.",
    firstName: "Nombre",
    lastName: "Apellido",
    company: "Empresa",
    message: "Tu mensaje",
    messagePlaceholder: "Describe tu proyecto, sitio, consumo…",
    send: "Enviar mensaje",
  },
  zh: {
    kicker: "联系我们",
    title: "聊聊您的项目吧。",
    subtitle: "我们的团队将在48小时内回复您，并提供初步评估。",
    coordinates: "我们的联系方式",
    availability: "我们的服务时间为周一至周五，9:00-18:00。",
    address: "地址",
    phone: "电话",
    email: "电子邮箱",
    followUs: "关注我们",
    sentTitle: "消息已发送！",
    sentSubtitle: "我们将在48小时内回复您。",
    firstName: "名字",
    lastName: "姓氏",
    company: "公司",
    message: "您的留言",
    messagePlaceholder: "请描述您的项目、场地、用电量……",
    send: "发送消息",
  },
  ar: {
    kicker: "اتصل بنا",
    title: "لنتحدث عن مشروعك.",
    subtitle: "يرد عليك فريقنا خلال 48 ساعة بتقييم أولي.",
    coordinates: "بيانات الاتصال بنا",
    availability: "نحن متاحون من الاثنين إلى الجمعة، من 9 صباحًا حتى 6 مساءً.",
    address: "العنوان",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    followUs: "تابعنا",
    sentTitle: "تم إرسال الرسالة!",
    sentSubtitle: "سنرد عليك خلال 48 ساعة.",
    firstName: "الاسم الشخصي",
    lastName: "اللقب",
    company: "الشركة",
    message: "رسالتك",
    messagePlaceholder: "صف مشروعك، الموقع، الاستهلاك…",
    send: "إرسال الرسالة",
  },
} as const;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const c = COPY[lang];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-16 lg:pt-24">
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

      <section className="container-eq pb-24 grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-2">
          <div className="rounded-3xl bg-brand text-white p-10 h-full flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-semibold">{c.coordinates}</h2>
              <p className="mt-2 text-white/75 text-sm">{c.availability}</p>
            </div>

            <ContactInfo icon={MapPin} title={c.address} value="Casablanca, Maroc" />
            <ContactInfo icon={Phone} title={c.phone} value="+212 5 00 00 00 00" href="tel:+212500000000" />
            <ContactInfo icon={Mail} title={c.email} value="contact@eqnovia.com" href="mailto:contact@eqnovia.com" />

            <div className="mt-auto pt-8 border-t border-white/15">
              <p className="text-sm text-white/75">{c.followUs}</p>
              <div className="flex gap-3 mt-3">
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-sm transition-colors">in</a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 lg:p-10 space-y-5">
            {sent ? (
              <div className="text-center py-12 animate-[fade-up_0.5s_ease-out]">
                <div className="h-16 w-16 rounded-full bg-primary-soft grid place-items-center text-brand mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-xl font-semibold">{c.sentTitle}</h2>
                <p className="mt-3 text-muted-foreground">{c.sentSubtitle}</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={c.firstName} name="firstName" required />
                  <Field label={c.lastName} name="lastName" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={c.email} name="email" type="email" required />
                  <Field label={c.phone} name="phone" type="tel" />
                </div>
                <Field label={c.company} name="company" />
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">{c.message}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-[14px] focus:outline-none focus:border-brand focus:ring-4 focus:ring-primary-soft transition-all"
                    placeholder={c.messagePlaceholder}
                  />
                </div>
                <button type="submit" className="btn-primary hover:btn-primary-hover w-full sm:w-auto">
                  {c.send} <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-foreground mb-2 block">
        {label}{required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-[14px] focus:outline-none focus:border-brand focus:ring-4 focus:ring-primary-soft transition-all"
      />
    </div>
  );
}

function ContactInfo({ icon: Icon, title, value, href }: { icon: typeof Mail; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex gap-4">
      <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-[color:var(--sun)] shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-white/60">{title}</p>
        <p className="mt-1 font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="hover:text-white/90 transition-colors">{inner}</a> : inner;
}
