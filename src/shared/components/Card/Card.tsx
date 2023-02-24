import { ForwardedRef, forwardRef, ReactNode } from "react";
import { CardContent } from "./components/CardContent";
import { CardContainer } from "./components/CardContainer";
import { Spinner } from "../Spinner/Spinner";
import { Children } from "shared/models/Children";
import { ClassName } from "shared/models/ClassName";

export interface CardProps extends Children, ClassName {
  slotHeader?: ReactNode;
  slotContent?: ReactNode;
  slotFooter?: ReactNode;
  backgroundColor?: string;
  minHeight?: number;
  isLoading?: boolean;
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
    isLoading = false,
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
      {isLoading && <Spinner backgroundColor="#d8dee9" />}
    </CardContainer>
  );
});
