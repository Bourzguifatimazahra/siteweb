import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { POSTS } from "@/lib/blog-posts";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Eqnovia" },
      { name: "description", content: "Insights, retours d'expérience et innovations dans le solaire et le stockage d'énergie." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <section className="container-eq pt-16 pb-8 lg:pt-24">
        <Reveal>
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-[40px] lg:text-[64px] font-semibold leading-[1.05] max-w-3xl">
            {t("blog.title")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("blog.subtitle")}</p>
        </Reveal>
      </section>

      <section className="container-eq pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block rounded-3xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all duration-500 h-full"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{new Date(p.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.readingTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold leading-snug group-hover:text-brand transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-3 transition-all" style={{ color: "#f18f01" }}>
                  {t("blog.read")} <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </SiteLayout>
  );
}
