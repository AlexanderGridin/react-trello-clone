import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface RemoveListActionPayload {
  id: string;
}

export const removeList = (id: string) => {
  const { RemoveList } = ActionType;
  const payload: RemoveListActionPayload = { id };

  return createAction<typeof RemoveList, RemoveListActionPayload>(
    RemoveList,
    payload
  );
};

export type RemoveListAction = ReturnType<typeof removeList>;
