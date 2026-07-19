import React from "react";
import { Input } from "./Input.jsx";
import { Select } from "./Select.jsx";
import { Checkbox } from "./Checkbox.jsx";
import { Radio } from "./Radio.jsx";
import { Switch } from "./Switch.jsx";

export function Demo() {
  const [chk, setChk] = React.useState(true);
  const [sw, setSw] = React.useState(true);
  const [tif, setTif] = React.useState("gtc");
  return (
    <div style={{ padding: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, alignItems: "start" }}>
      <Input label="Quantity" mono suffix="lots" placeholder="0.00" defaultValue="2.50" />
      <Input label="Limit price" mono prefix="$" defaultValue="1.08425" />
      <Select label="Order type" options={["Limit","Market","Stop","Stop limit"]} />
      <Input label="Entity name" placeholder="Legal entity" error="Required for KYC review" />
      <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 20 }}>
        <Checkbox label="Post-only" checked={chk} onChange={setChk} />
        <Switch label="One-click trading" checked={sw} onChange={setSw} />
      </div>
      <div style={{ paddingTop: 20 }}>
        <Radio value={tif} onChange={setTif} options={[{value:"gtc",label:"Good till cancel"},{value:"ioc",label:"Immediate or cancel"},{value:"fok",label:"Fill or kill"}]} />
      </div>
    </div>
  );
}
