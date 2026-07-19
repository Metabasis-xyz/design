import React, { useState } from "react";

const sizes = { sm: { h: "var(--control-h-sm)", pad: "0 10px", fs: "12px" }, md: { h: "var(--control-h-md)", pad: "0 14px", fs: "13px" }, lg: { h: "var(--control-h-lg)", pad: "0 18px", fs: "14px" } };

/** METABASIS button. variant: primary | secondary | ghost | danger; size: sm | md | lg */
export function Button({ variant = "primary", size = "md", disabled, children, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: { background: press ? "var(--blue-700)" : hover ? "var(--accent-hover)" : "var(--accent)", color: "#FFFFFF", border: "1px solid transparent" },
    secondary: { background: hover ? "var(--surface-sunken)" : "var(--surface-card)", color: "var(--text-primary)", border: "1px solid " + (hover ? "var(--border-strong)" : "var(--border-default)") },
    ghost: { background: hover ? "var(--surface-sunken)" : "transparent", color: "var(--text-secondary)", border: "1px solid transparent" },
    danger: { background: press ? "#A11F2A" : hover ? "var(--down-600)" : "var(--down-500)", color: "#FFFFFF", border: "1px solid transparent" },
  };
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
        height: s.h, padding: s.pad, fontFamily: "var(--font-sans)", fontSize: s.fs,
        fontWeight: 500, borderRadius: "var(--radius-sm)", cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1, transition: "background var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease)",
        ...variants[variant], ...style,
      }}
      {...rest}
    >{children}</button>
  );
}
