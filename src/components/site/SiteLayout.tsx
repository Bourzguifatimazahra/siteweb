import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { PageLoader } from "./PageLoader";
import { WhatsAppButton } from "./WhatsAppButton";
import { ChatWidget } from "./ChatWidget";
import { LanguageProvider } from "@/lib/i18n";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <PageLoader />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <CookieBanner />
      <WhatsAppButton />
      <ChatWidget />
      <Toaster position="top-center" />
    </LanguageProvider>
  );
}
