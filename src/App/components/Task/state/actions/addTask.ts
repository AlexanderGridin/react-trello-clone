import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { TaskModel } from "../../models/TaskModel";

interface AddTaskActionPayload {
  task: TaskModel;
}

export const addTask = (task: TaskModel) => {
  const { AddTask } = ActionType;
  const payload: AddTaskActionPayload = {
    task,
  };

  return createAction<typeof AddTask, AddTaskActionPayload>(AddTask, payload);
};

export type AddTaskAction = ReturnType<typeof addTask>;
