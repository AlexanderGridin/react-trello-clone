import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface RemoveTasksListActionPayload {
  id: string;
}

export const removeTasksList = (id: string) => {
  const { RemoveList } = ActionType;
  const payload: RemoveTasksListActionPayload = { id };

  return createAction<typeof RemoveList, RemoveTasksListActionPayload>(
    RemoveList,
    payload
  );
};

export type RemoveTasksListAction = ReturnType<typeof removeTasksList>;
