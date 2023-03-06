import { BoardFormValue } from "App/widgets/boards/BoardForm/models";
import { BoardViewModel } from "../models";

export const mapBoardViewModelToFormValue = (source: BoardViewModel): BoardFormValue => ({
  title: source.title,
  isFavorite: source.isFavorite,
});
