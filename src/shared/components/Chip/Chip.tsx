import MuiChip from "@mui/material/Chip";
import { Children } from "shared/models/Children";
import { ClassName } from "shared/models/ClassName";

interface ChipProps extends Children<string>, ClassName {}

export const Chip = ({ className, children }: ChipProps) => {
  return <MuiChip label={children} className={className} sx={{ fontSize: "14px" }} />;
};
