import React from "react";

/** Surface card. 1px border, 4px radius, whisper shadow in light mode. */
export function Card({ title, action, padding = "var(--space-5)", children, style }) {
  return (
    <div style={{
      background: "var(--surface-card)", border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", ...style,
    }}>
      {(title || action) && (
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "var(--space-3) var(--space-5)", borderBottom: "1px solid var(--border-hairline)",
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>{title}</span>
          {action}
        </div>
      )}
      <div style={{ padding }}>{children}</div>
    </div>
  );
}
