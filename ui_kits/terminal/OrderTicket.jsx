import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { Input } from "../../components/forms/Input.jsx";
import { Select } from "../../components/forms/Select.jsx";
import { Checkbox } from "../../components/forms/Checkbox.jsx";

/** Buy/sell order ticket. */
export function OrderTicket({ symbol = "EUR/USD" }) {
  const [side, setSide] = React.useState("buy");
  const [post, setPost] = React.useState(false);
  const sideBtn = (s, label, col) => (
    <button onClick={() => setSide(s)} style={{
      all: "unset", boxSizing: "border-box", flex: 1, textAlign: "center", cursor: "pointer",
      padding: "7px 0", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
      color: side === s ? "#FFFFFF" : "var(--text-secondary)",
      background: side === s ? col : "var(--surface-card)",
      border: "1px solid " + (side === s ? "transparent" : "var(--border-default)"),
      borderRadius: "var(--radius-sm)",
    }}>{label}</button>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 12 }}>
      <div style={{ display: "flex", gap: 6 }}>
        {sideBtn("buy", "Buy", "var(--up)")}
        {sideBtn("sell", "Sell", "var(--down)")}
      </div>
      <Select label="Order type" size="sm" options={["Limit", "Market", "Stop", "Stop limit"]} />
      <Input label="Quantity" size="sm" mono suffix="EUR" defaultValue="2,500,000" />
      <Input label="Limit price" size="sm" mono defaultValue="1.08425" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Checkbox label="Post-only" checked={post} onChange={setPost} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>Margin $27,106</span>
      </div>
      <Button variant={side === "buy" ? "primary" : "danger"} style={side === "buy" ? { background: "var(--up)" } : undefined}>
        {side === "buy" ? "Buy" : "Sell"} {symbol}
      </Button>
    </div>
  );
}
