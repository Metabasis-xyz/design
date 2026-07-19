import React from "react";

/** Toggle switch. Controlled: checked + onChange. */
export function Switch({ label, checked, onChange, disabled, style }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-primary)", ...style }}
      onClick={() => !disabled && onChange && onChange(!checked)}>
      <span style={{
        width: "32px", height: "18px", borderRadius: "var(--radius-full)", position: "relative", flex: "none",
        background: checked ? "var(--accent)" : "var(--gray-300)",
        transition: "background var(--dur-base) var(--ease)",
      }}>
        <span style={{
          position: "absolute", top: "2px", left: checked ? "16px" : "2px",
          width: "14px", height: "14px", borderRadius: "50%", background: "#FFFFFF",
          transition: "left var(--dur-base) var(--ease)", boxShadow: "0 1px 2px rgba(11,12,14,0.25)",
        }}></span>
      </span>
      {label}
    </label>
  );
}
