import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";
import { TestId } from "shared/models/TestId";
import styled from "styled-components";
import { ButtonType } from "../Button/types/ButtonType";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { Icon } from "../Icon/Icon";
import style from "./IconButton.module.css";
import { IconButtonTestId } from "./static-data/IconButtonTestId";

const { Icon: IconId, Placeholder: PlaceholderId } = IconButtonTestId;

const Container = styled.button<{ isActive?: boolean; activeColor?: string }>`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 24px;
  color: ${({ isActive, activeColor }) => (isActive ? activeColor : "#a5a9b1")};

  &:hover {
    color: ${({ activeColor }) => activeColor};
    cursor: pointer;
  }
`;

interface IconButtonProps extends Click, ClassName, TestId {
  icon: MaterialIcon;
  type?: ButtonType;
  isActive?: boolean;
  activeColor?: string;
}

export const IconButton = ({
  icon = MaterialIcon.Home,
  type = "button",
  isActive = false,
  className = "",
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
      activeColor={activeColor}
      onClick={onClick}
    >
      {icon !== MaterialIcon.None && <Icon data-testid={IconId} icon={icon} className={style.icon} />}
      {icon === MaterialIcon.None && <span data-testid={PlaceholderId}>No icon provided for IconButton...</span>}
    </Container>
  );
};