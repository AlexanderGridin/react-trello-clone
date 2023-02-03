import { BoardDto } from "App/entities/Board/BoardDto";
import { mapBoardDtosToViewModels } from "App/entities/Board/mappers/mapBoardDtoToViewModel";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { generateId } from "shared/utils/generateId";
import { AppState } from "./models/AppState";

const boardIds: string[] = ["1", "2", "3"];
const listIds: string[] = [generateId(), generateId(), generateId()];

const boards: BoardDto[] = boardIds.map(
  (boardId, index) =>
    new BoardDto({
      id: boardId,
      title: `Test board ${index + 1}`,
      tasksLists: listIds.map(
        (listId, index) =>
          new TasksListViewModel({
            id: listId,
            boardId: boardId,
            title: `Test tasks list ${index + 1}`,
            tasks: [
              new TaskViewModel({
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
  boards: mapBoardDtosToViewModels(boards),
  draggedItem: null,
};
