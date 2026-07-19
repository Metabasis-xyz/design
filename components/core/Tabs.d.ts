import * as React from "react";
export interface TabsProps {
  items: { id: string; label: string }[];
  /** Controlled active id. Omit for uncontrolled (first item). */
  value?: string;
  onChange?: (id: string) => void;
  /** sm for terminal panel tabs. */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
