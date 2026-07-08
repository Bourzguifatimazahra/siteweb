import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Calendar, Clock, Play, Pause, Square, Volume2 } from "lucide-react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getPost, POSTS, localizePost } from "@/lib/blog-posts";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — Eqnovia` : "Article — Eqnovia" },
        { name: "description", content: post?.excerpt ?? "Article Eqnovia" },
        ...(post ? [{ property: "og:image", content: post.cover }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-eq py-24 text-center">
        <h1 className="text-3xl font-semibold">Article introuvable</h1>
        <Link to="/blog" className="btn-primary hover:btn-primary-hover mt-6">Retour au blog</Link>
      </div>
    </SiteLayout>
  ),
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const { t, lang } = useLang();
  const loc = localizePost(post, lang);
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const [supported, setSupported] = useState(true);
  const uttRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) setSupported(false);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  const play = () => {
    if (!("speechSynthesis" in window)) return;
    if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
      return;
    }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(`${loc.title}. ${loc.content}`);
    const langMap: Record<string, string> = { fr: "fr-FR", en: "en-US", es: "es-ES", zh: "zh-CN", ar: "ar-SA" };
    utt.lang = langMap[lang] ?? "fr-FR";
    utt.rate = 1;
    utt.onend = () => setState("idle");
    utt.onerror = () => setState("idle");
    uttRef.current = utt;
    window.speechSynthesis.speak(utt);
    setState("playing");
  };
  const pause = () => {
    window.speechSynthesis.pause();
    setState("paused");
  };
  const stop = () => {
    window.speechSynthesis.cancel();
    setState("idle");
  };

  return (
    <SiteLayout>
      <motion.article
        className="container-eq pt-12 pb-24 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Blog
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{new Date(post.date).toLocaleDateString("fr-FR")}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readingTime}</span>
          <span>· {post.author}</span>
        </motion.div>

        <motion.h1
          className="mt-4 text-[32px] lg:text-[48px] font-semibold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {post.title}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          {post.excerpt}
        </motion.p>

        <motion.div
          className="mt-8 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src={post.cover}
            alt={post.title}
            className="w-full h-auto"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>

        {supported && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -2, boxShadow: "0 20px 40px -20px rgba(0,76,153,0.25)" }}
            className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-4"
          >
            <motion.div
              className="h-10 w-10 rounded-full grid place-items-center text-white shrink-0"
              style={{ backgroundColor: "#f18f01" }}
              animate={state === "playing" ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={state === "playing" ? { duration: 1.2, repeat: Infinity } : { duration: 0.3 }}
            >
              <Volume2 className="h-5 w-5" />
            </motion.div>
            <div className="flex-1 text-sm">
              <p className="font-semibold">{t("blog.listen")}</p>
              <p className="text-muted-foreground text-xs">
                {state === "playing" ? "En lecture…" : state === "paused" ? "En pause" : "Text-to-Speech"}
              </p>
            </div>
            <div className="flex gap-2">
              {state !== "playing" ? (
                <motion.button
                  onClick={play}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-full text-white grid place-items-center"
                  style={{ backgroundColor: "#004c99" }}
                  aria-label="Play"
                >
                  <Play className="h-4 w-4" />
                </motion.button>
              ) : (
                <motion.button
                  onClick={pause}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-full text-white grid place-items-center"
                  style={{ backgroundColor: "#004c99" }}
                  aria-label="Pause"
                >
                  <Pause className="h-4 w-4" />
                </motion.button>
              )}
              <motion.button
                onClick={stop}
                disabled={state === "idle"}
                whileHover={state !== "idle" ? { scale: 1.1 } : {}}
                whileTap={state !== "idle" ? { scale: 0.95 } : {}}
                className="h-10 w-10 rounded-full border border-border grid place-items-center disabled:opacity-40 hover:border-brand transition-colors"
                aria-label="Stop"
              >
                <Square className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        )}

        <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-foreground/90">
          {post.content.split("\n\n").map((para: string, i: number) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Autres articles</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {POSTS.filter((p) => p.slug !== post.slug).slice(0, 2).map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block rounded-2xl border border-border p-5 hover:border-brand transition-colors h-full">
                  <p className="font-semibold text-sm">{p.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{p.readingTime}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.article>
    </SiteLayout>
  );
}

