import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface RemoveTaskActionPayload {
  task: TaskViewModel;
}

export const removeTask = (task: TaskViewModel) => {
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
