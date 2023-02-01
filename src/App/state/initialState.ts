import { BoardModel } from "App/entities/Board/BoardModel";
import { TaskModel } from "App/entities/Task/TaskModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { generateId } from "shared/utils/generateId";
import { AppState } from "./models/AppState";

const boardIds: string[] = ["1", "2", "3"];
const listIds: string[] = [generateId(), generateId(), generateId()];

const BOARDS: BoardModel[] = boardIds.map(
  (boardId, index) =>
    new BoardModel({
      id: boardId,
      title: `Test board ${index + 1}`,
      tasksLists: listIds.map(
        (listId, index) =>
          new TasksListModel({
            id: listId,
            boardId: boardId,
            title: `Test tasks list ${index + 1}`,
            tasks: [
              new TaskModel({
                listId,
                boardId,
                content: `Test task ${index + 1}`,
              }),
            ],
          })
      ),
    })
);

export const INITIAL_STATE: AppState = {
  boards: BOARDS,
  draggedItem: null,
};
