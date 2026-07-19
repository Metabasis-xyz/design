import React from "react";

const LEVELS = [
  { px: "1.08435", size: 3200000 }, { px: "1.08433", size: 1800000 }, { px: "1.08431", size: 5400000 },
  { px: "1.08429", size: 2100000 }, { px: "1.08427", size: 4700000 },
];
const BIDS = [
  { px: "1.08423", size: 3900000 }, { px: "1.08421", size: 2600000 }, { px: "1.08419", size: 6100000 },
  { px: "1.08417", size: 1500000 }, { px: "1.08415", size: 3300000 },
];
const fmt = (n) => (n / 1e6).toFixed(1) + "M";

/** Price ladder with depth bars. */
export function OrderBook() {
  const maxSize = 6100000;
  const Row = ({ px, size, side }) => (
    <div style={{ position: "relative", display: "flex", justifyContent: "space-between", padding: "3px 12px", fontFamily: "var(--font-mono)", fontSize: 12, fontVariantNumeric: "tabular-nums" }}>
      <span style={{
        position: "absolute", top: 1, bottom: 1, right: 0,
        width: (size / maxSize) * 100 + "%",
        background: side === "ask" ? "var(--down-subtle)" : "var(--up-subtle)",
      }}></span>
      <span style={{ position: "relative", color: side === "ask" ? "var(--down)" : "var(--up)" }}>{px}</span>
      <span style={{ position: "relative", color: "var(--text-secondary)" }}>{fmt(size)}</span>
    </div>
  );
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 12px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", borderBottom: "1px solid var(--border-hairline)" }}>
        <span>PRICE</span><span>SIZE</span>
      </div>
      {LEVELS.map((l) => <Row key={l.px} {...l} side="ask" />)}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 12px", background: "var(--surface-raised)", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
        <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>1.08425</span>
        <span style={{ color: "var(--text-muted)" }}>0.4 pip</span>
      </div>
      {BIDS.map((l) => <Row key={l.px} {...l} side="bid" />)}
    </div>
  );
}
