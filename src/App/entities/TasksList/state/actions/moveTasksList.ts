import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface MoveTasksListActionPayload {
  listToMove: TasksListModel;
  listToReplace: TasksListModel;
}

export const moveTasksList = (
  listToMove: TasksListModel,
  listToReplace: TasksListModel
) => {
  const { MoveList } = AppActionType;
  const payload: MoveTasksListActionPayload = {
    listToMove,
    listToReplace,
  };

  return createAction<typeof MoveList, MoveTasksListActionPayload>(
    MoveList,
    payload
  );
};

export type MoveTasksListAction = ReturnType<typeof moveTasksList>;
