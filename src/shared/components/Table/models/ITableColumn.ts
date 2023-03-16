import { TAlign } from "../types";

export interface ITableColumn<RowType> {
  title: string;
  field: keyof RowType;
  align?: TAlign;
  cellAlign?: TAlign;
}
