import { ReactNode } from "react";
import styled from "styled-components";
import { FullWidthButton } from "styles";

export const ButtonContainer = styled(FullWidthButton)`
  padding: 12px 10px;
  background-color: #ffffff3d;
  color: #000;
  margin-right: 0;

  &:hover {
    background-color: #ffffff52;
  }
`;

interface AddTaskButtonProps {
  children?: ReactNode;
  onClick: () => void;
}

export const AddTaskButton = ({
  children,
  onClick,
}: AddTaskButtonProps): JSX.Element => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
