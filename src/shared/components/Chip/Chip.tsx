import MuiChip from "@mui/material/Chip";
import { IChildren, IClassName } from "shared/models";

interface IChipProps extends IChildren, IClassName {
  backgroundColor?: string | null;
}

export const Chip = ({ className, backgroundColor = null, children }: IChipProps) => {
  return <MuiChip label={children} className={className} sx={{ fontSize: "14px", backgroundColor }} />;
};
