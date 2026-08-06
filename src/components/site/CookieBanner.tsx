import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";
import { useLang } from "@/lib/i18n";

const KEY = "eqnovia-cookie-consent";

const COPY = {
  fr: {
    title: "Nous utilisons des cookies",
    text: "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et mesurer nos performances.",
    learnMore: "En savoir plus",
    acceptAll: "Accepter tous",
    settings: "Paramétrer les cookies",
    reject: "Refuser",
  },
  en: {
    title: "We use cookies",
    text: "We use cookies to improve your experience, analyze traffic and measure our performance.",
    learnMore: "Learn more",
    acceptAll: "Accept all",
    settings: "Cookie settings",
    reject: "Reject",
  },
  es: {
    title: "Utilizamos cookies",
    text: "Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y medir nuestro rendimiento.",
    learnMore: "Saber más",
    acceptAll: "Aceptar todo",
    settings: "Configuración de cookies",
    reject: "Rechazar",
  },
} as const;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const c = COPY[lang];

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(KEY) : "yes";
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (v: "all" | "necessary" | "custom") => {
    window.localStorage.setItem(KEY, v);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md z-[60] animate-[fade-up_0.5s_ease-out]">
      <div className="bg-background border border-border rounded-2xl shadow-elegant p-6">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-primary-soft grid place-items-center text-brand shrink-0">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="text-sm">
            <p className="font-semibold text-foreground mb-1">{c.title}</p>
            <p className="text-muted-foreground leading-relaxed">
              {c.text}{" "}
              <Link to="/politique-cookies" className="text-brand underline underline-offset-2">{c.learnMore}</Link>.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <button onClick={() => decide("all")} className="btn-primary hover:btn-primary-hover text-sm px-5 py-2.5">{c.acceptAll}</button>
          <Link
            to="/parametres-cookies"
            onClick={() => setVisible(false)}
            className="btn-outline text-sm px-5 py-2.5"
          >
            {c.settings}
          </Link>
          <button onClick={() => decide("necessary")} className="text-sm px-5 py-2.5 text-muted-foreground hover:text-foreground transition-colors">{c.reject}</button>
        </div>
      </div>
    </div>
  );
}
