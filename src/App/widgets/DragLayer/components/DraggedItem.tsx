import { TaskCard } from "App/widgets/tasks/TaskCard";
import { BoardCard } from "App/widgets/boards/BoardCard";
import { TaskViewModel } from "App/entities/Task/models";
import { TasksListCard } from "App/widgets/tasks-lists/TasksListCard";
import { BoardViewModel } from "App/entities/Board/models";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/types";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TasksListViewModel } from "App/entities/TasksList/models";

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
