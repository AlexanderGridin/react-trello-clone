import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from "react";
import { CardContent } from "./components/CardContent";
import { CardContainer } from "./components/CardContainer";
import styled from "styled-components";

export interface CardProps extends PropsWithChildren {
  slotHeader?: ReactNode;
  slotContent?: ReactNode;
  slotFooter?: ReactNode;
  backgroundColor?: string;
  className?: string;
  minHeight?: number;
}

type Ref = ForwardedRef<HTMLDivElement>;

const CardHeader = styled.div``;

const CardFooter = styled.div``;

export const Card = forwardRef((props: CardProps, ref: Ref) => {
  const {
    slotHeader,
    slotContent,
    slotFooter,
    backgroundColor,
    className = "",
    minHeight = 0,
    children,
  } = props;

  return (
    <CardContainer
      ref={ref}
      backgroundColor={backgroundColor}
      className={className}
      minHeight={minHeight}
    >
      {!children && (
        <>
          {slotHeader && <CardHeader>{slotHeader}</CardHeader>}
          {slotContent && <CardContent>{slotContent}</CardContent>}
          {slotFooter && <CardFooter>{slotFooter}</CardFooter>}
        </>
      )}

      {children}
    </CardContainer>
  );
});
