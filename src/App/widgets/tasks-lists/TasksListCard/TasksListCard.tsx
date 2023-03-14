import { useState } from "react";
import { DndCard } from "App/components/DndCard/DndCard";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Card } from "shared/components/Card/Card";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";

import {
  removeTasksList as removeTasksListFromApi,
  updateTasksList as updateTasksListOnApi,
} from "App/api/TasksList/services";

import { TasksCardsList } from "App/widgets/tasks/TasksCardsList/TasksCardsList";
import { useAppDraggedItemDispatcher } from "App/entities/AppDraggedItem/state";
import { TasksListModal } from "../TasksListModal/TasksListModal";
import { TasksListDto, TasksListViewModel } from "App/entities/TasksList/models";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";
import { useTasksListDispatcher } from "App/store/BoardPage/TasksList/hooks/useTasksListDispatcher";
import { useTaskDispatcher } from "App/store/BoardPage/Task/hooks/useTaskDispatcher";

export interface ITasksListCardProps {
  list: TasksListViewModel;
  isDragPreview?: boolean;
}

export const TasksListCard = ({ list, isDragPreview = false }: ITasksListCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const BACKGROUD_COLOR = list.isPinned ? "#ebdcbd" : "#D8DEE9";

  const dispatcher = useTasksListDispatcher();
  const taskDispatcher = useTaskDispatcher();
  const appDraggedItemDispatcher = useAppDraggedItemDispatcher();

  const startLoading = () => setIsLoading(true);
  const endLoading = () => setIsLoading(false);

  const edit = () => {
    dispatcher.updateTasksList({ ...list, isEditing: true });
  };

  const remove = async () => {
    startLoading();

    const tasksListDto = await removeTasksListFromApi(list.id);
    if (tasksListDto) {
      dispatcher.removeTasksList(TasksListDto.toViewModel(tasksListDto));
    }

    endLoading();
  };

  const togglePin = async () => {
    startLoading();

    const listDto = await updateTasksListOnApi(list.id, {
      title: list.title,
      isPinned: !list.isPinned,
      boardId: list.boardId,
    });

    if (listDto) {
      dispatcher.updateTasksList(TasksListDto.toViewModel(listDto));
    }

    endLoading();
  };

  const dropOnList = (draggedItem: TAppDraggedItem) => {
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

  const header = (
    <TasksListHeader title={list.title} isPinned={list.isPinned} onRemove={remove} onEdit={edit} onPin={togglePin} />
  );

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
        draggedItem={TasksListViewModel.toAppDraggedItem(list)}
        onDrop={dropOnList}
      />

      <TasksListModal list={list} />
    </>
  );
};
