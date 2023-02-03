import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AddTasksListProps } from "../AddTasksList";
import { AddTasksListState } from "./useAddTasksListState";

export const useAddTasksListFeatures = (
  props: AddTasksListProps,
  state: AddTasksListState
) => {
  const { onAdd } = props;

  const addList = (formValue: AddItemFormValue) => {
    onAdd(new TasksListModel({ title: formValue.text }));
    state.isShowForm.set(false);
  };
  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { addList, cancel, showForm };
};
