import { ReactNode } from "react";

export type TTableChildren<Row> = (
  cellValue: Row[keyof Row],
  fieldName?: keyof Row | "actions",
  row?: Row
) => ReactNode;
