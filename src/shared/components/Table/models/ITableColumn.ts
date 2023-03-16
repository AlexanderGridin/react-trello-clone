import { TAlign } from "../types";

export interface ITableColumn<Row> {
  title: string;
  field: keyof Row | "actions";
  align?: TAlign;
  cellAlign?: TAlign;
}
