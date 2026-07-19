import * as React from "react";
export interface ToastProps {
  /** Status rail color: up = fill/success, down = reject/error, warn = pending, accent = info. */
  tone?: "neutral" | "accent" | "up" | "down" | "warn";
  title: string;
  detail?: string;
  /** Mono timestamp, e.g. "14:32:07". */
  time?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
