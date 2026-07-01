import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/eqnovia-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "Qui sommes-nous" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projets", label: "Projets" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_4px_20px_-12px_rgba(0,76,153,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-eq flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Eqnovia — Accueil">
          <img src={logo.url} alt="Eqnovia" className="h-9 md:h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[15px] font-medium text-foreground/80 hover:text-brand transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
              activeProps={{ className: "text-brand after:w-full" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-primary hover:btn-primary-hover">
          Lancez votre projet
        </Link>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-[fade-in_0.2s_ease-out]">
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
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary hover:btn-primary-hover mt-2">
              Lancez votre projet
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
