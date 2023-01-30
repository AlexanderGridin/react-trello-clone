import { PropsWithChildren } from "react";
import styled from "styled-components";
import { ButtonType } from "shared/enums/ButtonType";
import { AddButton } from "App/components/AddButton/AddButton";
import { PropsWithClick } from "shared/models/PropsWithClick";

export const Container = styled(AddButton)`
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
