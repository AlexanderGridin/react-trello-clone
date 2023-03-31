import { TaskViewModel } from "entities/Task/models";
import { BoardViewModel } from "entities/Board/models";
import { TAppDraggedItem } from "entities/AppDraggedItem/types";
import { DraggedItemType } from "drag-and-drop/enums";
import { TasksListViewModel } from "entities/TasksList/models";

import { TaskCard } from "../../../widgets/tasks/TaskCard";
import { BoardCard } from "../../../widgets/boards/BoardCard";
import { TasksListCard } from "../../../widgets/tasks-lists/TasksListCard";

interface IDraggedItemProps {
  item: TAppDraggedItem;
}

export const DraggedItem = ({ item }: IDraggedItemProps) => {
  switch (item.type) {
    case DraggedItemType.TasksList:
      const list: TasksListViewModel = item.data;
      return (
        <div className="cell">
          <TasksListCard list={list} isDragPreview />
        </div>
      );

    case DraggedItemType.Task:
      const task: TaskViewModel = item.data;
      return (
        <div className="cell">
          <TaskCard task={task} isDragPreview />
        </div>
      );

    case DraggedItemType.Board:
      const board: BoardViewModel = item.data;
      return (
        <div className="cell">
          <BoardCard board={board} isDragPreview />
        </div>
      );

    default:
      return null;
  }
};
