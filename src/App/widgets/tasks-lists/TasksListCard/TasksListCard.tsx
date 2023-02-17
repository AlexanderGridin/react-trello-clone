import { DndCard } from "App/components/DndCard/DndCard";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { mapTasksListToDraggedItem } from "App/entities/TasksList/mappers/mapTasksListToDraggedItem";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Card } from "shared/components/Card/Card";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";

import {
  removeTasksList as removeTasksListFromApi,
  updateTasksList as updateTasksListOnApi,
} from "App/api/TasksList";

import { useState } from "react";
import { mapTasksListDtoToViewModel } from "App/entities/TasksList/mappers/mapTasksListDtoToViewModel";
import { TasksCardsList } from "App/widgets/tasks/TasksCardsList/TasksCardsList";
import { useTaskDispatcher } from "App/entities/Task/state";
import { useTasksListDispatcher } from "App/entities/TasksList/state";
import { useAppDraggedItemDispatcher } from "App/entities/AppDraggedItem/state";

export interface TasksListCardProps {
  list: TasksListViewModel;
  isDragPreview?: boolean;
}

export const TasksListCard = ({
  list,
  isDragPreview = false,
}: TasksListCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const BACKGROUD_COLOR = "#D8DEE9";

  const dispatcher = useTasksListDispatcher();
  const taskDispatcher = useTaskDispatcher();
  const appDraggedItemDispatcher = useAppDraggedItemDispatcher();

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
      isPinned: !list.isPinned,
    });

    if (listDto) {
      const listViewModel = mapTasksListDtoToViewModel(listDto);
      list.isPinned
        ? dispatcher.unpinTasksList(listViewModel)
        : dispatcher.pinTasksList(listViewModel);
    }

    setIsLoading(false);
  };

  const dropOnList = (draggedItem: AppDraggedItem) => {
    if (
      draggedItem.type === DraggedItemType.TasksList &&
      draggedItem.data.isPinned === list.isPinned
    ) {
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

  const header = (
    <TasksListHeader list={list} onRemove={remove} onPin={togglePin} />
  );
  const content = (
    <TasksCardsList
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
