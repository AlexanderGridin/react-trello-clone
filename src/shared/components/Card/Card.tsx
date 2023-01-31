import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from "react";
import { CardContent } from "./components/CardContent";
import { CardContainer } from "./components/CardContainer";

export interface CardProps extends PropsWithChildren {
  slotHeader?: ReactNode;
  slotContent?: ReactNode;
  slotFooter?: ReactNode;
  backgroundColor?: string;
  className?: string;
  minHeight?: number;
  onDoubleClick?: () => void;
}

type Ref = ForwardedRef<HTMLDivElement>;

export const Card = forwardRef((props: CardProps, ref: Ref) => {
  const {
    slotHeader,
    slotContent,
    slotFooter,
    backgroundColor,
    className = "",
    minHeight = 0,
    children,
    onDoubleClick,
  } = props;

  return (
    <CardContainer
      ref={ref}
      backgroundColor={backgroundColor}
      className={className}
      minHeight={minHeight}
      onDoubleClick={onDoubleClick}
    >
      {!children && (
        <>
          {slotHeader && <div>{slotHeader}</div>}
          {slotContent && <CardContent>{slotContent}</CardContent>}
          {slotFooter && <div>{slotFooter}</div>}
        </>
      )}

      {children}
    </CardContainer>
  );
});
