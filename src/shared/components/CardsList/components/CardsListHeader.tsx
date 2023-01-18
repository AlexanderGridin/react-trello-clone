import { FlexContainer } from "shared/components/FlexContainer";
import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import styled from "styled-components";
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
        <Icon icon={MaterialIcon.Delete} />
      </RemoveListButton>
    </CardsListHeaderContainer>
  );
};
