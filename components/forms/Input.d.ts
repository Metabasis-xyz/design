import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase mono field label above the control. */
  label?: string;
  /** Helper text below. */
  hint?: string;
  /** Error message below; also reddens the border. */
  error?: string;
  /** Mono + tabular numerals — REQUIRED for any numeric field (size, price, qty). */
  mono?: boolean;
  /** Leading slot (currency code, search glyph). */
  prefix?: React.ReactNode;
  /** Trailing slot (unit, e.g. "USD", "lots"). */
  suffix?: React.ReactNode;
  size?: "sm" | "md";
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
