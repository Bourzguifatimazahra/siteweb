import { useEffect, useState } from "react";
import logo from "@/assets/eqnovia-logo.png.asset.json";

export function PageLoader() {
  // S'affiche à chaque rechargement de page pendant 3s (pas lors des navigations internes)
  const [gone, setGone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 3000);
    const t2 = setTimeout(() => setGone(true), 3350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-300 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-28 w-28 grid place-items-center">
          <div className="absolute inset-0 rounded-full border-2 border-primary-soft border-t-brand animate-[spin_0.9s_linear_infinite]" />
          <img src={logo.url} alt="Eqnovia" className="h-14 w-auto animate-pulse" />
        </div>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Eqnovia</p>
      </div>
    </div>
  );
}
