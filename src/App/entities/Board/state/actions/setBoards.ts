import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface SetBoardsActionPayload {
  boards: BoardViewModel[] | null;
}

export const setBoards = (boards: BoardViewModel[] | null) => {
  const { SetBoards } = AppActionType;
  const payload: SetBoardsActionPayload = {
    boards,
  };

  return createAction<typeof SetBoards, SetBoardsActionPayload>(
    SetBoards,
    payload
  );
};

export type SetBoardsAction = ReturnType<typeof setBoards>;
