import { AddBoardProps } from "../AddBoard";
import { AddBoardState } from "./useAddBoardState";

export const useAddBoardFeatures = (
  props: AddBoardProps,
  state: AddBoardState
) => {
  const { onAdd } = props;

  const add = (content: string) => {
    onAdd(content);
    state.isShowForm.set(false);
  };
  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { add, cancel, showForm };
};
