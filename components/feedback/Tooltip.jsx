import React, { useState } from "react";

/** Hover tooltip. Wraps children; content appears above on hover. */
export function Tooltip({ content, children, style }) {
  const [show, setShow] = useState(false);
  return (
    <span onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      style={{ position: "relative", display: "inline-flex", ...style }}>
      {children}
      {show && (
        <span role="tooltip" style={{
          position: "absolute", bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)",
          background: "var(--surface-inverse)", color: "var(--text-inverse)",
          fontFamily: "var(--font-sans)", fontSize: "12px", lineHeight: 1.4,
          padding: "5px 8px", borderRadius: "var(--radius-sm)", whiteSpace: "nowrap",
          boxShadow: "var(--shadow-overlay)", zIndex: 50, pointerEvents: "none",
        }}>{content}</span>
      )}
    </span>
  );
}
