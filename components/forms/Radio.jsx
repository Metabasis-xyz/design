import React from "react";

/** Radio group. options: [{value, label}]; controlled via value/onChange. */
export function Radio({ options = [], value, onChange, name, disabled, direction = "column", style }) {
  return (
    <div role="radiogroup" style={{ display: "flex", flexDirection: direction, gap: direction === "row" ? "16px" : "8px", ...style }}>
      {options.map((o) => {
        const sel = o.value === value;
        return (
          <label key={o.value} style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-primary)" }}
            onClick={() => !disabled && onChange && onChange(o.value)}>
            <span style={{
              width: "16px", height: "16px", borderRadius: "50%", flex: "none",
              border: sel ? "5px solid var(--accent)" : "1px solid var(--border-strong)",
              background: "var(--surface-card)", boxSizing: "border-box",
              transition: "border var(--dur-fast) var(--ease)",
            }}></span>
            {o.label}
          </label>
        );
      })}
    </div>
  );
}
