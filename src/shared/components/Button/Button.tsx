import { CSSProperties } from "react";
import { MuiButton } from "./components/MuiButton";
import { TButtonType, TButtonVisualStyle } from "./types";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { Icon } from "../Icon/Icon";
import { IChildren, ITestId, IClick, IClassName } from "shared/models";
import { ButtonTestId } from "./static-data/ButtonTestId";
import cssStyle from "./Button.module.css";

const { Icon: IconId, Text: TextId } = ButtonTestId;

interface IButtonProps extends IClick, IChildren<string>, ITestId, IClassName {
  type?: TButtonType;
  icon?: MaterialIcon;
  isIconOnly?: boolean;
  style?: CSSProperties;
  visualStyle?: TButtonVisualStyle;
}

export const Button = ({
  type = "button",
  visualStyle = "regular",
  icon = MaterialIcon.None,
  isIconOnly = false,
  children = "Button",
  className = "",
  style = {},
  "data-testid": testId,
  onClick,
}: IButtonProps) => {
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
    <MuiButton data-testid={testId} type={type} sx={sx} className={className} onClick={onClick}>
      {icon !== MaterialIcon.None && <Icon data-testid={IconId} icon={icon} className={cssStyle.icon} />}

      {!isIconOnly && (
        <span data-testid={TextId} className={cssStyle.text}>
          {children}
        </span>
      )}
    </MuiButton>
  );
};
