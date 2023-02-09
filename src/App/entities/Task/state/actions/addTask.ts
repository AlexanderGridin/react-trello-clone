import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface AddTaskActionPayload {
  task: TaskViewModel;
}

export const addTask = (task: TaskViewModel) => {
  const { AddTask } = AppActionType;
  const payload: AddTaskActionPayload = {
    task,
  };

  return createAction<typeof AddTask, AddTaskActionPayload>(AddTask, payload);
};

export type AddTaskAction = ReturnType<typeof addTask>;
