import { CardModel } from "shared/components/Card/models/CardModel";

export interface CardsListModel {
  id: string;
  title: string;
  cards: Array<CardModel>;
}
