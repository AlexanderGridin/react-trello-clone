import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AddTaskProps } from "../AddTask";
import { AddTaskState } from "./useAddTaskState";

export const useAddTaskFeatures = (
  props: AddTaskProps,
  state: AddTaskState
) => {
  const { onAdd } = props;

  const add = (text: string) => {
    onAdd(new TaskViewModel({ content: text }));
    state.isShowForm.set(false);
  };
  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { add, cancel, showForm };
};
