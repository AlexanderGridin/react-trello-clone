import { ForwardedRef, forwardRef, ReactNode } from "react";
import { CardsListHeader } from "shared/components/CardsList/components/CardsListHeader";
import { ListContainer } from "shared/components/List/components/ListContainer";
import { List } from "shared/components/List/List";
import { ListItem } from "shared/components/List/components/ListItem";
import { CardsListModel } from "./models/CardsListModel";
import { CardModel } from "../Card/models/CardModel";
import { useCardsListActions } from "./hooks/useCardsListActions";
import { DndCard } from "App/components/DndCard/DndCard";

type Ref = ForwardedRef<HTMLDivElement>;

export interface CardsListProps {
  list: CardsListModel;
  className?: string;
  children?: ReactNode;

  onRemove: (listId: string) => void;
  onRemoveCard: (cardId: string) => void;
}

export const CardsList = forwardRef((props: CardsListProps, ref: Ref) => {
  const { list, className, children } = props;
  const { remove, removeCard } = useCardsListActions(props);

  return (
    <ListContainer ref={ref} className={className}>
      <CardsListHeader title={list.title} onRemove={remove} />

      {list.cards.length > 0 && (
        <List>
          {list.cards.map((card: CardModel) => (
            <ListItem key={card.id}>
              <DndCard
                id={card.id}
                onRemove={removeCard(card)}
                onDrop={() => {}}
              >
                {card.content}
              </DndCard>
            </ListItem>
          ))}
        </List>
      )}

      {children}
    </ListContainer>
  );
});
