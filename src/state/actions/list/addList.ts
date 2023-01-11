import { createAction } from "state/utils/createAction";
import { ActionType } from "state/enums/ActionType.enum";

interface AddListActionPayload {
  title: string;
}

export const addList = (title: string) =>
  createAction<ActionType.AddList, AddListActionPayload>(ActionType.AddList, {
    title,
  });

export type AddListAction = ReturnType<typeof addList>;
