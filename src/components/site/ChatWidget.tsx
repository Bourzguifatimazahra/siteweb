import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLang } from "@/lib/i18n";

const COPY = {
  fr: {
    online: "● En ligne",
    questions: [
      "Quels sont vos services ?",
      "Comment obtenir un devis ?",
      "Parlez-moi du stockage BESS",
      "Vos références au Maroc ?",
    ],
  },
  en: {
    online: "● Online",
    questions: [
      "What are your services?",
      "How do I get a quote?",
      "Tell me about BESS storage",
      "Your references in Morocco?",
    ],
  },
  es: {
    online: "● En línea",
    questions: [
      "¿Cuáles son sus servicios?",
      "¿Cómo obtener un presupuesto?",
      "Hábleme del almacenamiento BESS",
      "¿Sus referencias en Marruecos?",
    ],
  },
  zh: {
    online: "● 在线",
    questions: [
      "你们提供哪些服务？",
      "如何获取报价？",
      "请介绍一下 BESS 储能",
      "你们在摩洛哥有哪些参考项目？",
    ],
  },
  ar: {
    online: "● متصل",
    questions: [
      "ما هي خدماتكم؟",
      "كيف أحصل على عرض سعر؟",
      "حدثني عن تخزين الطاقة BESS",
      "ما هي مراجعكم في المغرب؟",
    ],
  },
} as const;

const transport = new DefaultChatTransport({ api: "/api/chat" });

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { t, dir, lang } = useLang();
  const c = COPY[lang];
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    id: "eqnovia-chat",
    transport,
    messages: [] as UIMessage[],
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    sendMessage({ text }, { body: { lang } });
    setInput("");
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t("chat.title")}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg grid place-items-center text-white"
        style={{ backgroundColor: "#f18f01" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            dir={dir}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-sm h-[540px] max-h-[calc(100vh-8rem)] rounded-3xl bg-background border border-border shadow-elegant flex flex-col overflow-hidden"
          >
            <div className="p-4 flex items-center gap-3 border-b border-border" style={{ background: "linear-gradient(135deg, #004c99 0%, #003366 100%)" }}>
              <div className="h-10 w-10 rounded-full grid place-items-center text-white" style={{ backgroundColor: "#f18f01" }}>
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="text-white flex-1">
                <p className="font-semibold text-sm">{t("chat.title")}</p>
                <p className="text-xs text-white/70">{c.online}</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/40">
              {messages.length === 0 && (
                <>
                  <div className="rounded-2xl bg-background border border-border px-4 py-3 text-sm text-foreground max-w-[85%]">
                    {t("chat.welcome")}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {c.questions.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage({ text: q }, { body: { lang } })}
                        className="text-xs rounded-full border border-border bg-background px-3 py-1.5 hover:border-brand hover:text-brand transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {messages.map((m) => {
                const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm max-w-[85%] ${
                        isUser
                          ? "text-white whitespace-pre-wrap"
                          : "bg-background border border-border text-foreground prose prose-sm max-w-none prose-headings:mt-2 prose-headings:mb-1 prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-a:text-brand"
                      }`}
                      style={isUser ? { backgroundColor: "#004c99" } : undefined}
                    >
                      {isUser ? text : <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>}
                    </div>
                  </div>
                );
              })}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-background border border-border px-4 py-3 text-sm flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-brand animate-bounce" />
                    <span className="h-2 w-2 rounded-full bg-brand animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="h-2 w-2 rounded-full bg-brand animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={submit} className="p-3 border-t border-border bg-background flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chat.placeholder")}
                className="flex-1 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-primary-soft"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-10 w-10 rounded-full text-white grid place-items-center disabled:opacity-50 transition-transform hover:scale-105"
                style={{ backgroundColor: "#f18f01" }}
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
