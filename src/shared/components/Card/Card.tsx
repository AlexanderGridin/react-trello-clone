import { ReactNode } from "react";
import { CardContent } from "./components/CardContent";
import { RemoveCardButton } from "./components/RemoveCardButton";
import { CardContainer } from "./components/CardContainer";
import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/enums/MaterialIcon";

interface CardProps {
  children?: ReactNode;
  onRemove: () => void;
}

export const Card = ({ children, onRemove }: CardProps): JSX.Element => {
  const remove = () => onRemove();

  return (
    <CardContainer>
      <CardContent>{children}</CardContent>

      <RemoveCardButton onClick={remove}>
        <Icon icon={MaterialIcon.Delete} />
      </RemoveCardButton>
    </CardContainer>
  );
};
