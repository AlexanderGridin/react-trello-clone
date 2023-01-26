import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { AppState } from "./models/AppState";

const TAKS_LIST: Array<TasksListModel> = [
  {
    id: "1",
    title: "To Do",
    tasks: [new TaskModel({ listId: "1", content: "Generate app scaffold" })],
  },
  {
    id: "2",
    title: "In Progress",
    tasks: [new TaskModel({ listId: "2", content: "Learn Typescript" })],
  },
  {
    id: "3",
    title: "Done",
    tasks: [
      new TaskModel({ listId: "3", content: "Begin to use static typing" }),
    ],
  },
];

export const INITIAL_STATE: AppState = {
  tasksLists: TAKS_LIST,
  draggedItem: null,
};
