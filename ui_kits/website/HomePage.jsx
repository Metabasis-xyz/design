import React from "react";
import { SiteHeader } from "./SiteHeader.jsx";
import { Hero } from "./Hero.jsx";
import { StatsBand } from "./StatsBand.jsx";
import { ProductSection } from "./ProductSection.jsx";
import { ComplianceSection } from "./ComplianceSection.jsx";
import { SiteFooter } from "./SiteFooter.jsx";

export function HomePage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--surface-page)" }}>
      <SiteHeader />
      <Hero />
      <StatsBand />
      <ProductSection />
      <ComplianceSection />
      <SiteFooter />
    </div>
  );
}
