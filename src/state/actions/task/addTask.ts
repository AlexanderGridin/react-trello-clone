import { ActionType } from "state/enums/ActionType.enum";
import { createAction } from "state/utils/createAction";

interface AddTaskActionPayload {
  content: string;
  listId: string;
}

export const addTask = (content: string, listId: string) =>
  createAction<ActionType.AddTask, AddTaskActionPayload>(ActionType.AddTask, {
    content,
    listId,
  });

export type AddTaskAction = ReturnType<typeof addTask>;
