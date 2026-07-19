import React from "react";
import { Button } from "../../components/core/Button.jsx";

export function SiteFooter() {
  const col = (title, links) => (
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
        {links.map((l) => <a key={l} href="#" style={{ fontSize: 13, color: "var(--text-secondary)", textDecoration: "none" }}>{l}</a>)}
      </div>
    </div>
  );
  return (
    <>
      <section data-screen-label="CTA band" data-theme="dark" style={{ background: "var(--surface-page)" }}>
        <div style={{ maxWidth: "var(--container-marketing)", margin: "0 auto", padding: "72px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <h2 style={{ margin: 0, fontSize: "var(--text-2xl)", fontWeight: 600, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)", maxWidth: "22ch" }}>Bring your flow to a known book.</h2>
          <div style={{ display: "flex", gap: 12, flex: "none" }}>
            <Button size="lg">Request access</Button>
            <Button variant="secondary" size="lg">Contact sales</Button>
          </div>
        </div>
      </section>
      <footer data-screen-label="Footer" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border-default)" }}>
        <div style={{ maxWidth: "var(--container-marketing)", margin: "0 auto", padding: "56px 24px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="../../assets/mark.svg" width="18" height="18" alt="" />
              <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.05em", color: "var(--text-primary)" }}>METABASIS</span>
            </span>
            <p style={{ margin: "14px 0 0", fontSize: 12, lineHeight: "var(--leading-normal)", color: "var(--text-muted)", maxWidth: "36ch" }}>
              CFDs are complex instruments and carry a high risk of losing money rapidly due to leverage. Access is subject to eligibility and jurisdiction.
            </p>
          </div>
          {col("Product", ["Markets", "Execution", "Market data", "API"])}
          {col("Company", ["About", "Careers", "Newsroom", "Contact"])}
          {col("Legal", ["Terms", "Privacy", "Regulatory disclosures", "Rulebook"])}
        </div>
        <div style={{ maxWidth: "var(--container-marketing)", margin: "0 auto", padding: "16px 24px 32px", borderTop: "1px solid var(--border-hairline)", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>
          <span>© 2026 Metabasis Markets, Inc.</span>
          <span>New York · London · Singapore</span>
        </div>
      </footer>
    </>
  );
}
