import { AddListProps } from "../AddList";
import { AddListState } from "./useAddListState";

export const useAddListActions = (props: AddListProps, state: AddListState) => {
  const { onAdd } = props;

  const add = (title: string) => {
    onAdd(title);
    state.isShowForm.set(false);
  };
  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { add, cancel, showForm };
};
