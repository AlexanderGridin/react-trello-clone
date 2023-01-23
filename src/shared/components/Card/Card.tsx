import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import { CardContent } from "./components/CardContent";
import { RemoveCardButton } from "./components/RemoveCardButton";
import { CardContainer } from "./components/CardContainer";
import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import { useCardActions } from "./hooks/useCardActions";

export interface CardProps extends PropsWithChildren {
  onRemove: () => void;
}

type Ref = ForwardedRef<HTMLDivElement>;

export const Card = forwardRef((props: CardProps, ref: Ref) => {
  const { children } = props;
  const { remove } = useCardActions(props);

  return (
    <CardContainer ref={ref}>
      <CardContent>{children}</CardContent>

      <RemoveCardButton onClick={remove}>
        <Icon icon={MaterialIcon.Delete} />
      </RemoveCardButton>
    </CardContainer>
  );
});
