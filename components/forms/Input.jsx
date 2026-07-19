import React, { useState } from "react";

/** Text input with optional label, mono mode for numeric fields, and prefix/suffix slots. */
export function Input({ label, hint, error, mono, prefix, suffix, size = "md", style, inputStyle, ...rest }) {
  const [focus, setFocus] = useState(false);
  const h = size === "sm" ? "var(--control-h-sm)" : "var(--control-h-md)";
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-sans)", ...style }}>
      {label && <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>}
      <span style={{
        display: "flex", alignItems: "center", height: h, background: "var(--surface-card)",
        border: "1px solid " + (error ? "var(--down)" : focus ? "var(--blue-500)" : "var(--border-default)"),
        borderRadius: "var(--radius-sm)", transition: "border-color var(--dur-fast) var(--ease)",
      }}>
        {prefix && <span style={{ padding: "0 0 0 10px", fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{prefix}</span>}
        <input
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
            padding: "0 10px", height: "100%", color: "var(--text-primary)",
            fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)", fontSize: "13px",
            fontVariantNumeric: "tabular-nums", ...inputStyle,
          }} {...rest}
        />
        {suffix && <span style={{ padding: "0 10px 0 0", fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{suffix}</span>}
      </span>
      {(error || hint) && <span style={{ fontSize: "12px", color: error ? "var(--down)" : "var(--text-muted)" }}>{error || hint}</span>}
    </label>
  );
}
