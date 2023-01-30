import styled from "styled-components";
import { ButtonStyle } from "../enums/ButtonStyle";
import { getButtonBackgroundByStyle } from "../utils/getButtonBackgroundByStyle";

export interface ButtonContainerProps {
  buttonStyle?: ButtonStyle;
  isFullWidth?: boolean;
  isEqualPaddings?: boolean;
  isTextDark?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${({ isFullWidth = false }) => (isFullWidth ? "100%" : "auto")};
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: ${({ isTextDark = false }) => (isTextDark ? "#000" : "#fff")};
  padding: ${({ isEqualPaddings = false }) =>
    isEqualPaddings ? "7px" : "7px 12px"};
  margin-right: 7px;
  transition: background 0.4s ease-in;
  background-color: ${({ buttonStyle = ButtonStyle.Regular }) =>
    getButtonBackgroundByStyle(buttonStyle)};

  &:hover {
    cursor: pointer;
  }
`;
