import React from "react";

/** Inline toast/notification row. tone maps to left status rail color. */
export function Toast({ tone = "neutral", title, detail, time, onClose, style }) {
  const colors = { neutral: "var(--text-muted)", accent: "var(--accent)", up: "var(--up)", down: "var(--down)", warn: "var(--warn)" };
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: "10px", width: 360, maxWidth: "100%",
      background: "var(--surface-raised)", border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-overlay)",
      padding: "10px 12px", fontFamily: "var(--font-sans)", ...style,
    }}>
      <span style={{ width: "3px", alignSelf: "stretch", background: colors[tone], flex: "none", borderRadius: "1px" }}></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>{title}</span>
          {time && <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>{time}</span>}
        </div>
        {detail && <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>{detail}</div>}
      </div>
      {onClose && <button onClick={onClose} aria-label="Dismiss" style={{ all: "unset", cursor: "pointer", color: "var(--text-muted)", fontSize: "14px", lineHeight: 1 }}>×</button>}
    </div>
  );
}
