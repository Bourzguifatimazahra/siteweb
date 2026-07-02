import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cookie, Save, RotateCcw } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { toast } from "sonner";

export const Route = createFileRoute("/parametres-cookies")({
  head: () => ({
    meta: [
      { title: "Paramétrage des cookies — Eqnovia" },
      { name: "description", content: "Gérez vos préférences de cookies conformément au règlement de la CNDP." },
    ],
  }),
  component: Page,
});

const KEY = "eqnovia-cookie-prefs";

type Prefs = { necessary: true; analytics: boolean; marketing: boolean };
const DEFAULT: Prefs = { necessary: true, analytics: false, marketing: false };

function Page() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT);

  useEffect(() => {
    try {
      const s = localStorage.getItem(KEY);
      if (s) setPrefs({ ...DEFAULT, ...JSON.parse(s) });
    } catch {
      /* noop */
    }
  }, []);

  const save = () => {
    localStorage.setItem(KEY, JSON.stringify(prefs));
    localStorage.setItem("eqnovia-cookie-consent", "custom");
    toast.success("Préférences enregistrées");
  };
  const reset = () => {
    setPrefs(DEFAULT);
    toast("Préférences réinitialisées");
  };

  return (
    <SiteLayout>
      <article className="container-eq py-16 max-w-3xl">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-2xl grid place-items-center text-white shrink-0" style={{ backgroundColor: "#f18f01" }}>
            <Cookie className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-[36px] font-semibold leading-tight">Paramétrage des cookies</h1>
            <p className="mt-2 text-muted-foreground">Gérez vos préférences en toute transparence, conformément au règlement de la CNDP.</p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <CookieRow
            title="Cookies strictement nécessaires"
            desc="Indispensables au fonctionnement du site (session, sécurité, préférences de langue). Toujours actifs."
            enabled
            disabled
            onChange={() => {}}
          />
          <CookieRow
            title="Cookies d'analyse & performance"
            desc="Nous aident à comprendre l'usage du site pour l'améliorer (statistiques anonymisées)."
            enabled={prefs.analytics}
            onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
          />
          <CookieRow
            title="Cookies marketing"
            desc="Utilisés pour personnaliser les contenus et mesurer l'efficacité de nos campagnes."
            enabled={prefs.marketing}
            onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button onClick={save} className="btn-primary hover:btn-primary-hover">
            <Save className="h-4 w-4" /> Enregistrer mes préférences
          </button>
          <button onClick={reset} className="btn-outline hover:bg-primary-soft">
            <RotateCcw className="h-4 w-4" /> Réinitialiser
          </button>
        </div>
      </article>
    </SiteLayout>
  );
}

function CookieRow({ title, desc, enabled, disabled, onChange }: { title: string; desc: string; enabled: boolean; disabled?: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
      <button
        onClick={() => !disabled && onChange(!enabled)}
        disabled={disabled}
        className={`relative h-7 w-12 rounded-full transition-colors ${enabled ? "bg-brand" : "bg-muted"} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        aria-pressed={enabled}
      >
        <span className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform ${enabled ? "translate-x-5" : ""}`} />
      </button>
    </div>
  );
}
