import React from "react";
import { Badge } from "../../components/core/Badge.jsx";
import { Button } from "../../components/core/Button.jsx";

const STEPS = [
  { n: "01", head: "Submit entity documents", body: "Corporate structure, beneficial ownership, and regulatory registrations through a single secure intake." },
  { n: "02", head: "Verification review", body: "Institutional accounts clear review in a median of 2 business days. You'll work with a named reviewer, not a queue." },
  { n: "03", head: "Connect and trade", body: "FIX 4.4/5.0 and binary gateways, sandbox first. Certification to production in under a week." },
];

export function ComplianceSection() {
  return (
    <section data-screen-label="Compliance" style={{ background: "var(--surface-page)", borderBottom: "1px solid var(--border-default)" }}>
      <div style={{ maxWidth: "var(--container-marketing)", margin: "0 auto", padding: "96px 24px", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64 }}>
        <div>
          <Badge tone="accent">KYC by design</Badge>
          <h2 style={{ margin: "16px 0 0", fontSize: "var(--text-2xl)", fontWeight: 600, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>Compliance is the product, not the paperwork.</h2>
          <p style={{ margin: "16px 0 0", fontSize: 15, lineHeight: "var(--leading-normal)", color: "var(--text-secondary)", maxWidth: "44ch" }}>
            METABASIS operates as regulated market infrastructure on the Canton network. Identity verification, position limits, and surveillance run at the exchange layer — so your desk inherits them instead of building them.
          </p>
          <div style={{ marginTop: 28 }}><Button variant="secondary">Talk to compliance</Button></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, padding: "20px 0", borderTop: "1px solid var(--border-default)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>{s.n}</span>
              <div>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{s.head}</h3>
                <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: "var(--leading-normal)", color: "var(--text-secondary)" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
