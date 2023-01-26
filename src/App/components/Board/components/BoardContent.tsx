import { ReactNode } from "react";
import styled from "styled-components";

const BoardContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  padding: 5px 20px 0;
  height: 100%;
`;

interface BoardContentProps {
  children?: ReactNode;
}

export const BoardContent = ({ children }: BoardContentProps) => {
  return (
    <>
      <BoardContentContainer>{children}</BoardContentContainer>
    </>
  );
};