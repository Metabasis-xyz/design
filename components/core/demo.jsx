import React from "react";
import { Button } from "./Button.jsx";
import { IconButton } from "./IconButton.jsx";
import { Badge } from "./Badge.jsx";
import { Tag } from "./Tag.jsx";
import { Card } from "./Card.jsx";
import { Tabs } from "./Tabs.jsx";

export function Demo() {
  const [tab, setTab] = React.useState("pos");
  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <Button>Request access</Button>
        <Button variant="secondary">Read the docs</Button>
        <Button variant="ghost">Cancel</Button>
        <Button variant="danger">Close position</Button>
        <Button disabled>Disabled</Button>
        <IconButton label="Settings"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.2 4.2l2.8 2.8m10 10 2.8 2.8M1 12h4m14 0h4M4.2 19.8l2.8-2.8m10-10 2.8-2.8"/></svg></IconButton>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <Badge tone="up">Filled</Badge><Badge tone="warn">Pending</Badge><Badge tone="down">Rejected</Badge><Badge tone="accent">KYC verified</Badge><Badge>Draft</Badge>
        <Tag onRemove={() => {}}>FX majors</Tag><Tag onRemove={() => {}}>Commodities</Tag>
      </div>
      <Card title="Positions" action={<Tabs size="sm" items={[{id:"pos",label:"Open"},{id:"ord",label:"Orders"},{id:"hist",label:"History"}]} value={tab} onChange={setTab} style={{border:"none"}} />} padding="12px 20px">
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Card body — 1px border, 4px radius, whisper shadow.</span>
      </Card>
    </div>
  );
}
