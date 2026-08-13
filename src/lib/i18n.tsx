import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "es" | "zh" | "ar";

type Dict = Record<string, string>;

const DICT: Record<Lang, Dict> = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "Qui sommes-nous",
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.sectors": "Secteurs",
    "nav.projects": "Projets",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "cta.start": "Lancez votre projet",
    "chat.title": "Assistant Eqnovia",
    "chat.placeholder": "Posez votre question…",
    "chat.welcome": "Bonjour 👋 Je suis l'assistant Eqnovia. Comment puis-je vous aider aujourd'hui ?",
    "wa.label": "Discuter sur WhatsApp",
    "lang.label": "Langue",
    "blog.title": "Blog & Actualités",
    "blog.subtitle": "Insights, retours d'expérience et innovations dans le solaire et le stockage d'énergie.",
    "blog.read": "Lire l'article",
    "blog.listen": "Écouter",
    "blog.pause": "Pause",
    "blog.stop": "Arrêter",
    "blog.back": "Blog",
    "blog.others": "Autres articles",
    "blog.playing": "En lecture…",
    "blog.paused": "En pause",
    "blog.notfound": "Article introuvable",
    "blog.backToBlog": "Retour au blog",
    "cookies.settings": "Paramétrer les cookies",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.sectors": "Sectors",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "cta.start": "Start your project",
    "chat.title": "Eqnovia Assistant",
    "chat.placeholder": "Ask a question…",
    "chat.welcome": "Hi 👋 I'm the Eqnovia assistant. How can I help you today?",
    "wa.label": "Chat on WhatsApp",
    "lang.label": "Language",
    "blog.title": "Blog & News",
    "blog.subtitle": "Insights, case studies and innovations in solar and energy storage.",
    "blog.read": "Read article",
    "blog.listen": "Listen",
    "blog.pause": "Pause",
    "blog.stop": "Stop",
    "blog.back": "Blog",
    "blog.others": "More articles",
    "blog.playing": "Playing…",
    "blog.paused": "Paused",
    "blog.notfound": "Article not found",
    "blog.backToBlog": "Back to blog",
    "cookies.settings": "Cookie settings",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Quiénes somos",
    "nav.services": "Servicios",
    "nav.solutions": "Soluciones",
    "nav.sectors": "Sectores",
    "nav.projects": "Proyectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "cta.start": "Inicia tu proyecto",
    "chat.title": "Asistente Eqnovia",
    "chat.placeholder": "Haz una pregunta…",
    "chat.welcome": "Hola 👋 Soy el asistente de Eqnovia. ¿En qué puedo ayudarte hoy?",
    "wa.label": "Chatear por WhatsApp",
    "lang.label": "Idioma",
    "blog.title": "Blog y noticias",
    "blog.subtitle": "Análisis, casos y novedades en energía solar y almacenamiento.",
    "blog.read": "Leer artículo",
    "blog.listen": "Escuchar",
    "blog.pause": "Pausar",
    "blog.stop": "Detener",
    "blog.back": "Blog",
    "blog.others": "Otros artículos",
    "blog.playing": "Reproduciendo…",
    "blog.paused": "En pausa",
    "blog.notfound": "Artículo no encontrado",
    "blog.backToBlog": "Volver al blog",
    "cookies.settings": "Configuración de cookies",
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.solutions": "解决方案",
    "nav.sectors": "行业",
    "nav.projects": "项目",
    "nav.blog": "博客",
    "nav.contact": "联系",
    "cta.start": "启动您的项目",
    "chat.title": "Eqnovia 助手",
    "chat.placeholder": "请输入您的问题…",
    "chat.welcome": "您好 👋 我是 Eqnovia 助手。今天我能帮您什么？",
    "wa.label": "通过 WhatsApp 聊天",
    "lang.label": "语言",
    "blog.title": "博客与新闻",
    "blog.subtitle": "太阳能与储能领域的洞察、案例与创新。",
    "blog.read": "阅读文章",
    "blog.listen": "收听",
    "blog.pause": "暂停",
    "blog.stop": "停止",
    "blog.back": "博客",
    "blog.others": "更多文章",
    "blog.playing": "正在播放…",
    "blog.paused": "已暂停",
    "blog.notfound": "未找到文章",
    "blog.backToBlog": "返回博客",
    "cookies.settings": "Cookie 设置",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.solutions": "الحلول",
    "nav.sectors": "القطاعات",
    "nav.projects": "المشاريع",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "cta.start": "أطلق مشروعك",
    "chat.title": "مساعد Eqnovia",
    "chat.placeholder": "اطرح سؤالك…",
    "chat.welcome": "مرحباً 👋 أنا مساعد Eqnovia. كيف يمكنني مساعدتك اليوم؟",
    "wa.label": "الدردشة على واتساب",
    "lang.label": "اللغة",
    "blog.title": "المدونة والأخبار",
    "blog.subtitle": "تحليلات وتجارب وابتكارات في الطاقة الشمسية وتخزين الطاقة.",
    "blog.read": "قراءة المقال",
    "blog.listen": "استماع",
    "blog.pause": "إيقاف مؤقت",
    "blog.stop": "إيقاف",
    "blog.back": "المدونة",
    "blog.others": "مقالات أخرى",
    "blog.playing": "قيد التشغيل…",
    "blog.paused": "متوقف مؤقتاً",
    "blog.notfound": "المقال غير موجود",
    "blog.backToBlog": "العودة إلى المدونة",
    "cookies.settings": "إعدادات ملفات تعريف الارتباط",
  },
};

const KEY = "eqnovia-lang";
export const LANG_CODES: Lang[] = ["fr", "en", "es", "zh", "ar"];
export const LOCALE_MAP: Record<Lang, string> = { fr: "fr-FR", en: "en-US", es: "es-ES", zh: "zh-CN", ar: "ar-MA" };
export const RTL_LANGS: Lang[] = ["ar"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; dir: "ltr" | "rtl" };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (window.localStorage.getItem(KEY) as Lang | null) : null;
    if (stored && LANG_CODES.includes(stored)) setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(KEY, l);
  };

  const t = (k: string) => DICT[lang][k] ?? DICT.fr[k] ?? k;

  return <LanguageContext.Provider value={{ lang, setLang, t, dir: RTL_LANGS.includes(lang) ? "rtl" : "ltr" }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const c = useContext(LanguageContext);
  if (!c) throw new Error("useLang must be used within LanguageProvider");
  return c;
}
