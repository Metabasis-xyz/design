import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { PriceChange } from "../../components/data/PriceChange.jsx";

/** Small static dark terminal vignette used as hero imagery. */
function TerminalVignette() {
  const row = (sym, px, chg, pct) => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 16, padding: "7px 14px", borderBottom: "1px solid var(--border-hairline)", fontFamily: "var(--font-mono)", fontSize: 12, fontVariantNumeric: "tabular-nums" }}>
      <span style={{ fontWeight: 600 }}>{sym}</span>
      <span>{px}</span>
      <PriceChange value={chg} percent={pct} arrow={false} size="sm" />
    </div>
  );
  return (
    <div data-theme="dark" style={{ background: "var(--surface-page)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-lg)", overflow: "hidden", color: "var(--text-primary)", boxShadow: "var(--shadow-overlay)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderBottom: "1px solid var(--border-default)", background: "var(--surface-card)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)" }}>LIVE BOOK — FX MAJORS</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)" }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--up)" }}></span>NY4 · 412µs</span>
      </div>
      {row("EUR/USD", "1.08425", 0.0013, 0.12)}
      {row("USD/JPY", "158.240", -0.412, -0.26)}
      {row("GBP/USD", "1.29310", 0.0021, 0.16)}
      {row("XAU/USD", "2,418.90", -12.35, -0.51)}
      {row("SPX500", "6,104.25", 86.4, 1.42)}
    </div>
  );
}

export function Hero() {
  return (
    <section data-screen-label="Hero" style={{ background: "var(--surface-card)", borderBottom: "1px solid var(--border-default)" }}>
      <div style={{ maxWidth: "var(--container-marketing)", margin: "0 auto", padding: "88px 24px 96px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
        <div>
          <Badge tone="accent">Institutional CFD exchange</Badge>
          <h1 style={{ margin: "20px 0 0", fontSize: "var(--text-4xl)", fontWeight: 600, letterSpacing: "var(--tracking-tight)", lineHeight: "var(--leading-tight)", color: "var(--text-primary)", textWrap: "balance" }}>
            CFD execution, without the intermediary stack.
          </h1>
          <p style={{ margin: "20px 0 0", fontSize: "var(--text-md)", lineHeight: "var(--leading-normal)", color: "var(--text-secondary)", maxWidth: "48ch" }}>
            METABASIS is a global, fully-KYC exchange for FX, commodity, equity, and digital-asset CFDs. Every counterparty clears identity verification before their first order. You trade against a known book.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <Button size="lg">Request access</Button>
            <Button variant="secondary" size="lg">Read the docs</Button>
          </div>
          <p style={{ margin: "24px 0 0", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>For institutions and professional traders. Retail access by application.</p>
        </div>
        <TerminalVignette />
      </div>
    </section>
  );
}
