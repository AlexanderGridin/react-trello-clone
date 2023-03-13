import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";
import { TestId } from "shared/models/TestId";
import styled from "styled-components";
import { TButtonType } from "../Button/types/ButtonType";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { Icon } from "../Icon/Icon";
import style from "./IconButton.module.css";
import { IconButtonTestId } from "./static-data/IconButtonTestId";

const { Icon: IconId, Placeholder: PlaceholderId } = IconButtonTestId;

const Container = styled.button<{ isActive?: boolean; color?: string; activeColor?: string }>`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 24px;
  color: ${({ isActive, color, activeColor }) => (isActive ? activeColor : color)};

  &:hover {
    color: ${({ activeColor }) => activeColor};
    cursor: pointer;
  }
`;

interface IconButtonProps extends Click, ClassName, TestId {
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
    <Container
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
    </Container>
  );
};
