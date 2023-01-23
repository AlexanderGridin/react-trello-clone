import { CardProps } from "../Card";

export const useCardActions = (props: CardProps) => {
  const { onRemove } = props;

  const remove = () => onRemove();

  return { remove };
};
