import * as React from "react";
export interface TagProps {
  children?: React.ReactNode;
  /** If set, renders a × remove affordance. */
  onRemove?: () => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
