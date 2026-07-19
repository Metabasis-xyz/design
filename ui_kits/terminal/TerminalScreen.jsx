import React from "react";
import { Watchlist, INSTRUMENTS } from "./Watchlist.jsx";
import { CandleChart } from "./CandleChart.jsx";
import { OrderBook } from "./OrderBook.jsx";
import { OrderTicket } from "./OrderTicket.jsx";
import { Tabs } from "../../components/core/Tabs.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { DataTable } from "../../components/data/DataTable.jsx";
import { PriceChange } from "../../components/data/PriceChange.jsx";
import { StatBlock } from "../../components/data/StatBlock.jsx";

const POSITIONS = [
  { sym: "EUR/USD", side: "Buy", qty: "2,500,000", px: "1.08312", mkt: "1.08425", pnl: 2825 },
  { sym: "SPX500", side: "Sell", qty: "40", px: "6,118.00", mkt: "6,104.25", pnl: 550 },
  { sym: "XAU/USD", side: "Buy", qty: "500", px: "2,431.20", mkt: "2,418.90", pnl: -6150 },
];
const ORDERS = [
  { sym: "USD/JPY", side: "Sell", qty: "1,000,000", px: "158.600", type: "Limit", status: "Working" },
  { sym: "NVDA", side: "Buy", qty: "5,000", px: "180.00", type: "Limit", status: "Working" },
];

export function TerminalScreen() {
  const [selected, setSelected] = React.useState("EUR/USD");
  const [tab, setTab] = React.useState("pos");
  const inst = INSTRUMENTS.find((i) => i.symbol === selected) || INSTRUMENTS[0];
  const panel = { background: "var(--surface-card)", border: "1px solid var(--border-default)", display: "flex", flexDirection: "column", overflow: "hidden", minHeight: 0 };
  const panelHead = { padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1px solid var(--border-hairline)", flex: "none" };
  return (
    <div data-theme="dark" style={{ height: "100vh", minHeight: 860, display: "flex", flexDirection: "column", background: "var(--surface-page)", color: "var(--text-primary)", fontFamily: "var(--font-sans)" }}>
      <header data-screen-label="Terminal top bar" style={{ height: "var(--terminal-header-h)", flex: "none", display: "flex", alignItems: "center", gap: 20, padding: "0 16px", borderBottom: "1px solid var(--border-default)", background: "var(--surface-card)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <img src="../../assets/mark-inverse.svg" width="18" height="18" alt="" />
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.05em" }}>METABASIS</span>
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-sm)", padding: "4px 10px", flex: "0 1 260px", display: "flex", justifyContent: "space-between" }}>
          <span>Search instruments</span><span>⌘K</span>
        </span>
        <span style={{ flex: 1 }}></span>
        <span style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" }}>
          <span><span style={{ color: "var(--text-muted)" }}>EQUITY</span> $4,218,340</span>
          <span><span style={{ color: "var(--text-muted)" }}>MARGIN</span> 12.4%</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--up)" }}></span>NY4 · 412µs</span>
        </span>
        <Badge tone="accent">KYC verified</Badge>
      </header>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "240px 1fr 280px", gridTemplateRows: "minmax(0,1fr) 240px", gap: 8, padding: 8, minHeight: 0 }}>
        <section data-screen-label="Watchlist" style={{ ...panel, gridColumn: "1", gridRow: "1 / 3" }}>
          <div style={panelHead}>Watchlist</div>
          <Watchlist selected={selected} onSelect={setSelected} />
        </section>
        <section data-screen-label="Chart" style={{ ...panel, gridColumn: "2", gridRow: "1" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 18, padding: "12px 16px", borderBottom: "1px solid var(--border-hairline)", flex: "none" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 600 }}>{inst.symbol}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{inst.last}</span>
            <PriceChange value={inst.change} percent={inst.percent} />
            <span style={{ flex: 1 }}></span>
            <span style={{ display: "flex", gap: 24 }}>
              <StatBlock size="sm" label="24h volume" value="$1.2B" />
              <StatBlock size="sm" label="Open interest" value="$684M" />
            </span>
          </div>
          <div style={{ flex: 1, minHeight: 0, padding: "8px 8px 4px" }}>
            <CandleChart height="100%" seed={inst.symbol.length * 13} />
          </div>
        </section>
        <section data-screen-label="Order book and ticket" style={{ ...panel, gridColumn: "3", gridRow: "1 / 3" }}>
          <div style={panelHead}>Order book — {inst.symbol}</div>
          <OrderBook />
          <div style={{ ...panelHead, borderTop: "1px solid var(--border-hairline)" }}>Order ticket</div>
          <OrderTicket symbol={inst.symbol} />
        </section>
        <section data-screen-label="Positions and orders" style={{ ...panel, gridColumn: "2", gridRow: "2" }}>
          <div style={{ padding: "0 12px", flex: "none" }}>
            <Tabs size="sm" value={tab} onChange={setTab} items={[{ id: "pos", label: "Positions (3)" }, { id: "ord", label: "Working orders (2)" }, { id: "fills", label: "Fills" }]} />
          </div>
          <div style={{ overflowY: "auto", flex: 1 }}>
            {tab === "ord" ? (
              <DataTable dense
                columns={[
                  { key: "sym", label: "Symbol", mono: true },
                  { key: "side", label: "Side", render: (v) => <Badge tone={v === "Buy" ? "up" : "down"}>{v}</Badge> },
                  { key: "qty", label: "Qty", align: "right", mono: true },
                  { key: "px", label: "Price", align: "right", mono: true },
                  { key: "type", label: "Type" },
                  { key: "status", label: "Status", render: (v) => <Badge tone="warn">{v}</Badge> },
                ]} rows={ORDERS} />
            ) : (
              <DataTable dense
                columns={[
                  { key: "sym", label: "Symbol", mono: true },
                  { key: "side", label: "Side", render: (v) => <Badge tone={v === "Buy" ? "up" : "down"}>{v}</Badge> },
                  { key: "qty", label: "Qty", align: "right", mono: true },
                  { key: "px", label: "Avg px", align: "right", mono: true },
                  { key: "mkt", label: "Mark", align: "right", mono: true },
                  { key: "pnl", label: "Unrealized PnL", align: "right", render: (v) => <PriceChange value={v} arrow={false} size="sm" /> },
                ]} rows={tab === "fills" ? [] : POSITIONS} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
