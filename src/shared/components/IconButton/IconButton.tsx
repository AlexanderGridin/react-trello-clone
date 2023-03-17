import { Icon } from "shared/components/Icon";
import { ITestId, IClick, IClassName } from "shared/models";
import { TButtonType } from "shared/components/Button/types";
import { MaterialIcon } from "shared/components/Icon/enums";

import { IconButtonTestId } from "./static-data";
import { StyledIconButton } from "./components";

import style from "./IconButton.module.css";

const { Icon: IconId, Placeholder: PlaceholderId } = IconButtonTestId;

interface IconButtonProps extends IClick, IClassName, ITestId {
  icon: MaterialIcon;
  type?: TButtonType;
  isActive?: boolean;
  color?: string;
  activeColor?: string;
}

export const IconButton = ({
  icon = MaterialIcon.Home,
  type = "button",
  isActive = false,
  className = "",
  color = "#a5a9b1",
  activeColor = "#5E81AC",
  "data-testid": testId,
  onClick,
}: IconButtonProps) => {
  return (
    <StyledIconButton
      data-testid={testId}
      type={type}
      isActive={isActive}
      className={`${className}`}
      color={color}
      activeColor={activeColor}
      onClick={onClick}
    >
      {icon !== MaterialIcon.None && <Icon data-testid={IconId} icon={icon} className={style.icon} />}
      {icon === MaterialIcon.None && <span data-testid={PlaceholderId}>No icon provided for IconButton...</span>}
    </StyledIconButton>
  );
};
