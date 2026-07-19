import React from "react";

/** Big mono stat with uppercase label — the marketing "imagery". */
export function StatBlock({ label, value, detail, size = "md", style }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
      <span style={{
        fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontWeight: 500,
        fontSize: size === "lg" ? "var(--text-2xl)" : size === "sm" ? "var(--text-lg)" : "var(--text-xl)",
        letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)", lineHeight: 1.1,
      }}>{value}</span>
      {detail && <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--text-secondary)" }}>{detail}</span>}
    </div>
  );
}
