import { ForwardedRef, forwardRef, ReactNode } from "react";
import { Card } from "shared/components/Card/Card";
import { CardsListHeader } from "shared/components/CardsList/components/CardsListHeader";
import { CardsListItem } from "./models/CardsListItem";
import { ListContainer } from "shared/components/List/components/ListContainer";
import { List } from "shared/components/List/List";
import { ListItem } from "shared/components/List/components/ListItem";
import { CardsListModel } from "./models/CardsListModel";

interface CardsListProps {
  list: CardsListModel;
  className?: string;
  children?: ReactNode;

  onRemove: (listId: string) => void;
  onRemoveCard: (cardId: string) => void;
}

type Ref = ForwardedRef<HTMLDivElement>;

export const CardsList = forwardRef((props: CardsListProps, ref: Ref) => {
  const { list, className, children, onRemove, onRemoveCard } = props;

  const remove = () => onRemove(list.id);
  const removeCard = (card: CardsListItem) => () => onRemoveCard(card.id);

  return (
    <ListContainer ref={ref} className={className}>
      <CardsListHeader title={list.title} onRemove={remove} />

      <List>
        {list.items.map((item: CardsListItem) => (
          <ListItem key={item.id}>
            <Card onRemove={removeCard(item)}>{item.content}</Card>
          </ListItem>
        ))}
      </List>

      {children}
    </ListContainer>
  );
});
