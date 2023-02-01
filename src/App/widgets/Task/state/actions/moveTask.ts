import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface MoveTaskActionPayload {
  taskToMove: TaskViewModel;
  taskToReplace: TaskViewModel;
}

export const moveTask = (
  taskToMove: TaskViewModel,
  taskToReplace: TaskViewModel
) => {
  const { MoveTask } = AppActionType;
  const payload: MoveTaskActionPayload = {
    taskToMove,
    taskToReplace,
  };

  return createAction<typeof MoveTask, MoveTaskActionPayload>(
    MoveTask,
    payload
  );
};

export type MoveTaskAction = ReturnType<typeof moveTask>;
