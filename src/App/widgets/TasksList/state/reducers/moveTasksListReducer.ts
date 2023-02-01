import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem";
import { MoveTasksListAction } from "../actions/moveTasksList";

export const moveTasksListReducer = (
  state: AppState,
  action: MoveTasksListAction
): AppState => {
  const listToMove = action.payload.listToMove;
  const listToReplace = action.payload.listToReplace;

  return {
    ...state,
    boards: state.boards.map((board: BoardViewModel) => {
      if (board.id !== listToMove.boardId) {
        return { ...board };
      }

      const listToMoveIndex = board.tasksLists.findIndex(
        ({ id }: TasksListModel) => id === listToMove.id
      );
      const listToReplaceIndex = board.tasksLists.findIndex(
        ({ id }: TasksListModel) => id === listToReplace.id
      );

      const movingConfig: ArrayUtilConfigWithArrayItem<TasksListModel> = {
        array: board.tasksLists,
        item: listToMove,
        arrayItem: listToReplace,
        uniqueKey: "id",
      };

      const tasksLists =
        listToMoveIndex < listToReplaceIndex
          ? moveItemAfterArrayItem<TasksListModel>(movingConfig)
          : moveItemBeforeArrayItem<TasksListModel>(movingConfig);

      return {
        ...board,
        tasksLists,
      };
    }),
  };
};
