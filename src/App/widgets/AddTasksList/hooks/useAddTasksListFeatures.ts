import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AddTasksListProps } from "../AddTasksList";
import { AddTasksListState } from "./useAddTasksListState";

export const useAddTasksListFeatures = (
  props: AddTasksListProps,
  state: AddTasksListState
) => {
  const { onAdd } = props;

  const add = (text: string) => {
    onAdd(new TasksListModel({ title: text }));
    state.isShowForm.set(false);
  };
  const cancel = () => state.isShowForm.set(false);
  const showForm = () => state.isShowForm.set(true);

  return { add, cancel, showForm };
};
