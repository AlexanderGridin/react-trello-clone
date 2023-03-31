import { TaskViewModel } from "entities/Task/models";
import { TasksListViewModel } from "entities/TasksList/models";
import { removeItemFromArray } from "shared/utils/array";

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
