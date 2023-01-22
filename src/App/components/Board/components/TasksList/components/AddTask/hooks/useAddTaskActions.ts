import { AddTaskProps } from "../AddTask";
import { AddTaskState } from "./useAddTaskState";

export const useAddTaskActions = (props: AddTaskProps, state: AddTaskState) => {
  const { onAdd } = props;

  const add = (content: string) => {
    onAdd(content);
    state.isShowForm.set(false);
  };
  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { add, cancel, showForm };
};
