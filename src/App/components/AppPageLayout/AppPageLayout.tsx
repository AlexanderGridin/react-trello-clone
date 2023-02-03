import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { Spinner } from "shared/components/Spinner/Spinner";

const AppPageLayoutContainer = styled.section`
  background-color: #292e39;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AppPageLayoutHeader = styled.header`
  padding: 20px;
`;

const AppPageLayoutContent = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  position: relative;
`;

interface AppPageLayoutProps extends PropsWithChildren {
  slotHeader?: ReactNode;
  isLoading?: boolean;
}

export const AppPageLayout = ({
  slotHeader,
  isLoading = false,
  children,
}: AppPageLayoutProps) => {
  return (
    <>
      <AppPageLayoutContainer>
        {slotHeader && <AppPageLayoutHeader>{slotHeader}</AppPageLayoutHeader>}
        {children && <AppPageLayoutContent>{children}</AppPageLayoutContent>}
      </AppPageLayoutContainer>

      {isLoading && <Spinner />}
    </>
  );
};
