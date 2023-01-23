import { useCardActions } from "shared/components/Card/hooks/useCardActions";
import { DndCardProps } from "../DndCard";

export const useDndCardActions = (props: DndCardProps) => useCardActions(props);
