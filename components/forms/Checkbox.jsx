import React from "react";

/** Square checkbox with label. Controlled: checked + onChange. */
export function Checkbox({ label, checked, onChange, disabled, style }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-primary)", ...style }}>
      <span onClick={() => !disabled && onChange && onChange(!checked)} style={{
        width: "16px", height: "16px", display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: checked ? "var(--accent)" : "var(--surface-card)",
        border: "1px solid " + (checked ? "var(--accent)" : "var(--border-strong)"),
        borderRadius: "var(--radius-sm)", color: "#FFFFFF", fontSize: "11px", lineHeight: 1,
        transition: "background var(--dur-fast) var(--ease)", flex: "none",
      }}>{checked ? "✓" : ""}</span>
      <span onClick={() => !disabled && onChange && onChange(!checked)}>{label}</span>
    </label>
  );
}
