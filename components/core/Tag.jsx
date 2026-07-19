import React from "react";

/** Removable tag / filter chip. Sentence case, bordered, no fill. */
export function Tag({ children, onRemove, style }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px", padding: "3px 8px",
      fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--text-secondary)",
      border: "1px solid var(--border-default)", borderRadius: "var(--radius-sm)",
      background: "var(--surface-card)", whiteSpace: "nowrap", ...style,
    }}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{
          all: "unset", cursor: "pointer", lineHeight: 1, fontSize: "12px",
          color: "var(--text-muted)", padding: "0 1px",
        }}>×</button>
      )}
    </span>
  );
}
