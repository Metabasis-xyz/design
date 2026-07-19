import * as React from "react";
/** @startingPoint section="Components" subtitle="Primary, secondary, ghost, danger buttons" viewport="700x260" */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary". One primary per view. */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Control height: sm 28px (terminal), md 36px (default), lg 44px (marketing CTAs). */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
