import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { TaskModel } from "../../models/TaskModel";

interface RemoveTaskActionPayload {
  task: TaskModel;
}

export const removeTask = (task: TaskModel) => {
  const { RemoveTask } = ActionType;
  const payload: RemoveTaskActionPayload = {
    task,
  };

  return createAction<typeof RemoveTask, RemoveTaskActionPayload>(
    RemoveTask,
    payload
  );
};

export type RemoveTaskAction = ReturnType<typeof removeTask>;
