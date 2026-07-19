import React from "react";

/** Native select styled to system. options: [{value, label}] or strings. */
export function Select({ label, options = [], size = "md", style, selectStyle, ...rest }) {
  const h = size === "sm" ? "var(--control-h-sm)" : "var(--control-h-md)";
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>}
      <span style={{ position: "relative", display: "flex" }}>
        <select style={{
          appearance: "none", WebkitAppearance: "none", width: "100%", height: h,
          padding: "0 28px 0 10px", background: "var(--surface-card)", color: "var(--text-primary)",
          border: "1px solid var(--border-default)", borderRadius: "var(--radius-sm)",
          fontFamily: "var(--font-sans)", fontSize: "13px", cursor: "pointer", outline: "none", ...selectStyle,
        }} {...rest}>
          {options.map((o) => typeof o === "string"
            ? <option key={o} value={o}>{o}</option>
            : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-muted)", fontSize: "9px" }}>▾</span>
      </span>
    </label>
  );
}
