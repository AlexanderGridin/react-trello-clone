import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { TaskModel } from "../../models/TaskModel";

interface MoveTaskActionPayload {
  taskToMove: TaskModel;
  taskToReplace: TaskModel;
}

export const moveTask = (taskToMove: TaskModel, taskToReplace: TaskModel) => {
  const { MoveTask } = ActionType;
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
