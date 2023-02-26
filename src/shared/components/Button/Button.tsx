import { CSSProperties } from "react";
import { MuiButton } from "./components/MuiButton";
import { ButtonType } from "./types/ButtonType";
import { ButtonVisualStyle } from "./types/ButtonVisualStyle";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { Icon } from "../Icon/Icon";
import { TestId } from "shared/models/TestId";
import { Click } from "shared/models/Click";
import { Children } from "shared/models/Children";
import cssStyle from "./Button.module.css";
import { ClassName } from "shared/models/ClassName";
import { ButtonTestId } from "./static-data/ButtonTestId";

const { Icon: IconId, Text: TextId } = ButtonTestId;

interface ButtonProps extends Click, Children<string>, TestId, ClassName {
  type?: ButtonType;
  icon?: MaterialIcon;
  isIconOnly?: boolean;
  style?: CSSProperties;
  visualStyle?: ButtonVisualStyle;
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
