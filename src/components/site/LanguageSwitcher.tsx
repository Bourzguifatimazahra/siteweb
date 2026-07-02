import { Globe } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:border-brand hover:text-brand transition-colors"
        aria-label="Language"
      >
        <Globe className="h-4 w-4" />
        <span>{current.flag}</span>
        <span className="hidden md:inline">{current.code.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-border bg-background shadow-elegant py-2 z-50 animate-[fade-in_0.15s_ease-out]">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                l.code === lang ? "text-brand font-semibold" : "text-foreground"
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
