import React from "react";
import { Dialog } from "./Dialog.jsx";
import { Toast } from "./Toast.jsx";
import { Tooltip } from "./Tooltip.jsx";
import { Button } from "../core/Button.jsx";

export function Demo() {
  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Toast tone="up" title="Order filled" detail="Buy 2.5M EUR/USD @ 1.08425" time="14:32:07" onClose={() => {}} />
        <Toast tone="down" title="Order rejected" detail="Insufficient margin for SPX500 position" time="14:30:12" onClose={() => {}} />
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Tooltip content="Cancel all working orders"><Button variant="secondary" size="sm">Hover me</Button></Tooltip>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Tooltip on hover · Dialog below (statically rendered)</span>
      </div>
      <div style={{ position: "relative", height: 190, border: "1px solid var(--border-hairline)" }}>
        <div style={{ position: "absolute", inset: 0, transform: "scale(1)", overflow: "hidden" }}>
          <Dialog title="Cancel order" width={400} onClose={() => {}}
            footer={<React.Fragment><Button variant="secondary" size="sm">Keep order</Button><Button variant="danger" size="sm">Cancel order</Button></React.Fragment>}>
            Order #88213 — Sell 1.0M USD/JPY @ 158.240 will be removed from the book.
          </Dialog>
        </div>
      </div>
    </div>
  );
}
