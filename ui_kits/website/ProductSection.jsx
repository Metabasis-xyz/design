import React from "react";
import { Card } from "../../components/core/Card.jsx";

const PILLARS = [
  { title: "Execution", head: "Built for the microsecond crowd", body: "Deterministic matching, FIX and binary gateways, co-location in NY4, LD4, and SG1. Full depth-of-book market data at every tier." },
  { title: "Counterparty certainty", head: "Every participant is verified", body: "Institution-grade KYC on every account before the first order. No anonymous flow, no toxic fill surprises — a known book on both sides." },
  { title: "Settlement", head: "Atomic, auditable settlement", body: "Positions settle on regulated market infrastructure with a complete, immutable audit trail your compliance team can query directly." },
];

export function ProductSection() {
  return (
    <section data-screen-label="Product pillars" style={{ background: "var(--surface-card)", borderBottom: "1px solid var(--border-default)" }}>
      <div style={{ maxWidth: "var(--container-marketing)", margin: "0 auto", padding: "96px 24px" }}>
        <h2 style={{ margin: 0, fontSize: "var(--text-2xl)", fontWeight: 600, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)", maxWidth: "24ch" }}>The exchange, reduced to what matters.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
          {PILLARS.map((p) => (
            <Card key={p.title} title={p.title}>
              <h3 style={{ margin: 0, fontSize: "var(--text-lg)", fontWeight: 600, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>{p.head}</h3>
              <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: "var(--leading-normal)", color: "var(--text-secondary)" }}>{p.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
