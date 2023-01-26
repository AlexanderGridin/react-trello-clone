import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray";
import { MoveTaskAction } from "../actions/moveTask";

export const moveTaskReducer = (
  state: AppState,
  action: MoveTaskAction
): AppState => {
  const { taskToMove, taskToReplace } = action.payload;

  const tasksLists = state.tasksLists.map((list: TasksListModel) => {
    if (list.id === taskToReplace.listId) {
      const taskToMoveIndex = list.tasks.findIndex(
        ({ id }: TaskModel) => id === taskToMove.id
      );
      const taskToReplaceIndex = list.tasks.findIndex(
        ({ id }: TaskModel) => id === taskToReplace.id
      );

      if (taskToMoveIndex < 0 || taskToMoveIndex > taskToReplaceIndex) {
        const tasks: TaskModel[] = moveItemBeforeArrayItem<TaskModel>({
          array: list.tasks,
          item: {
            ...taskToMove,
            listId: list.id,
          },
          arrayItem: taskToReplace,
          uniqueKey: "id",
        });

        return {
          ...list,
          tasks,
        };
      }

      if (taskToMoveIndex < taskToReplaceIndex) {
        const tasks: TaskModel[] = moveItemAfterArrayItem<TaskModel>({
          array: list.tasks,
          item: {
            ...taskToMove,
            listId: list.id,
          },
          arrayItem: taskToReplace,
          uniqueKey: "id",
        });

        return {
          ...list,
          tasks,
        };
      }
    }

    if (list.id === taskToMove.listId) {
      return {
        ...list,
        tasks: removeItemFromArray<TaskModel>({
          array: list.tasks,
          item: taskToMove,
          uniqueKey: "id",
        }),
      };
    }

    return list;
  });

  return { ...state, tasksLists };
};
