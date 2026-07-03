import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const SLIDES = [
  {
    img: hero1,
    kicker: "",
    title: ["L'énergie de demain.", "Aujourd'hui."],
    subtitle:
      "Eqnovia offre des solutions complètes pour la production et le stockage d'énergie propre.",
  },
  {
    img: hero2,
    kicker: "",
    title: ["Le soleil du Maroc,", "au service de vos ambitions."],
    subtitle:
      "Nous concevons et exploitons vos centrales photovoltaïques pour une performance durable.",
  },
  {
    img: hero3,
    kicker: "",
    title: ["Autonomie énergétique.", "Sécurité totale."],
    subtitle:
      "Nos systèmes de stockage garantissent la continuité et la résilience de votre alimentation.",
  },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500);
    return () => clearInterval(id);
  }, []);

  const current = SLIDES[index];

  return (
    <section className="relative h-[calc(100svh-5rem)] min-h-[560px] w-full overflow-hidden text-white">
      {/* Background image switcher */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={current.img}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
            width={1920}
            height={1280}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays — lighter, more luminous */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand/35 via-brand/25 to-brand/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(0,30,60,0.35)_100%)]" />


      {/* Decorative floating accent (color #f18f01 requested) */}
      <motion.div
        aria-hidden
        className="absolute top-24 right-10 md:right-24 h-24 w-24 md:h-32 md:w-32 rounded-full blur-2xl"
        style={{ backgroundColor: "#f18f01", opacity: 0.35 }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-24 left-8 md:left-16 h-16 w-16 md:h-24 md:w-24 rounded-full blur-xl"
        style={{ backgroundColor: "#f18f01", opacity: 0.25 }}
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container-eq relative z-10 h-full flex flex-col justify-center items-center text-center pt-24 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            {current.kicker && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold tracking-wider uppercase mb-6">
                <Sparkles className="h-3.5 w-3.5" style={{ color: "#f18f01" }} />
                {current.kicker}
              </span>
            )}

            <h1
              className="font-semibold leading-[1.02] tracking-tight text-[44px] sm:text-[64px] lg:text-[84px]"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
            >
              <span className="block">{current.title[0]}</span>
              <span className="block" style={{ color: "#f18f01" }}>
                {current.title[1]}
              </span>
            </h1>

            <p
              className="mt-6 text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
            >
              {current.subtitle}
            </p>


            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: "#f18f01" }}
              >
                Lancez votre projet <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className="group relative h-1.5 w-10 rounded-full bg-white/25 overflow-hidden"
            >
              {i === index && (
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#f18f01" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6.5, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
