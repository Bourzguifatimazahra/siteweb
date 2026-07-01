import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eqnovia" },
      { name: "description", content: "Contactez Eqnovia pour votre projet solaire ou de stockage d'énergie au Maroc et en Afrique." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-16 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-[40px] lg:text-[64px] font-semibold leading-[1.05] max-w-3xl">
            Discutons de votre projet.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Notre équipe revient vers vous sous 48h avec une première évaluation.
          </p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-2">
          <div className="rounded-3xl bg-brand text-white p-10 h-full flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-semibold">Nos coordonnées</h2>
              <p className="mt-2 text-white/75 text-sm">Nous sommes à votre écoute du lundi au vendredi, 9h-18h.</p>
            </div>

            <ContactInfo icon={MapPin} title="Adresse" value="Casablanca, Maroc" />
            <ContactInfo icon={Phone} title="Téléphone" value="+212 5 00 00 00 00" href="tel:+212500000000" />
            <ContactInfo icon={Mail} title="Email" value="contact@eqnovia.com" href="mailto:contact@eqnovia.com" />

            <div className="mt-auto pt-8 border-t border-white/15">
              <p className="text-sm text-white/75">Suivez-nous</p>
              <div className="flex gap-3 mt-3">
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-sm transition-colors">in</a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 lg:p-10 space-y-5">
            {sent ? (
              <div className="text-center py-12 animate-[fade-up_0.5s_ease-out]">
                <div className="h-16 w-16 rounded-full bg-primary-soft grid place-items-center text-brand mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold">Message envoyé !</h2>
                <p className="mt-3 text-muted-foreground">Nous vous répondrons dans les 48h.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Prénom" name="firstName" required />
                  <Field label="Nom" name="lastName" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Téléphone" name="phone" type="tel" />
                </div>
                <Field label="Entreprise" name="company" />
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Votre message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-[15px] focus:outline-none focus:border-brand focus:ring-4 focus:ring-primary-soft transition-all"
                    placeholder="Décrivez votre projet, site, consommation…"
                  />
                </div>
                <button type="submit" className="btn-primary hover:btn-primary-hover w-full sm:w-auto">
                  Envoyer le message <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-foreground mb-2 block">
        {label}{required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-[15px] focus:outline-none focus:border-brand focus:ring-4 focus:ring-primary-soft transition-all"
      />
    </div>
  );
}

function ContactInfo({ icon: Icon, title, value, href }: { icon: typeof Mail; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex gap-4">
      <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-[color:var(--sun)] shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-white/60">{title}</p>
        <p className="mt-1 font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="hover:text-white/90 transition-colors">{inner}</a> : inner;
}
