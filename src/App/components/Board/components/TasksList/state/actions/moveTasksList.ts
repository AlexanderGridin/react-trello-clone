import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface MoveTasksListActionPayload {
  listToMove: TasksListModel;
  listToMoveAfter: TasksListModel;
}

export const moveTasksList = (
  listToMove: TasksListModel,
  listToMoveAfter: TasksListModel
) => {
  const { MoveList } = ActionType;
  const payload: MoveTasksListActionPayload = {
    listToMove,
    listToMoveAfter,
  };

  return createAction<typeof MoveList, MoveTasksListActionPayload>(
    MoveList,
    payload
  );
};

export type MoveTasksListAction = ReturnType<typeof moveTasksList>;
