import { CardsListModel } from "shared/components/CardsList/models/CardsListModel";
import { TasksListModel } from "../models/TasksListModel";
import { mapToCards } from "./mapToCards";

export const mapToCardsList = (source: TasksListModel): CardsListModel => ({
  id: source.id,
  title: source.title,
  cards: mapToCards(source.tasks),
});
