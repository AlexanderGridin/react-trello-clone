import MuiChip from "@mui/material/Chip";

import { IChildren, IClassName } from "shared/models";

interface IChipProps extends Required<IChildren>, IClassName {
  textColor?: string;
  backgroundColor?: string;
}

export const Chip = ({ className, textColor = "#000", backgroundColor = "#ebebeb", children }: IChipProps) => {
  return (
    <MuiChip label={children} className={className} sx={{ fontSize: "14px", backgroundColor, color: textColor }} />
  );
};
