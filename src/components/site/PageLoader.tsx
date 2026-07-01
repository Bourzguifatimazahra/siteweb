import { useEffect, useState } from "react";
import logo from "@/assets/eqnovia-logo.png.asset.json";

export function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 900);
    const t2 = setTimeout(() => setGone(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-2 border-primary-soft border-t-brand animate-[spin_1s_linear_infinite]" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-[color:var(--sun)]" />
          </div>
        </div>
        <img src={logo.url} alt="Eqnovia" className="h-7 w-auto opacity-90" />
      </div>
    </div>
  );
}
