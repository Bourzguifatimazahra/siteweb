import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/eqnovia-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.02_260)] text-white/85 pt-20 pb-8 mt-24">
      <div className="container-eq grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-3 inline-block">
            <img src={logo.url} alt="Eqnovia" className="h-8 w-auto" />
          </div>
          <p className="text-[15px] leading-relaxed text-white/70 mt-6 max-w-xs">
            Expert marocain des solutions solaires et de stockage d'énergie en Afrique.
            L'énergie de demain. Aujourd'hui.
          </p>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-5">Navigation</h4>
          <ul className="space-y-3 text-[14px]">
            {[
              ["/a-propos", "Qui sommes-nous"],
              ["/services", "Services"],
              ["/solutions", "Solutions"],
              ["/projets", "Projets"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}

          </ul>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-5">Contact</h4>
          <ul className="space-y-3 text-[14px] text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--sun)]" />
              <span>Casablanca, Maroc</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--sun)]" />
              <a href="tel:+212500000000" className="hover:text-white transition-colors">+212 5 00 00 00 00</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--sun)]" />
              <a href="mailto:contact@eqnovia.com" className="hover:text-white transition-colors">contact@eqnovia.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-5">Ressources</h4>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/politique-cookies" className="text-white/70 hover:text-white transition-colors">Politique de cookies</Link></li>
            <li><Link to="/mentions-legales" className="text-white/70 hover:text-white transition-colors">Mentions légales</Link></li>
            <li><Link to="/politique-confidentialite" className="text-white/70 hover:text-white transition-colors">Politique de confidentialité</Link></li>
            <li><Link to="/parametres-cookies" className="text-white/70 hover:text-white transition-colors">Paramétrer les cookies</Link></li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand grid place-items-center transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-eq mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Eqnovia. Tous droits réservés.</p>
        <p>L'énergie de demain. Aujourd'hui.</p>
      </div>
    </footer>
  );
}
