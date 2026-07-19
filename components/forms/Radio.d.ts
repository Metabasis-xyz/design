import * as React from "react";
export interface RadioProps {
  options: { value: string; label: React.ReactNode }[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  /** Layout of the group. */
  direction?: "row" | "column";
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
