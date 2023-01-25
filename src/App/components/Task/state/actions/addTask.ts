import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface AddTaskActionPayload {
  content: string;
  listId: string;
}

export const addTask = (content: string, listId: string) => {
  const { AddTask } = ActionType;
  const payload: AddTaskActionPayload = {
    content,
    listId,
  };

  return createAction<typeof AddTask, AddTaskActionPayload>(AddTask, payload);
};

export type AddTaskAction = ReturnType<typeof addTask>;
