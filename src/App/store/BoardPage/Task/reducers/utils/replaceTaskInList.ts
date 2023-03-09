import { TaskViewModel } from "App/entities/Task/models";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem/moveItemBeforeArrayItem";

interface Config {
  list: TasksListViewModel;
  task: TaskViewModel;
  taskToReplace: TaskViewModel;
}

export const replaceTaskInList = ({ list, task, taskToReplace }: Config): TasksListViewModel => {
  const taskIndex = list.tasks.findIndex(({ id }: TaskViewModel) => id === task.id);
  const taskToReplaceIndex = list.tasks.findIndex(({ id }: TaskViewModel) => id === taskToReplace.id);

  const isMoveBefore = taskIndex < 0 || taskIndex > taskToReplaceIndex;
  const movingConfig: ArrayUtilConfigWithArrayItem<TaskViewModel> = {
    array: list.tasks,
    item: {
      ...task,
      listId: list.id,
    },
    arrayItem: taskToReplace,
    uniqueKey: "id",
  };

  return isMoveBefore
    ? {
        ...list,
        tasks: moveItemBeforeArrayItem<TaskViewModel>(movingConfig),
      }
    : {
        ...list,
        tasks: moveItemAfterArrayItem<TaskViewModel>(movingConfig),
      };
};
