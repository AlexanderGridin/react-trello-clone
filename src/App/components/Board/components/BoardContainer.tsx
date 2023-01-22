import styled from "styled-components";

interface BoardContainerProps {
  isContainsHeader?: boolean;
}

export const BoardContainer = styled.section<BoardContainerProps>`
  background-color: #292e39;
  height: 100%;
  width: 100%;
  padding-top: ${({ isContainsHeader }: BoardContainerProps) =>
    isContainsHeader ? "50px" : "20px"};
  position: relative;
`;
