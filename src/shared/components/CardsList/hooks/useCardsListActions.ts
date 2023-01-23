import { CardModel } from "shared/components/Card/models/CardModel";
import { CardsListProps } from "../CardsList";

export const useCardsListActions = (props: CardsListProps) => {
  const { list, onRemove, onRemoveCard } = props;

  const remove = () => onRemove(list.id);
  const removeCard = (card: CardModel) => () => onRemoveCard(card.id);

  return { remove, removeCard };
};
