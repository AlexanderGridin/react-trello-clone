import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AddTasksListProps } from "../AddTasksList";
import { AddTasksListState } from "./useAddTasksListState";

export const useAddTasksListFeatures = (
  props: AddTasksListProps,
  state: AddTasksListState
) => {
  const { onAdd } = props;

  const addList = (formValue: AddItemFormValue) => {
    onAdd(new TasksListViewModel({ title: formValue.text }));
    state.isShowForm.set(false);
  };
  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { addList, cancel, showForm };
};
