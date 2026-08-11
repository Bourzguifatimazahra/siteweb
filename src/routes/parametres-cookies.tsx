import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cookie, Save, RotateCcw } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { toast } from "sonner";
import { useLang } from "@/lib/i18n";

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

const COPY = {
  fr: {
    heading: "Paramétrage des cookies",
    subheading: "Gérez vos préférences en toute transparence, conformément au règlement de la CNDP.",
    necessaryTitle: "Cookies strictement nécessaires",
    necessaryDesc: "Indispensables au fonctionnement du site (session, sécurité, préférences de langue). Toujours actifs.",
    analyticsTitle: "Cookies d'analyse & performance",
    analyticsDesc: "Nous aident à comprendre l'usage du site pour l'améliorer (statistiques anonymisées).",
    marketingTitle: "Cookies marketing",
    marketingDesc: "Utilisés pour personnaliser les contenus et mesurer l'efficacité de nos campagnes.",
    save: "Enregistrer mes préférences",
    reset: "Réinitialiser",
    savedToast: "Préférences enregistrées",
    resetToast: "Préférences réinitialisées",
  },
  en: {
    heading: "Cookie Settings",
    subheading: "Manage your preferences with full transparency, in compliance with CNDP regulations.",
    necessaryTitle: "Strictly necessary cookies",
    necessaryDesc: "Essential for the site to function (session, security, language preferences). Always active.",
    analyticsTitle: "Analytics & performance cookies",
    analyticsDesc: "Help us understand site usage to improve it (anonymized statistics).",
    marketingTitle: "Marketing cookies",
    marketingDesc: "Used to personalize content and measure the effectiveness of our campaigns.",
    save: "Save my preferences",
    reset: "Reset",
    savedToast: "Preferences saved",
    resetToast: "Preferences reset",
  },
  es: {
    heading: "Configuración de cookies",
    subheading: "Gestione sus preferencias con total transparencia, conforme al reglamento de la CNDP.",
    necessaryTitle: "Cookies estrictamente necesarias",
    necessaryDesc: "Indispensables para el funcionamiento del sitio (sesión, seguridad, preferencias de idioma). Siempre activas.",
    analyticsTitle: "Cookies de análisis y rendimiento",
    analyticsDesc: "Nos ayudan a comprender el uso del sitio para mejorarlo (estadísticas anonimizadas).",
    marketingTitle: "Cookies de marketing",
    marketingDesc: "Utilizadas para personalizar contenidos y medir la eficacia de nuestras campañas.",
    save: "Guardar mis preferencias",
    reset: "Restablecer",
    savedToast: "Preferencias guardadas",
    resetToast: "Preferencias restablecidas",
  },
  zh: {
    heading: "Cookie设置",
    subheading: "根据CNDP法规，透明地管理您的偏好设置。",
    necessaryTitle: "严格必要的Cookie",
    necessaryDesc: "网站运行所必需（会话、安全性、语言偏好）。始终处于启用状态。",
    analyticsTitle: "分析与性能类Cookie",
    analyticsDesc: "帮助我们了解网站使用情况以进行改进（匿名统计数据）。",
    marketingTitle: "营销类Cookie",
    marketingDesc: "用于个性化内容并衡量我们营销活动的效果。",
    save: "保存我的偏好设置",
    reset: "重置",
    savedToast: "偏好设置已保存",
    resetToast: "偏好设置已重置",
  },
  ar: {
    heading: "إعدادات ملفات تعريف الارتباط",
    subheading: "أدر تفضيلاتك بكل شفافية، وفقًا للائحة اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي.",
    necessaryTitle: "ملفات تعريف الارتباط الضرورية للغاية",
    necessaryDesc: "ضرورية لعمل الموقع (الجلسة، الأمان، تفضيلات اللغة). نشطة دائمًا.",
    analyticsTitle: "ملفات تعريف الارتباط الخاصة بالتحليل والأداء",
    analyticsDesc: "تساعدنا على فهم استخدام الموقع لتحسينه (إحصائيات مجهولة الهوية).",
    marketingTitle: "ملفات تعريف الارتباط التسويقية",
    marketingDesc: "تُستخدم لتخصيص المحتوى وقياس فعالية حملاتنا.",
    save: "حفظ تفضيلاتي",
    reset: "إعادة التعيين",
    savedToast: "تم حفظ التفضيلات",
    resetToast: "تمت إعادة تعيين التفضيلات",
  },
} as const;

function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
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
    toast.success(c.savedToast);
  };
  const reset = () => {
    setPrefs(DEFAULT);
    toast(c.resetToast);
  };

  return (
    <SiteLayout>
      <article className="container-eq py-16 max-w-3xl">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-2xl grid place-items-center text-white shrink-0" style={{ backgroundColor: "#f18f01" }}>
            <Cookie className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-[32px] font-semibold leading-tight">{c.heading}</h1>
            <p className="mt-2 text-muted-foreground">{c.subheading}</p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <CookieRow
            title={c.necessaryTitle}
            desc={c.necessaryDesc}
            enabled
            disabled
            onChange={() => {}}
          />
          <CookieRow
            title={c.analyticsTitle}
            desc={c.analyticsDesc}
            enabled={prefs.analytics}
            onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
          />
          <CookieRow
            title={c.marketingTitle}
            desc={c.marketingDesc}
            enabled={prefs.marketing}
            onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button onClick={save} className="btn-primary hover:btn-primary-hover">
            <Save className="h-4 w-4" /> {c.save}
          </button>
          <button onClick={reset} className="btn-outline hover:bg-primary-soft">
            <RotateCcw className="h-4 w-4" /> {c.reset}
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
