import React from "react";
import { PriceChange } from "./PriceChange.jsx";
import { TickerCell } from "./TickerCell.jsx";
import { StatBlock } from "./StatBlock.jsx";
import { DataTable } from "./DataTable.jsx";
import { Badge } from "../core/Badge.jsx";

export function Demo() {
  return (
    <div style={{ padding: 16, display: "grid", gridTemplateColumns: "220px 1fr", gap: 16 }}>
      <div style={{ border: "1px solid var(--border-default)", background: "var(--surface-card)" }}>
        <TickerCell symbol="EUR/USD" name="Euro / US Dollar" last="1.08425" change={0.0013} percent={0.12} active onClick={() => {}} />
        <TickerCell symbol="SPX500" name="US 500 Index" last="6,104.25" change={86.4} percent={1.42} onClick={() => {}} />
        <TickerCell symbol="XAU/USD" name="Gold Spot" last="2,418.90" change={-12.35} percent={-0.51} onClick={() => {}} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", gap: 28 }}>
          <StatBlock label="Median latency" value="412µs" detail="NY4 co-location" />
          <StatBlock label="24h notional" value="$8.4B" />
          <div style={{ paddingTop: 20 }}><PriceChange value={1.42} percent={0.12} size="lg" /></div>
        </div>
        <DataTable dense
          columns={[
            { key: "sym", label: "Symbol", mono: true },
            { key: "side", label: "Side", render: (v) => <Badge tone={v === "Buy" ? "up" : "down"}>{v}</Badge> },
            { key: "qty", label: "Qty", align: "right", mono: true },
            { key: "px", label: "Avg px", align: "right", mono: true },
            { key: "pnl", label: "PnL", align: "right", render: (v) => <PriceChange value={v} arrow={false} size="sm" /> },
          ]}
          rows={[
            { sym: "EUR/USD", side: "Buy", qty: "2,500,000", px: "1.08312", pnl: 2825 },
            { sym: "SPX500", side: "Sell", qty: "40", px: "6,118.00", pnl: -550 },
          ]} />
      </div>
    </div>
  );
}
