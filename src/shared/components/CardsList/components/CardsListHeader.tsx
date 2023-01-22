import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import styled from "styled-components";
import { CardsListTitle } from "./CardsListTitle";
import { RemoveListButton } from "./RemoveListButton";

export const CardsListHeaderContainer = styled.header`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
      <CardsListTitle> {title}</CardsListTitle>

      <RemoveListButton onClick={remove}>
        <Icon icon={MaterialIcon.Delete} />
      </RemoveListButton>
    </CardsListHeaderContainer>
  );
};
