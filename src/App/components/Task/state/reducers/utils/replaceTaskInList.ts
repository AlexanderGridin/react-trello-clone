import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TaskModel } from "App/entities/Task/TaskModel";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem";

interface Config {
  list: TasksListModel;
  task: TaskModel;
  taskToReplace: TaskModel;
}

export const replaceTaskInList = ({
  list,
  task,
  taskToReplace,
}: Config): TasksListModel => {
  const taskIndex = list.tasks.findIndex(({ id }: TaskModel) => id === task.id);
  const taskToReplaceIndex = list.tasks.findIndex(
    ({ id }: TaskModel) => id === taskToReplace.id
  );

  const isMoveBefore = taskIndex < 0 || taskIndex > taskToReplaceIndex;
  const movingConfig: ArrayUtilConfigWithArrayItem<TaskModel> = {
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
        tasks: moveItemBeforeArrayItem<TaskModel>(movingConfig),
      }
    : {
        ...list,
        tasks: moveItemAfterArrayItem<TaskModel>(movingConfig),
      };
};
