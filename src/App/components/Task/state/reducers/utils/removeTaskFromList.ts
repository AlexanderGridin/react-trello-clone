import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray";

interface Config {
  list: TasksListModel;
  task: TaskModel;
}

export const removeTaskFromList = ({ list, task }: Config): TasksListModel => ({
  ...list,
  tasks: removeItemFromArray<TaskModel>({
    array: list.tasks,
    item: task,
    uniqueKey: "id",
  }),
});
