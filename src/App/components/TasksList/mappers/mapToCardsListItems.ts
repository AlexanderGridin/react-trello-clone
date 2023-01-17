import { CardsListItem } from "shared/components/CardsList/models/CardsListItem";
import { Task } from "shared/models/Task";

export const mapToCardsListItems = (
  source: Array<Task>
): Array<CardsListItem> =>
  source?.map((task: Task) => ({
    id: task.id,
    content: task.text,
  })) ?? [];
