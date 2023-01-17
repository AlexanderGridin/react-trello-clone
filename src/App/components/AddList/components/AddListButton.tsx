import { ReactNode } from "react";
import styled from "styled-components";
import { FullWidthButton } from "styles";

export const ButtonContainer = styled(FullWidthButton)`
  padding: 12px 10px;
  background-color: #ffffff3d;
  margin-right: 0;

  &:hover {
    background-color: #ffffff52;
  }
`;

interface AddListButtonProps {
  children?: ReactNode;
  onClick: () => void;
}

export const AddListButton = ({
  children,
  onClick,
}: AddListButtonProps): JSX.Element => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
