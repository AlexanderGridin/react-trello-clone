import { useState } from "react";
import { DndCard } from "App/components/DndCard/DndCard";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { mapTasksListToDraggedItem, mapTasksListDtoToViewModel } from "App/entities/TasksList/mappers";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Card } from "shared/components/Card/Card";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { removeTasksList as removeTasksListFromApi, updateTasksList as updateTasksListOnApi } from "App/api/TasksList";
import { TasksCardsList } from "App/widgets/tasks/TasksCardsList/TasksCardsList";
import { useTaskDispatcher } from "App/entities/Task/state";
import { useTasksListDispatcher } from "App/entities/TasksList/state";
import { useAppDraggedItemDispatcher } from "App/entities/AppDraggedItem/state";
import { TasksListModal } from "../TasksListModal/TasksListModal";
import { TasksListViewModel } from "App/entities/TasksList/models";

export interface TasksListCardProps {
  list: TasksListViewModel;
  isDragPreview?: boolean;
}

export const TasksListCard = ({ list, isDragPreview = false }: TasksListCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const BACKGROUD_COLOR = "#D8DEE9";

  const dispatcher = useTasksListDispatcher();
  const taskDispatcher = useTaskDispatcher();
  const appDraggedItemDispatcher = useAppDraggedItemDispatcher();

  const edit = () => {
    dispatcher.updateTasksList({ ...list, isEditing: true });
  };

  const remove = async () => {
    setIsLoading(true);

    const tasksListDto = await removeTasksListFromApi(list.id);
    if (tasksListDto) {
      dispatcher.removeTasksList(mapTasksListDtoToViewModel(tasksListDto));
    }

    setIsLoading(false);
  };

  const togglePin = async () => {
    setIsLoading(true);

    const listDto = await updateTasksListOnApi(list.id, {
      title: list.title,
      isPinned: !list.isPinned,
      boardId: list.boardId,
    });

    if (listDto) {
      dispatcher.updateTasksList(mapTasksListDtoToViewModel(listDto));
    }

    setIsLoading(false);
  };

  const dropOnList = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type === DraggedItemType.TasksList && draggedItem.data.isPinned === list.isPinned) {
      dispatcher.moveTasksList(draggedItem.data, list);
      return;
    }

    if (draggedItem.type !== DraggedItemType.Task || list.tasks.length) {
      return;
    }

    taskDispatcher.removeTask(draggedItem.data);
    dispatcher.pushTaskInTasksList(list, draggedItem.data);
    appDraggedItemDispatcher.setAppDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        listId: list.id,
      },
    });
  };

  const header = <TasksListHeader list={list} onRemove={remove} onEdit={edit} onPin={togglePin} />;
  const content = <TasksCardsList boardId={list.boardId} listId={list.id} tasks={list.tasks} isShowAddTask />;

  if (isDragPreview || isLoading) {
    return (
      <Card
        slotHeader={header}
        slotContent={content}
        isLoading={isLoading}
        backgroundColor={BACKGROUD_COLOR}
        className={isDragPreview ? "drag-preview" : ""}
      />
    );
  }

  return (
    <>
      <DndCard
        slotHeader={header}
        slotContent={content}
        backgroundColor={BACKGROUD_COLOR}
        draggedItem={mapTasksListToDraggedItem(list)}
        onDrop={dropOnList}
      />

      <TasksListModal list={list} />
    </>
  );
};
