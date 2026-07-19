import React from "react";
import { Button } from "../../components/core/Button.jsx";

export function SiteHeader() {
  const link = { fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none" };
  return (
    <header data-screen-label="Site header" style={{ position: "sticky", top: 0, zIndex: 20, background: "var(--surface-card)", borderBottom: "1px solid var(--border-default)" }}>
      <div style={{ maxWidth: "var(--container-marketing)", margin: "0 auto", height: 64, display: "flex", alignItems: "center", gap: 32, padding: "0 24px" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="../../assets/mark.svg" width="20" height="20" alt="" />
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.05em", color: "var(--text-primary)" }}>METABASIS</span>
        </a>
        <nav style={{ display: "flex", gap: 24, flex: 1 }}>
          <a href="#" style={link}>Markets</a>
          <a href="#" style={link}>Execution</a>
          <a href="#" style={link}>Compliance</a>
          <a href="#" style={link}>API</a>
          <a href="#" style={link}>Pricing</a>
        </nav>
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Request access</Button>
        </div>
      </div>
    </header>
  );
}
