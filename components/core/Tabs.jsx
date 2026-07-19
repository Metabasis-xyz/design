import React, { useState } from "react";

/** Underline tabs. items: [{id, label}]; controlled via value/onChange or uncontrolled. */
export function Tabs({ items = [], value, onChange, size = "md", style }) {
  const [internal, setInternal] = useState(items[0] && items[0].id);
  const current = value !== undefined ? value : internal;
  const set = (id) => { setInternal(id); onChange && onChange(id); };
  return (
    <div role="tablist" style={{ display: "flex", gap: "var(--space-5)", borderBottom: "1px solid var(--border-default)", ...style }}>
      {items.map((it) => {
        const active = it.id === current;
        return (
          <button key={it.id} role="tab" aria-selected={active} onClick={() => set(it.id)} style={{
            all: "unset", cursor: "pointer", padding: size === "sm" ? "6px 0" : "10px 0",
            fontFamily: "var(--font-sans)", fontSize: size === "sm" ? "12px" : "13px", fontWeight: 500,
            color: active ? "var(--text-primary)" : "var(--text-secondary)",
            boxShadow: active ? "inset 0 -2px 0 var(--accent)" : "none",
            marginBottom: "-1px", transition: "color var(--dur-fast) var(--ease)",
          }}>{it.label}</button>
        );
      })}
    </div>
  );
}
