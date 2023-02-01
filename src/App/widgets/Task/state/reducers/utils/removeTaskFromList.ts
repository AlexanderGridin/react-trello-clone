import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray";

interface Config {
  list: TasksListModel;
  task: TaskViewModel;
}

export const removeTaskFromList = ({ list, task }: Config): TasksListModel => ({
  ...list,
  tasks: removeItemFromArray<TaskViewModel>({
    array: list.tasks,
    item: task,
    uniqueKey: "id",
  }),
});
