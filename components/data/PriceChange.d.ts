import * as React from "react";
export interface PriceChangeProps {
  /** Numeric change (sign decides color) or a pre-formatted string. */
  value: number | string;
  /** Optional percent change, rendered in parentheses. */
  percent?: number;
  /** Show ▲/▼ direction arrow. Default true. */
  arrow?: boolean;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}
export declare function PriceChange(props: PriceChangeProps): JSX.Element;
