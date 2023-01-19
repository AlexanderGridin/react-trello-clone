import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface MoveListActionPayload {
  listToMove: TasksListModel;
  listToMoveAfter: TasksListModel;
}

export const moveList = (
  listToMove: TasksListModel,
  listToMoveAfter: TasksListModel
) => {
  const { MoveList } = ActionType;
  const payload: MoveListActionPayload = {
    listToMove,
    listToMoveAfter,
  };

  return createAction<typeof MoveList, MoveListActionPayload>(
    MoveList,
    payload
  );
};

export type MoveListAction = ReturnType<typeof moveList>;
