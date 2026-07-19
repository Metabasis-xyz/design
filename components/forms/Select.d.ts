import * as React from "react";
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** Option list: strings or {value,label}. */
  options: (string | { value: string; label: string })[];
  size?: "sm" | "md";
  style?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
