import React from "react";

/** Modal dialog. Render conditionally; open state owned by parent. */
export function Dialog({ title, children, footer, onClose, width = 440 }) {
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(11,12,14,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100,
    }}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} style={{
        width, maxWidth: "calc(100vw - 48px)", background: "var(--surface-raised)",
        border: "1px solid var(--border-default)", borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-overlay)", fontFamily: "var(--font-sans)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-4) var(--space-5)", borderBottom: "1px solid var(--border-hairline)" }}>
          <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>{title}</span>
          <button onClick={onClose} aria-label="Close" style={{ all: "unset", cursor: "pointer", color: "var(--text-muted)", fontSize: "16px", lineHeight: 1, padding: "2px" }}>×</button>
        </div>
        <div style={{ padding: "var(--space-5)", color: "var(--text-secondary)", fontSize: "13px", lineHeight: "var(--leading-normal)" }}>{children}</div>
        {footer && <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", padding: "var(--space-4) var(--space-5)", borderTop: "1px solid var(--border-hairline)" }}>{footer}</div>}
      </div>
    </div>
  );
}
