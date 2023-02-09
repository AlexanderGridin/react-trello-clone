import { DndCard } from "App/components/DndCard/DndCard";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useAppDraggedItemDispatchers } from "App/entities/AppDraggedItem/state/hooks/useAppDraggedItemDispatchers";
import { useTaskDispatchers } from "App/entities/Task/state/hooks/useTaskDispatchers";
import { mapTasksListToDraggedItem } from "App/entities/TasksList/mappers/mapTasksListToDraggedItem";
import { useTasksListDispatchers } from "App/entities/TasksList/state/hooks/useTasksListDispatchers";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Card } from "shared/components/Card/Card";
import { ListOfTasks } from "../ListOfTasks/ListOfTasks";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";

export interface TasksListProps {
  list: TasksListViewModel;
  isDragPreview?: boolean;
}

export const TasksList = ({ list, isDragPreview = false }: TasksListProps) => {
  const BACKGROUD_COLOR = "#D8DEE9";

  const { dispatchMoveTasksList, dispatchPushTaskInTasksList } =
    useTasksListDispatchers();
  const { dispatchRemoveTask } = useTaskDispatchers();
  const { dispatchSetAppDraggedItem } = useAppDraggedItemDispatchers();

  const dropOnList = (draggedItem: AppDraggedItem) => {
    if (
      draggedItem.type === DraggedItemType.TasksList &&
      draggedItem.data.isPinned === list.isPinned
    ) {
      dispatchMoveTasksList(draggedItem.data, list);
      return;
    }

    if (draggedItem.type !== DraggedItemType.Task || list.tasks.length) {
      return;
    }

    dispatchRemoveTask(draggedItem.data);
    dispatchPushTaskInTasksList(list, draggedItem.data);
    dispatchSetAppDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        listId: list.id,
      },
    });
  };

  const header = <TasksListHeader list={list} />;
  const content = (
    <ListOfTasks
      boardId={list.boardId}
      listId={list.id}
      tasks={list.tasks}
      isShowAddTask
    />
  );

  if (isDragPreview) {
    return (
      <Card
        slotHeader={header}
        slotContent={content}
        backgroundColor={BACKGROUD_COLOR}
        className="drag-preview"
      />
    );
  }

  return (
    <DndCard
      slotHeader={header}
      slotContent={content}
      backgroundColor={BACKGROUD_COLOR}
      draggedItem={mapTasksListToDraggedItem(list)}
      onDrop={dropOnList}
    />
  );
};
