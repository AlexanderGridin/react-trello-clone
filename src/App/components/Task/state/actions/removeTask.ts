import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";
import { TaskModel } from "../../models/TaskModel";

interface RemoveTaskActionPayload {
  task: TaskModel;
}

export const removeTask = (task: TaskModel) => {
  const { RemoveTask } = AppActionType;
  const payload: RemoveTaskActionPayload = {
    task,
  };

  return createAction<typeof RemoveTask, RemoveTaskActionPayload>(
    RemoveTask,
    payload
  );
};

export type RemoveTaskAction = ReturnType<typeof removeTask>;
