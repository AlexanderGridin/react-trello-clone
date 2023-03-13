import { ForwardedRef, forwardRef, ReactNode } from "react";
import { CardContent } from "./components/CardContent";
import { CardContainer } from "./components/CardContainer";
import { Spinner } from "../Spinner/Spinner";
import { IChildren, ITestId, IClassName } from "shared/models";
import { CardTestId } from "./static-data/CardTestId";

const { Header: HeaderId, Content: ContentId, Footer: FooterId, Spinner: SpinnerId } = CardTestId;

export interface ICardProps extends IChildren, IClassName, ITestId {
  slotHeader?: ReactNode;
  slotContent?: ReactNode;
  slotFooter?: ReactNode;
  backgroundColor?: string;
  minHeight?: number;
  isLoading?: boolean;
  onDoubleClick?: () => void;
}

type TRef = ForwardedRef<HTMLDivElement>;

export const Card = forwardRef((props: ICardProps, ref: TRef) => {
  const {
    slotHeader,
    slotContent,
    slotFooter,
    backgroundColor,
    className = "",
    minHeight = 0,
    isLoading = false,
    "data-testid": testId,
    children,
    onDoubleClick,
  } = props;

  return (
    <CardContainer
      ref={ref}
      data-testid={testId}
      backgroundColor={backgroundColor}
      className={className}
      minHeight={minHeight}
      onDoubleClick={onDoubleClick}
    >
      {!children && (
        <>
          {slotHeader && <div data-testid={HeaderId}>{slotHeader}</div>}
          {slotContent && <CardContent data-testid={ContentId}>{slotContent}</CardContent>}
          {slotFooter && <div data-testid={FooterId}>{slotFooter}</div>}
        </>
      )}

      {children}
      {isLoading && <Spinner data-testid={SpinnerId} backgroundColor="#d8dee9" />}
    </CardContainer>
  );
});
