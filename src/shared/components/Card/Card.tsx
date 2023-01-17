import { ReactNode } from "react";
import { Icon } from "shared/enums/Icon";
import { MaterialIcon } from "shared/components/MaterialIcon";
import { CardContent } from "./components/CardContent";
import { RemoveCardButton } from "./components/RemoveCardButton";
import { CardContainer } from "./components/CardContainer";

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
        <MaterialIcon icon={Icon.Delete} />
      </RemoveCardButton>
    </CardContainer>
  );
};
