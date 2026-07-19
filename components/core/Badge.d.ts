import * as React from "react";
export interface BadgeProps {
  /** Tinted fill: neutral | accent | up (filled/positive) | down (rejected/negative) | warn (pending). */
  tone?: "neutral" | "accent" | "up" | "down" | "warn";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
