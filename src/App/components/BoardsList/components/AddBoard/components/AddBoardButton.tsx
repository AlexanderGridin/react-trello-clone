import { PropsWithChildren } from "react";
import styled from "styled-components";
import { FullWidthButton } from "shared/components/Buttons/FullWidthButton";
import { ButtonType } from "shared/enums/ButtonType";

export const ButtonContainer = styled(FullWidthButton)`
  padding: 7px 12px;
  min-height: 150px;
  background-color: #ffffff3d;
  color: #fff;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:hover {
    background-color: #ffffff52;
  }
`;

interface AddBoardButtonProps extends PropsWithChildren {
  onClick: () => void;
}

export const AddBoardButton = ({
  children,
  onClick,
}: AddBoardButtonProps): JSX.Element => {
  return (
    <ButtonContainer type={ButtonType.Button} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
