import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { ListOfTasksListItem } from "App/widgets/ListOfTasks/components/ListOfTasksListItem";
import { TasksList } from "App/widgets/TasksList/TasksList";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { BoardsListItem } from "App/widgets/BoardsList/components/BoardsListItem";
import listOfTasksListsStyle from "App/widgets/ListOfTasksLists/ListOfTasksLists.module.css";

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
      return <BoardsListItem board={board} isDragPreview />;

    default:
      return null;
  }
};
