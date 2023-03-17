import styled from "styled-components";

export const StyledIconButton = styled.button<{ isActive?: boolean; color?: string; activeColor?: string }>`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 24px;
  color: ${({ isActive, color, activeColor }) => (isActive ? activeColor : color)};

  &:hover {
    color: ${({ activeColor }) => activeColor};
    cursor: pointer;
  }
`;
