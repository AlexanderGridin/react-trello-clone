import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { AppNavigation } from "./AppNavigation/AppNavigation";

const AppLayoutContainer = styled.div`
  height: 100%;
  display: flex;
`;

const AppLayoutAside = styled.aside`
  width: 320px;
  flex-shrink: 0;
  background-color: #3b4252;
  padding: 20px;
`;

const AppLayoutMain = styled.main`
  width: 100%;
  position: relative;
`;

export const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <AppLayoutAside>
        <AppNavigation />
      </AppLayoutAside>

      <AppLayoutMain>
        <Outlet />
      </AppLayoutMain>
    </AppLayoutContainer>
  );
};
