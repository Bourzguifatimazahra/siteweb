import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "zh" | "ar";

type Dict = Record<string, string>;

const DICT: Record<Lang, Dict> = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "Qui sommes-nous",
    "nav.services": "Services",
    "nav.solutions": "Solutions",
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
    "cookies.settings": "Paramétrer les cookies",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.solutions": "Solutions",
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
    "cookies.settings": "Cookie settings",
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.solutions": "解决方案",
    "nav.projects": "项目",
    "nav.blog": "博客",
    "nav.contact": "联系",
    "cta.start": "启动您的项目",
    "chat.title": "Eqnovia 助手",
    "chat.placeholder": "请输入您的问题…",
    "chat.welcome": "您好 👋 我是 Eqnovia 助手。请问有什么可以帮您？",
    "wa.label": "WhatsApp 聊天",
    "lang.label": "语言",
    "blog.title": "博客与新闻",
    "blog.subtitle": "太阳能与储能行业的洞察、案例与创新。",
    "blog.read": "阅读文章",
    "blog.listen": "收听",
    "blog.pause": "暂停",
    "blog.stop": "停止",
    "cookies.settings": "Cookie 设置",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.solutions": "الحلول",
    "nav.projects": "المشاريع",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "cta.start": "ابدأ مشروعك",
    "chat.title": "مساعد إيكنوفيا",
    "chat.placeholder": "اطرح سؤالك…",
    "chat.welcome": "مرحباً 👋 أنا مساعد إيكنوفيا. كيف يمكنني مساعدتك؟",
    "wa.label": "دردشة واتساب",
    "lang.label": "اللغة",
    "blog.title": "المدونة والأخبار",
    "blog.subtitle": "رؤى وتجارب وابتكارات في الطاقة الشمسية وتخزين الطاقة.",
    "blog.read": "قراءة المقال",
    "blog.listen": "استماع",
    "blog.pause": "إيقاف مؤقت",
    "blog.stop": "إيقاف",
    "cookies.settings": "إعدادات ملفات تعريف الارتباط",
  },
};

const KEY = "eqnovia-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; dir: "ltr" | "rtl" };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (window.localStorage.getItem(KEY) as Lang | null) : null;
    if (stored && ["fr", "en", "zh", "ar"].includes(stored)) setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(KEY, l);
  };

  const t = (k: string) => DICT[lang][k] ?? DICT.fr[k] ?? k;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return <LanguageContext.Provider value={{ lang, setLang, t, dir }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const c = useContext(LanguageContext);
  if (!c) throw new Error("useLang must be used within LanguageProvider");
  return c;
}
