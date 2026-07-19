import React from "react";
import { PriceChange } from "./PriceChange.jsx";

/** Watchlist/ticker row: symbol, name, last, change. */
export function TickerCell({ symbol, name, last, change, percent, active, onClick, style }) {
  return (
    <div onClick={onClick} style={{
      display: "grid", gridTemplateColumns: "1fr auto", gap: "2px 12px", alignItems: "baseline",
      padding: "6px 12px", cursor: onClick ? "pointer" : "default",
      background: active ? "var(--accent-subtle)" : "transparent",
      borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent", ...style,
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>{symbol}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "var(--text-primary)", textAlign: "right" }}>{last}</span>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
      <span style={{ textAlign: "right" }}><PriceChange value={change} percent={percent} arrow={false} size="sm" /></span>
    </div>
  );
}
