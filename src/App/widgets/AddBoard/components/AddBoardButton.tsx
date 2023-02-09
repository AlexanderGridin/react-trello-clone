import { PropsWithChildren } from "react";
import styled from "styled-components";
import { PropsWithClick } from "shared/models/PropsWithClick";
import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { ButtonType } from "shared/components/Button/enums/ButtonType";

const Container = styled(AddButtonContainer)`
  min-height: 150px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

interface AddBoardButtonProps extends PropsWithChildren, PropsWithClick {}

export const AddBoardButton = ({ children, onClick }: AddBoardButtonProps) => {
  return (
    <Container type={ButtonType.Button} isFullWidth onClick={onClick}>
      {children}
    </Container>
  );
};
