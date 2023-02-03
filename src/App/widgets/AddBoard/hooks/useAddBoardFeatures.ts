import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AddBoardProps } from "../AddBoard";
import { AddBoardState } from "./useAddBoardState";

export const useAddBoardFeatures = (
  props: AddBoardProps,
  state: AddBoardState
) => {
  const { onAdd } = props;

  const addBoard = (formValue: AddItemFormValue) => {
    onAdd(new BoardViewModel({ title: formValue.text }));
    state.isShowForm.set(false);
  };
  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { addBoard, cancel, showForm };
};
