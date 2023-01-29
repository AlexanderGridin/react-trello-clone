import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

const AppPageLayoutContainer = styled.section`
  background-color: #292e39;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const AppPageLayoutHeader = styled.header``;

const AppPageLayoutContent = styled.div`
  flex-grow: 1;
  padding: 7px 20px;
`;

interface AppPageLayoutProps extends PropsWithChildren {
  slotHeader?: ReactNode;
}

export const AppPageLayout = ({ slotHeader, children }: AppPageLayoutProps) => {
  return (
    <AppPageLayoutContainer>
      {slotHeader && <AppPageLayoutHeader>{slotHeader}</AppPageLayoutHeader>}
      {children && <AppPageLayoutContent>{children}</AppPageLayoutContent>}
    </AppPageLayoutContainer>
  );
};
