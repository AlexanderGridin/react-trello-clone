import { ReactNode } from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IChildren } from "shared/models";
import { Spinner } from "../Spinner/Spinner";

export type TAlign = "left" | "right" | "center" | "justify";

export interface ITableColumn<Row> {
  title: string;
  field: keyof Row | "actions";
  align?: TAlign;
  cellAlign?: TAlign;
}

const CustomPapper = (props: any) => <Paper elevation={6} {...props} />;

type TTableChildren<Row> = (cellValue: Row[keyof Row], fieldName?: keyof Row | "actions", row?: Row) => ReactNode;

interface ITableProps<Row> extends IChildren<TTableChildren<Row>> {
  columns: ITableColumn<Row>[];
  rows: Row[];
  isLoading?: boolean;
}

export function Table<Row>({ columns, rows, isLoading = false, children }: ITableProps<Row>) {
  return (
    <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden" }}>
      <TableContainer component={CustomPapper} sx={{ maxWidth: "850px", minHeight: "350px" }}>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map(({ title, align = "left" }: ITableColumn<Row>) => (
                <TableCell key={title} align={align} sx={{ fontSize: "24px" }}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {columns.map(({ field, cellAlign: contentAlign = "left" }: ITableColumn<Row>) => (
                  <TableCell key={field as string} align={contentAlign} sx={{ fontSize: "18px" }}>
                    {children ? children(row[field], field, row) : row[field]}
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
