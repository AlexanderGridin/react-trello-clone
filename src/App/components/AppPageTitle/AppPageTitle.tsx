import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.3;
  color: #fff;
`;

interface AppPageTitleProps extends PropsWithChildren {}

export const AppPageTitle = ({ children }: AppPageTitleProps) => {
  return <Container>{children}</Container>;
};
