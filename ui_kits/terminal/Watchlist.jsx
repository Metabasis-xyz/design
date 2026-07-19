import React from "react";
import { TickerCell } from "../../components/data/TickerCell.jsx";
import { Tag } from "../../components/core/Tag.jsx";

export const INSTRUMENTS = [
  { symbol: "EUR/USD", name: "Euro / US Dollar", last: "1.08425", change: 0.0013, percent: 0.12, cls: "FX" },
  { symbol: "USD/JPY", name: "US Dollar / Yen", last: "158.240", change: -0.412, percent: -0.26, cls: "FX" },
  { symbol: "GBP/USD", name: "Pound / US Dollar", last: "1.29310", change: 0.0021, percent: 0.16, cls: "FX" },
  { symbol: "SPX500", name: "US 500 Index", last: "6,104.25", change: 86.4, percent: 1.42, cls: "Indices" },
  { symbol: "NAS100", name: "US Tech 100", last: "22,310.75", change: 402.1, percent: 1.84, cls: "Indices" },
  { symbol: "XAU/USD", name: "Gold Spot", last: "2,418.90", change: -12.35, percent: -0.51, cls: "Commodities" },
  { symbol: "WTI", name: "Crude Oil WTI", last: "71.84", change: 0.62, percent: 0.87, cls: "Commodities" },
  { symbol: "AAPL", name: "Apple Inc", last: "246.18", change: 1.92, percent: 0.79, cls: "Equities" },
  { symbol: "NVDA", name: "NVIDIA Corp", last: "182.44", change: -3.15, percent: -1.70, cls: "Equities" },
  { symbol: "BTC/USD", name: "Bitcoin CFD", last: "118,420", change: 1240, percent: 1.06, cls: "Digital" },
];

export function Watchlist({ selected, onSelect }) {
  const [cls, setCls] = React.useState(null);
  const shown = cls ? INSTRUMENTS.filter((i) => i.cls === cls) : INSTRUMENTS;
  const classes = ["FX", "Indices", "Commodities", "Equities", "Digital"];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 6, padding: "10px 12px", flexWrap: "wrap", borderBottom: "1px solid var(--border-hairline)" }}>
        {classes.map((c) => (
          <button key={c} onClick={() => setCls(cls === c ? null : c)} style={{
            all: "unset", cursor: "pointer", padding: "2px 7px", fontSize: 11,
            fontFamily: "var(--font-sans)", borderRadius: "var(--radius-sm)",
            border: "1px solid " + (cls === c ? "var(--accent)" : "var(--border-default)"),
            color: cls === c ? "var(--accent)" : "var(--text-secondary)",
            background: cls === c ? "var(--accent-subtle)" : "transparent",
          }}>{c}</button>
        ))}
      </div>
      <div style={{ overflowY: "auto", flex: 1 }}>
        {shown.map((i) => (
          <TickerCell key={i.symbol} {...i} active={selected === i.symbol} onClick={() => onSelect(i.symbol)} />
        ))}
      </div>
    </div>
  );
}
