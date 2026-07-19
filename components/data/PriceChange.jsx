import React from "react";

/** Signed price change with US up/down colors and direction arrow. */
export function PriceChange({ value, percent, arrow = true, size = "md", style }) {
  const neg = (typeof value === "number" ? value : parseFloat(String(value).replace(/[+,]/g, ""))) < 0;
  const color = neg ? "var(--down)" : "var(--up)";
  const fmt = (v, pct) => {
    if (typeof v !== "number") return v;
    const dec = pct || Math.abs(v) >= 0.01 ? 2 : 4;
    const s = (v >= 0 ? "+" : "−") + Math.abs(v).toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
    return pct ? s + "%" : s;
  };
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", color,
      fontSize: size === "sm" ? "12px" : size === "lg" ? "16px" : "13px", whiteSpace: "nowrap", ...style,
    }}>
      {arrow && <span style={{ fontSize: "0.8em", marginRight: "4px" }}>{neg ? "▼" : "▲"}</span>}
      {fmt(value, false)}{percent !== undefined && <span> ({fmt(percent, true)})</span>}
    </span>
  );
}
