import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock, Volume2 } from "lucide-react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { POSTS, localizePost } from "@/lib/blog-posts";
import { useLang, LOCALE_MAP } from "@/lib/i18n";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Eqnovia" },
      { name: "description", content: "Insights, retours d'expérience et innovations dans le solaire et le stockage d'énergie." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { t, lang } = useLang();
  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-8 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-[36px] lg:text-[56px] font-semibold leading-[1.05] max-w-3xl">
            {t("blog.title")}
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl">{t("blog.subtitle")}</p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((p, i) => {
          const loc = localizePost(p, lang);
          return (
          <Reveal key={p.slug} delay={i * 100}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-card border border-border hover:border-brand hover:shadow-elegant transition-all duration-500 h-full"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={p.cover}
                    alt={loc.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span
                    className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-semibold shadow-sm"
                    style={{ color: "#004c99" }}
                  >
                    <Volume2 className="h-3 w-3" /> {t("blog.listen")}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{new Date(p.date).toLocaleDateString(LOCALE_MAP[lang])}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.readingTime}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold leading-snug group-hover:text-brand transition-colors">
                    {loc.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{loc.excerpt}</p>
                  <div className="mt-auto pt-5">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm group-hover:gap-3 group-hover:shadow-md transition-all"
                      style={{ backgroundColor: "#f18f01" }}
                    >
                      {t("blog.read")} <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </Reveal>
          );
        })}
      </section>
    </SiteLayout>
  );
}
