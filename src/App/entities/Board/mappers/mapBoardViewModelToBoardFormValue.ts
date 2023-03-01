import { BoardFormValue } from "App/widgets/boards/BoardForm/BoardForm";
import { BoardViewModel } from "../models";

export const mapBoardViewModelToBoardFormValue = (source: BoardViewModel): BoardFormValue => ({
  title: source.title,
  isFavorite: source.isFavorite,
});
