import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "es";

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
};

const KEY = "eqnovia-lang";
export const LANG_CODES: Lang[] = ["fr", "en", "es"];
export const LOCALE_MAP: Record<Lang, string> = { fr: "fr-FR", en: "en-US", es: "es-ES" };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; dir: "ltr" };
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
      document.documentElement.dir = "ltr";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(KEY, l);
  };

  const t = (k: string) => DICT[lang][k] ?? DICT.fr[k] ?? k;

  return <LanguageContext.Provider value={{ lang, setLang, t, dir: "ltr" }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const c = useContext(LanguageContext);
  if (!c) throw new Error("useLang must be used within LanguageProvider");
  return c;
}
