import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AddTaskProps } from "../AddTask";
import { AddTaskState } from "./useAddTaskState";

export const useAddTaskFeatures = (
  props: AddTaskProps,
  state: AddTaskState
) => {
  const { onAdd } = props;

  const addTask = (formValue: AddItemFormValue) => {
    onAdd(new TaskViewModel({ content: formValue.text }));
    state.isShowForm.set(false);
  };

  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { addTask, cancel, showForm };
};
