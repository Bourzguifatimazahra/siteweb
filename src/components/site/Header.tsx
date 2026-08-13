import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/eqnovia-logo.png.asset.json";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "@/lib/i18n";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const NAV = [
    { to: "/", label: t("nav.home") },
    { to: "/a-propos", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/solutions", label: t("nav.solutions") },
    { to: "/secteurs", label: t("nav.sectors") },
    { to: "/projets", label: t("nav.projects") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white ${
        scrolled
          ? "backdrop-blur-md border-b border-border shadow-[0_4px_20px_-12px_rgba(0,76,153,0.15)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-eq flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Eqnovia — Accueil">
          <img src={logo.url} alt="Eqnovia" className="h-9 md:h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[14px] font-medium text-foreground/80 hover:text-brand transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
              activeProps={{ className: "text-brand after:w-full" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:scale-[1.03] transition-transform"
            style={{ backgroundColor: "#f18f01" }}
          >
            {t("cta.start")}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border animate-[fade-in_0.2s_ease-out]">
          <nav className="container-eq py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/85 hover:text-brand py-2"
                activeProps={{ className: "text-brand" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "#f18f01" }}
            >
              {t("cta.start")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
