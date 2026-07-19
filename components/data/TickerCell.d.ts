import * as React from "react";
export interface TickerCellProps {
  /** Instrument code, e.g. "EUR/USD", "SPX500". */
  symbol: string;
  /** Full name, e.g. "Euro / US Dollar". */
  name?: string;
  /** Last price, pre-formatted string. */
  last: string;
  /** Numeric change (sign decides color). */
  change: number;
  percent?: number;
  /** Selected row — accent rail + subtle fill. */
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function TickerCell(props: TickerCellProps): JSX.Element;
