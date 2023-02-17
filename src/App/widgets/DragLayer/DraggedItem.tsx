import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/Board";
import { TasksListCard } from "../tasks-lists/TasksListCard/TasksListCard";
import { TaskCard } from "../tasks/TaskCard/TaskCard";
import { BoardCard } from "../boards/BoardCard/BoardCard";

interface DraggedItemProps {
  item: AppDraggedItem;
}

export const DraggedItem = ({ item }: DraggedItemProps) => {
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
