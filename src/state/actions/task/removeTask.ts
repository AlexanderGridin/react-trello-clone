import { ActionType } from "state/enums/ActionType.enum";
import { createAction } from "state/utils/createAction";

interface RemoveTaskActionPayload {
  listId: string;
  taskId: string;
}

export const removeTask = (listId: string, taskId: string) =>
  createAction<ActionType.RemoveTask, RemoveTaskActionPayload>(
    ActionType.RemoveTask,
    { listId, taskId }
  );

export type RemoveTaskAction = ReturnType<typeof removeTask>;
