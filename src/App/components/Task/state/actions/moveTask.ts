import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";
import { TaskModel } from "../../models/TaskModel";

interface MoveTaskActionPayload {
  taskToMove: TaskModel;
  taskToReplace: TaskModel;
}

export const moveTask = (taskToMove: TaskModel, taskToReplace: TaskModel) => {
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
