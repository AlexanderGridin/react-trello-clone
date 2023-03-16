import { ReactNode } from "react";

export type TTableChildrenConfig<RowType> = {
  cellValue: RowType[keyof RowType];
  field: keyof RowType;
  row: RowType;
};

export type TTableChildren<Row> = (config: TTableChildrenConfig<Row>) => ReactNode;
