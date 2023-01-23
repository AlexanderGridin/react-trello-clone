import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { generateId } from "shared/utils/generateId";
import { AppState } from "./models/AppState";

const TAKS_LIST: Array<TasksListModel> = [
  {
    id: "1",
    title: "To Do",
    tasks: [{ id: generateId(), listId: "1", text: "Generate app scaffold" }],
  },
  {
    id: "2",
    title: "In Progress",
    tasks: [{ id: generateId(), listId: "2", text: "Learn Typescript" }],
  },
  {
    id: "3",
    title: "Done",
    tasks: [
      { id: generateId(), listId: "3", text: "Begin to use static typing" },
    ],
  },
];

export const INITIAL_STATE: AppState = {
  tasksLists: TAKS_LIST,
  draggedItem: null,
};
