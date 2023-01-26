import { PropsWithChildren } from "react";
import styled from "styled-components";
import { FullWidthButton } from "shared/components/Buttons/FullWidthButton";
import { ButtonType } from "shared/enums/ButtonType";

export const ButtonContainer = styled(FullWidthButton)`
  padding: 12px 10px;
  background-color: #ffffff3d;
  color: #000;
  margin-right: 0;

  &:hover {
    background-color: #ffffff52;
  }
`;

interface AddTaskButtonProps extends PropsWithChildren {
  onClick: () => void;
}

export const AddTaskButton = ({
  children,
  onClick,
}: AddTaskButtonProps): JSX.Element => {
  return (
    <ButtonContainer type={ButtonType.Button} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
