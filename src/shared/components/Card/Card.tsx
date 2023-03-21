import { ForwardedRef, forwardRef, ReactNode } from "react";

import { Spinner } from "shared/components/Spinner";
import { IChildren, ITestId, IClassName } from "shared/models";

import { CardTestId } from "./static-data";
import { StyledCard } from "./components";

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
    backgroundColor = "#FFF",
    className = "",
    minHeight = 0,
    isLoading = false,
    "data-testid": testId,
    children,
    onDoubleClick,
  } = props;

  return (
    <StyledCard
      ref={ref}
      data-testid={testId}
      backgroundColor={backgroundColor}
      className={className}
      minHeight={minHeight}
      onDoubleClick={onDoubleClick}
    >
      <div style={{ width: "100%" }}>
        {!children ? (
          <>
            {slotHeader ? <div data-testid={HeaderId}>{slotHeader}</div> : null}
            {slotContent ? (
              <div data-testid={ContentId} style={{ margin: "7px 0", flexGrow: "1" }}>
                {slotContent}
              </div>
            ) : null}
            {slotFooter ? <div data-testid={FooterId}>{slotFooter}</div> : null}
          </>
        ) : null}

        {children}
        {isLoading ? <Spinner data-testid={SpinnerId} backgroundColor={backgroundColor} /> : null}
      </div>
    </StyledCard>
  );
});
