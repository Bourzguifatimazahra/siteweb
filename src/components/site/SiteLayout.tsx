import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { PageLoader } from "./PageLoader";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoader />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
