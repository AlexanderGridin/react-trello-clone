import { ReactNode } from "react";
import { Card } from "shared/components/Card/Card";
import { CardsListHeader } from "shared/components/CardsList/components/CardsListHeader";
import { CardsListItem } from "./models/CardsListItem";
import { ListContainer } from "shared/components/List/ListContainer";
import { List } from "shared/components/List/List";
import { ListItem } from "shared/components/List/ListItem";

interface CardsListProps {
  id: string;
  title: string;
  items: Array<CardsListItem>;
  children?: ReactNode;

  onRemove: (id: string) => void;
  onRemoveCard: (listId: string, cardId: string) => void;
}

export const CardsList = ({
  id,
  title,
  items,
  children,
  onRemove,
  onRemoveCard,
}: CardsListProps): JSX.Element => {
  const remove = () => onRemove(id);
  const removeCard = (item: CardsListItem) => () => onRemoveCard(id, item.id);

  return (
    <ListContainer>
      <CardsListHeader title={title} onRemove={remove} />

      <List>
        {items.map((item: CardsListItem) => (
          <ListItem key={item.id}>
            <Card onRemove={removeCard(item)}>{item.content}</Card>
          </ListItem>
        ))}
      </List>

      {children}
    </ListContainer>
  );
};
