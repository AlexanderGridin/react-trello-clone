import { ReactNode, ReactElement } from "react";
import MuiTooltip from "@mui/material/Tooltip";

interface TooltipProps {
  children: ReactElement;
  content: ReactNode;
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <MuiTooltip title={content} arrow>
      <div style={{ display: "flex", alignItems: "flex-end" }}>{children}</div>
    </MuiTooltip>
  );
};
