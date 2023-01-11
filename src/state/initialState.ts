import { generateId } from "shared/utils/generateId";
import { AppState } from "state/models/AppState.model";

export const INITIAL_STATE: AppState = {
  tasksLists: [
    {
      id: generateId(),
      title: "To Do",
      tasks: [{ id: generateId(), text: "Generate app scaffold" }],
    },
    {
      id: generateId(),
      title: "In Progress",
      tasks: [{ id: generateId(), text: "Learn Typescript" }],
    },
    {
      id: generateId(),
      title: "Done",
      tasks: [{ id: generateId(), text: "Begin to use static typing" }],
    },
  ],
};
