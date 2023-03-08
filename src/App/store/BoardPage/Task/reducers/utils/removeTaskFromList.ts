import { TaskViewModel } from "App/entities/Task/models";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";

interface Config {
  list: TasksListViewModel;
  task: TaskViewModel;
}

export const removeTaskFromList = ({ list, task }: Config): TasksListViewModel => ({
  ...list,
  tasks: removeItemFromArray<TaskViewModel>({
    array: list.tasks,
    item: task,
    uniqueKey: "id",
  }),
});
