import React, { useState } from "react";

/** Square icon-only button for toolbars. Pass a Lucide SVG or glyph as children. */
export function IconButton({ size = "md", label, active, disabled, children, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const dim = size === "sm" ? "var(--control-h-sm)" : "var(--control-h-md)";
  return (
    <button
      aria-label={label} title={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: dim, height: dim, display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: active ? "var(--accent-subtle)" : hover ? "var(--surface-sunken)" : "transparent",
        color: active ? "var(--accent)" : "var(--text-secondary)",
        border: "1px solid transparent", borderRadius: "var(--radius-sm)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1,
        transition: "background var(--dur-fast) var(--ease)", ...style,
      }} {...rest}
    >{children}</button>
  );
}
