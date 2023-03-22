import MuiTable from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";

import { IChildren } from "shared/models";

import { Spinner } from "../Spinner";
import { TablePapper } from "./components";
import { ITableColumn } from "./models";
import { TTableChildren } from "./types";

interface ITableProps<RowType> extends IChildren<TTableChildren<RowType>> {
  columns: ITableColumn<RowType>[];
  rows: RowType[];
  rowUniqueKey: keyof RowType;
  isLoading?: boolean;
}

export function Table<RowType>({ columns, rows, rowUniqueKey, isLoading = false, children }: ITableProps<RowType>) {
  return (
    <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden" }}>
      <TableContainer component={TablePapper} sx={{ maxWidth: "850px", minHeight: "350px" }}>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map(({ title, align = "left" }: ITableColumn<RowType>) => (
                <TableCell key={title} align={align} sx={{ fontSize: "24px" }}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow key={String(row[rowUniqueKey])} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {columns.map(({ field, cellAlign = "left" }: ITableColumn<RowType>) => (
                  <TableCell key={String(field)} align={cellAlign} sx={{ fontSize: "18px" }}>
                    {children ? children({ cellValue: row[field], field, row }) : <>{row[field]}</>}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {isLoading && <Spinner backgroundColor="#FFF" />}
    </div>
  );
}
