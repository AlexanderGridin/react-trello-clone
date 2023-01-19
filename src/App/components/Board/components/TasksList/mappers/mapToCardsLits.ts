import { CardsListModel } from "shared/components/CardsList/models/CardsListModel";
import { TasksListModel } from "../models/TasksListModel";
import { mapToCardsListItems } from "./mapToCardsListItems";

export const mapToCardsList = (source: TasksListModel): CardsListModel => ({
  id: source.id,
  title: source.title,
  items: mapToCardsListItems(source.tasks),
});
