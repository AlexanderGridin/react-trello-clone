import MuiChip from "@mui/material/Chip";
import { IChildren, IClassName } from "shared/models";

interface IChipProps extends IChildren<string>, IClassName {}

export const Chip = ({ className, children }: IChipProps) => {
  return <MuiChip label={children} className={className} sx={{ fontSize: "14px" }} />;
};
