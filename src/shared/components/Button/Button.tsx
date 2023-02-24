import { MuiButton } from "./components/MuiButton";
import { ButtonType } from "./types/ButtonType";
import { ButtonVisualStyle } from "./types/ButtonVisualStyle";
import cssStyle from "./Button.module.css";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { Icon } from "../Icon/Icon";
import { CSSProperties } from "react";

interface ButtonProps {
  type?: ButtonType;
  visualStyle?: ButtonVisualStyle;
  icon?: MaterialIcon;
  isIconOnly?: boolean;
  className?: string;
  children?: string;
  style?: CSSProperties;
  onClick: () => void;
}

export const Button = ({
  type = "button",
  visualStyle = "regular",
  icon,
  isIconOnly = false,
  children = "",
  className = "",
  style = {},
  onClick,
}: ButtonProps) => {
  const bgColor =
    (visualStyle === "regular" && "#5E81AC") ||
    (visualStyle === "error" && "#BF616A") ||
    (visualStyle === "success" && "#A3BE8C");

  const sx = {
    backgroundColor: `${bgColor}`,
    "&:hover": {
      backgroundColor: `${bgColor}`,
    },
    ...style,
  };

  return (
    <MuiButton type={type} sx={sx} className={className} onClick={onClick}>
      {icon && <Icon icon={icon} className={cssStyle.icon} />}
      {!isIconOnly && <span className={cssStyle.text}>{children}</span>}
    </MuiButton>
  );
};
