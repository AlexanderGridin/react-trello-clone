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
import {
  removeTasksList as removeTasksListFromApi,
  updateTasksList as updateTasksListOnApi,
} from "App/api/TasksList/TasksList.api";
import { useState } from "react";
import { mapTasksListDtoToViewModel } from "App/entities/TasksList/mappers/mapTasksListDtoToViewModel";

export interface TasksListProps {
  list: TasksListViewModel;
  isDragPreview?: boolean;
}

export const TasksList = ({ list, isDragPreview = false }: TasksListProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const BACKGROUD_COLOR = "#D8DEE9";

  const {
    dispatchMoveTasksList,
    dispatchPushTaskInTasksList,
    dispatchRemoveTasksList,
    dispatchPinTasksList,
    dispatchUnpinTasksList,
  } = useTasksListDispatchers();
  const { dispatchRemoveTask } = useTaskDispatchers();
  const { dispatchSetAppDraggedItem } = useAppDraggedItemDispatchers();

  const remove = async () => {
    setIsLoading(true);

    const tasksListDto = await removeTasksListFromApi(list.id);

    if (tasksListDto) {
      dispatchRemoveTasksList(mapTasksListDtoToViewModel(tasksListDto));
    }

    setIsLoading(false);
  };

  const togglePin = async () => {
    setIsLoading(true);

    const listDto = await updateTasksListOnApi(list.id, {
      isPinned: !list.isPinned,
    });

    if (listDto) {
      const listViewModel = mapTasksListDtoToViewModel(listDto);
      list.isPinned
        ? dispatchUnpinTasksList(listViewModel)
        : dispatchPinTasksList(listViewModel);
    }

    setIsLoading(false);
  };

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

  const header = (
    <TasksListHeader list={list} onRemove={remove} onPin={togglePin} />
  );
  const content = (
    <ListOfTasks
      boardId={list.boardId}
      listId={list.id}
      tasks={list.tasks}
      isShowAddTask
    />
  );

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
    <DndCard
      slotHeader={header}
      slotContent={content}
      backgroundColor={BACKGROUD_COLOR}
      draggedItem={mapTasksListToDraggedItem(list)}
      onDrop={dropOnList}
    />
  );
};
