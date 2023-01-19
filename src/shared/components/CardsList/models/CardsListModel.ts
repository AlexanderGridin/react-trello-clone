import { CardsListItem } from "./CardsListItem";

export interface CardsListModel {
  id: string;
  title: string;
  items: Array<CardsListItem>;
}
