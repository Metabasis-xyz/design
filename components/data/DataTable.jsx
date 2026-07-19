import React from "react";

/** Dense data table. columns: [{key, label, align?, mono?, render?}]; rows: objects. */
export function DataTable({ columns = [], rows = [], dense, onRowClick, style }) {
  const rowH = dense ? "var(--terminal-row-h)" : "36px";
  const cell = (c) => ({
    padding: "0 12px", textAlign: c.align || "left", whiteSpace: "nowrap",
    fontFamily: c.mono ? "var(--font-mono)" : "var(--font-sans)",
    fontVariantNumeric: "tabular-nums",
  });
  return (
    <table style={{ borderCollapse: "collapse", width: "100%", fontSize: dense ? "12px" : "13px", ...style }}>
      <thead>
        <tr style={{ height: "26px", borderBottom: "1px solid var(--border-default)" }}>
          {columns.map((c) => (
            <th key={c.key} style={{ ...cell(c), fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} onClick={onRowClick ? () => onRowClick(r, i) : undefined}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-sunken)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            style={{ height: rowH, borderBottom: "1px solid var(--border-hairline)", cursor: onRowClick ? "pointer" : "default", transition: "background var(--dur-fast) var(--ease)" }}>
            {columns.map((c) => (
              <td key={c.key} style={{ ...cell(c), color: "var(--text-primary)" }}>{c.render ? c.render(r[c.key], r) : r[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
