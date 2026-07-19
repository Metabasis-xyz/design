import React from "react";
import { StatBlock } from "../../components/data/StatBlock.jsx";

export function StatsBand() {
  return (
    <section data-screen-label="Stats band" style={{ background: "var(--surface-page)", borderBottom: "1px solid var(--border-default)" }}>
      <div style={{ maxWidth: "var(--container-marketing)", margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        <StatBlock size="lg" label="Median latency" value="412µs" detail="Order to acknowledgment, NY4" />
        <StatBlock size="lg" label="Instruments" value="1,240+" detail="FX, commodities, equities, digital" />
        <StatBlock size="lg" label="24h notional" value="$8.4B" detail="Across all books" />
        <StatBlock size="lg" label="Uptime" value="99.99%" detail="Trailing 12 months" />
      </div>
    </section>
  );
}
