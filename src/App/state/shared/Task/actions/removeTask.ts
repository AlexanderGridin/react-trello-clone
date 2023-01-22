import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface RemoveTaskActionPayload {
  listId: string;
  taskId: string;
}

export const removeTask = (listId: string, taskId: string) => {
  const { RemoveTask } = ActionType;
  const payload: RemoveTaskActionPayload = {
    listId,
    taskId,
  };

  return createAction<typeof RemoveTask, RemoveTaskActionPayload>(
    RemoveTask,
    payload
  );
};

export type RemoveTaskAction = ReturnType<typeof removeTask>;
