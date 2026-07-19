import React from "react";

/** Status badge — tiny uppercase mono label with tinted fill. */
export function Badge({ tone = "neutral", children, style }) {
  const tones = {
    neutral: { background: "var(--surface-sunken)", color: "var(--text-secondary)" },
    accent: { background: "var(--accent-subtle)", color: "var(--accent)" },
    up: { background: "var(--up-subtle)", color: "var(--up)" },
    down: { background: "var(--down-subtle)", color: "var(--down)" },
    warn: { background: "var(--warn-subtle)", color: "var(--warn)" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px", padding: "2px 8px",
      fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500,
      letterSpacing: "var(--tracking-wide)", textTransform: "uppercase",
      borderRadius: "var(--radius-sm)", whiteSpace: "nowrap",
      ...tones[tone], ...style,
    }}>{children}</span>
  );
}
