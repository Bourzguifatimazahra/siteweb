import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/eqnovia-logo.png.asset.json";
import { useLang } from "@/lib/i18n";

const COPY = {
  fr: {
    tagline: "Expert marocain des solutions solaires et de stockage d'énergie en Afrique. L'énergie de demain. Aujourd'hui.",
    navTitle: "Navigation",
    nav: {
      about: "Qui sommes-nous",
      services: "Services",
      solutions: "Solutions",
      projects: "Projets",
      blog: "Blog",
      contact: "Contact",
    },
    contactTitle: "Contact",
    resourcesTitle: "Ressources",
    cookiePolicy: "Politique de cookies",
    legalNotice: "Mentions légales",
    privacyPolicy: "Politique de confidentialité",
    cookieSettings: "Paramétrer les cookies",
    rights: "Tous droits réservés.",
    bottomTagline: "L'énergie de demain. Aujourd'hui.",
  },
  en: {
    tagline: "Moroccan expert in solar and energy storage solutions in Africa. Tomorrow's energy. Today.",
    navTitle: "Navigation",
    nav: {
      about: "About us",
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    contactTitle: "Contact",
    resourcesTitle: "Resources",
    cookiePolicy: "Cookie policy",
    legalNotice: "Legal notice",
    privacyPolicy: "Privacy policy",
    cookieSettings: "Cookie settings",
    rights: "All rights reserved.",
    bottomTagline: "Tomorrow's energy. Today.",
  },
  es: {
    tagline: "Experto marroquí en soluciones solares y de almacenamiento de energía en África. La energía del mañana. Hoy.",
    navTitle: "Navegación",
    nav: {
      about: "Quiénes somos",
      services: "Servicios",
      solutions: "Soluciones",
      projects: "Proyectos",
      blog: "Blog",
      contact: "Contacto",
    },
    contactTitle: "Contacto",
    resourcesTitle: "Recursos",
    cookiePolicy: "Política de cookies",
    legalNotice: "Aviso legal",
    privacyPolicy: "Política de privacidad",
    cookieSettings: "Configuración de cookies",
    rights: "Todos los derechos reservados.",
    bottomTagline: "La energía del mañana. Hoy.",
  },
  zh: {
    tagline: "摩洛哥太阳能与储能解决方案专家，服务非洲市场。明日的能源，就在今天。",
    navTitle: "导航",
    nav: {
      about: "关于我们",
      services: "服务",
      solutions: "解决方案",
      projects: "项目",
      blog: "博客",
      contact: "联系",
    },
    contactTitle: "联系",
    resourcesTitle: "资源",
    cookiePolicy: "Cookie 政策",
    legalNotice: "法律声明",
    privacyPolicy: "隐私政策",
    cookieSettings: "Cookie 设置",
    rights: "版权所有。",
    bottomTagline: "明日的能源，就在今天。",
  },
  ar: {
    tagline: "خبير مغربي في حلول الطاقة الشمسية وتخزين الطاقة في أفريقيا. طاقة الغد. اليوم.",
    navTitle: "التصفح",
    nav: {
      about: "من نحن",
      services: "الخدمات",
      solutions: "الحلول",
      projects: "المشاريع",
      blog: "المدونة",
      contact: "اتصل بنا",
    },
    contactTitle: "اتصل بنا",
    resourcesTitle: "الموارد",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    legalNotice: "الإشعار القانوني",
    privacyPolicy: "سياسة الخصوصية",
    cookieSettings: "إعدادات ملفات تعريف الارتباط",
    rights: "جميع الحقوق محفوظة.",
    bottomTagline: "طاقة الغد. اليوم.",
  },
} as const;

export function Footer() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <footer className="bg-[oklch(0.16_0.02_260)] text-white/85 pt-20 pb-8 mt-24">
      <div className="container-eq grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-3 inline-block">
            <img src={logo.url} alt="Eqnovia" className="h-8 w-auto" />
          </div>
          <p className="text-[15px] leading-relaxed text-white/70 mt-6 max-w-xs">
            {c.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-5">{c.navTitle}</h4>
          <ul className="space-y-3 text-[14px]">
            {[
              ["/a-propos", c.nav.about],
              ["/services", c.nav.services],
              ["/solutions", c.nav.solutions],
              ["/projets", c.nav.projects],
              ["/blog", c.nav.blog],
              ["/contact", c.nav.contact],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}

          </ul>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-5">{c.contactTitle}</h4>
          <ul className="space-y-3 text-[14px] text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--sun)]" />
              <span>Casablanca, Maroc</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--sun)]" />
              <a href="tel:+212500000000" className="hover:text-white transition-colors">+212 5 00 00 00 00</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--sun)]" />
              <a href="mailto:contact@eqnovia.com" className="hover:text-white transition-colors">contact@eqnovia.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-5">{c.resourcesTitle}</h4>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/politique-cookies" className="text-white/70 hover:text-white transition-colors">{c.cookiePolicy}</Link></li>
            <li><Link to="/mentions-legales" className="text-white/70 hover:text-white transition-colors">{c.legalNotice}</Link></li>
            <li><Link to="/politique-confidentialite" className="text-white/70 hover:text-white transition-colors">{c.privacyPolicy}</Link></li>
            <li><Link to="/parametres-cookies" className="text-white/70 hover:text-white transition-colors">{c.cookieSettings}</Link></li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand grid place-items-center transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-eq mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Eqnovia. {c.rights}</p>
        <p>{c.bottomTagline}</p>
      </div>
    </footer>
  );
}
