import * as React from "react";
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name; also the tooltip title. Required. */
  label: string;
  /** sm 28px (terminal toolbars) or md 36px. */
  size?: "sm" | "md";
  /** Pressed/selected state — accent-subtle fill. */
  active?: boolean;
  disabled?: boolean;
  /** A 16–20px Lucide SVG (stroke 1.5, currentColor). */
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
