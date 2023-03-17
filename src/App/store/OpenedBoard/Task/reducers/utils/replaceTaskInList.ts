import { TaskViewModel } from "App/entities/Task/models";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { moveItemAfterArrayItem, moveItemBeforeArrayItem } from "shared/utils/array";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models";

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

  const updatedList = isMoveBefore
    ? {
        ...list,
        tasks: moveItemBeforeArrayItem<TaskViewModel>(movingConfig),
      }
    : {
        ...list,
        tasks: moveItemAfterArrayItem<TaskViewModel>(movingConfig),
      };

  return {
    ...updatedList,
    tasks: updatedList.tasks.map((task) =>
      task.id === taskToReplace.id ? { ...task, ...taskToReplace } : { ...task }
    ),
  };
};
