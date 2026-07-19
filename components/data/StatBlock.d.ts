import * as React from "react";
export interface StatBlockProps {
  /** Uppercase mono label, e.g. "Median latency". */
  label: string;
  /** The stat itself, e.g. "412µs", "99.99%". */
  value: string;
  /** Optional one-line qualifier below. */
  detail?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
