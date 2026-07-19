import * as React from "react";
export interface CardProps {
  /** Optional uppercase mono header label. */
  title?: string;
  /** Optional right-aligned header element (IconButton, link). */
  action?: React.ReactNode;
  /** Body padding. Default var(--space-5). */
  padding?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
