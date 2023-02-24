import styled from "styled-components";

export const AddButtonContainer = styled.button<{
  isTextDark?: boolean;
}>`
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  text-align: left;
  padding: 12px 10px;
  background-color: #ffffff3d;
  font-size: 16px;
  color: ${({ isTextDark = false }) => (isTextDark ? "#000" : "#fff")};
  transition: background 0.4s ease-in;

  &:hover {
    background-color: #ffffff52;
    cursor: pointer;
  }
`;
