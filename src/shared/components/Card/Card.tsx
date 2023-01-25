import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from "react";
import { CardContent } from "./components/CardContent";
import { CardContainer } from "./components/CardContainer";
import styled from "styled-components";

export interface CardProps extends PropsWithChildren {
  header?: ReactNode;
  footer?: ReactNode;
  backgroundColor?: string;
  className?: string;
}

type Ref = ForwardedRef<HTMLDivElement>;

const CardHeader = styled.div`
  margin-bottom: 7px;
`;

const CardFooter = styled.div`
  margin-top: 7px;
`;

export const Card = forwardRef((props: CardProps, ref: Ref) => {
  const { header, footer, backgroundColor, className = "", children } = props;

  return (
    <CardContainer
      ref={ref}
      backgroundColor={backgroundColor}
      className={className}
    >
      {header && <CardHeader>{header}</CardHeader>}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
});
