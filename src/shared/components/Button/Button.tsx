import { PropsWithChildren } from "react";
import { ButtonType } from "shared/enums/ButtonType";
import { PropsWithClick } from "shared/models/PropsWithClick";
import {
  ButtonContainer,
  ButtonContainerProps,
} from "./components/ButtonContainer";

export interface ButtonProps
  extends ButtonContainerProps,
    PropsWithChildren,
    PropsWithClick {
  type?: ButtonType;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    type = ButtonType.Button,
    className = "",
    children,
    onClick,
    ...containerProps
  } = props;

  return (
    <ButtonContainer
      type={type}
      className={className}
      {...containerProps}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};