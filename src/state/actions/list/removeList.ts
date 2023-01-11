import { ActionType } from "state/enums/ActionType.enum";
import { createAction } from "state/utils/createAction";

interface RemoveListActionPayload {
  id: string;
}

export const removeList = (id: string) =>
  createAction<ActionType.RemoveList, RemoveListActionPayload>(
    ActionType.RemoveList,
    { id }
  );

export type RemoveListAction = ReturnType<typeof removeList>;
