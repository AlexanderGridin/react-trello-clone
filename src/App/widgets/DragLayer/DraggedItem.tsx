import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { ListOfTasksListItem } from "App/widgets/ListOfTasks/components/ListOfTasksListItem";
import { TasksList } from "App/widgets/TasksList/TasksList";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import listOfTasksListsStyle from "App/widgets/ListOfTasksLists/ListOfTasksLists.module.css";
import { BoardViewModel } from "App/entities/Board/Board";
import { BoardCard } from "../BoardCard/BoardCard";

interface DraggedItemProps {
  item: AppDraggedItem;
}

export const DraggedItem = ({ item }: DraggedItemProps) => {
  switch (item.type) {
    case DraggedItemType.TasksList:
      const list: TasksListViewModel = item.data;
      return (
        <div className={listOfTasksListsStyle.cell}>
          <TasksList list={list} isDragPreview />
        </div>
      );

    case DraggedItemType.Task:
      const task: TaskViewModel = item.data;
      return (
        <div className={listOfTasksListsStyle.cell}>
          <ListOfTasksListItem task={task} isDragPreview />
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
