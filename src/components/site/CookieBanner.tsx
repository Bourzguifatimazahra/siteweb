import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";

const KEY = "eqnovia-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

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
            <p className="font-semibold text-foreground mb-1">Nous utilisons des cookies</p>
            <p className="text-muted-foreground leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et mesurer nos performances.{" "}
              <Link to="/politique-cookies" className="text-brand underline underline-offset-2">En savoir plus</Link>.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <button onClick={() => decide("all")} className="btn-primary hover:btn-primary-hover text-sm px-5 py-2.5">Accepter tous</button>
          <Link
            to="/parametres-cookies"
            onClick={() => setVisible(false)}
            className="btn-outline text-sm px-5 py-2.5"
          >
            Paramétrer les cookies
          </Link>
          <button onClick={() => decide("necessary")} className="text-sm px-5 py-2.5 text-muted-foreground hover:text-foreground transition-colors">Refuser</button>
        </div>
      </div>
    </div>
  );
}
