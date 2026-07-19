import * as React from "react";
export interface DialogProps {
  title?: string;
  children?: React.ReactNode;
  /** Right-aligned action row (Buttons). */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Pixel width. Default 440. */
  width?: number;
}
export declare function Dialog(props: DialogProps): JSX.Element;
