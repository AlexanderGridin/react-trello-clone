import { ReactNode, ReactElement } from "react";
import MuiTooltip from "@mui/material/Tooltip";

interface ITooltipProps {
  children: ReactElement;
  content: ReactNode;
}

export const Tooltip = ({ content, children }: ITooltipProps) => {
  return (
    <MuiTooltip title={content} arrow>
      <div style={{ display: "inline-flex", alignItems: "flex-end" }}>{children}</div>
    </MuiTooltip>
  );
};
