import { PropsWithChildren } from "react";
import styled from "styled-components";

const BoardPageContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  height: 100%;
`;

interface BoardPageContentProps extends PropsWithChildren {}

export const BoardPageContent = ({ children }: BoardPageContentProps) => {
  return (
    <>
      <BoardPageContentContainer>{children}</BoardPageContentContainer>
    </>
  );
};
