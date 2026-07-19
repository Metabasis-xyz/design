import * as React from "react";
export interface TooltipProps {
  /** Short text (or small node) shown above the child on hover. */
  content: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
