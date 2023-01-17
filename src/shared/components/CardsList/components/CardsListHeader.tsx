import { MaterialIcon } from "shared/components/MaterialIcon";
import { Icon } from "shared/enums/Icon";
import styled from "styled-components";
import { FlexContainer } from "styles";
import { ListTitle } from "./CardsListTitle";
import { RemoveListButton } from "./RemoveListButton";

export const CardsListHeaderContainer = styled(FlexContainer)`
  margin-bottom: 12px;
`;

interface CardsListHeaderProps {
  title: string;
  onRemove: () => void;
}

export const CardsListHeader = ({
  title,
  onRemove,
}: CardsListHeaderProps): JSX.Element => {
  const remove = () => onRemove();

  return (
    <CardsListHeaderContainer>
      <ListTitle> {title}</ListTitle>

      <RemoveListButton onClick={remove}>
        <MaterialIcon icon={Icon.Delete} />
      </RemoveListButton>
    </CardsListHeaderContainer>
  );
};
