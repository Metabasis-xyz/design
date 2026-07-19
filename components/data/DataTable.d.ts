import * as React from "react";
export interface DataTableColumn {
  key: string;
  /** Uppercase mono column header. */
  label: string;
  align?: "left" | "right" | "center";
  /** Mono + tabular cells — set on every numeric column. */
  mono?: boolean;
  /** Custom cell renderer. */
  render?: (value: any, row: any) => React.ReactNode;
}
export interface DataTableProps {
  columns: DataTableColumn[];
  rows: Record<string, any>[];
  /** 28px terminal rows instead of 36px. */
  dense?: boolean;
  onRowClick?: (row: any, index: number) => void;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
