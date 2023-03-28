import { Card } from "@alexandergridin/rtc-components-lib";

import { DndCard } from "App/components/DndCard";
import { useSwitch } from "App/hooks";
import { TasksListDto, TasksListViewModel } from "App/entities/TasksList/models";
import { IDraggedItem } from "drag-and-drop/models";
import { TaskViewModel } from "App/entities/Task/models";
import { TasksListModal } from "App/widgets/tasks-lists/TasksListModal";
import { TasksCardsList } from "App/widgets/tasks/TasksCardsList";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/types";
import { useTaskDispatcher } from "App/store/OpenedBoard/Task/hooks";
import { useTasksListDispatcher } from "App/store/OpenedBoard/TasksList/hooks";
import { debouncedUpdateTaskMany } from "api/Task/services";
import { useAppDraggedItemDispatcher } from "App/store/AppDraggedItem/hooks";
import { debouncedUpdateTasksListMany, removeTasksListAsync, updateTasksListAsync } from "api/TasksList/services";

import { TasksListHeader } from "./components";

export interface ITasksListCardProps {
  list: TasksListViewModel;
  isDragPreview?: boolean;
}

export const TasksListCard = ({ list, isDragPreview = false }: ITasksListCardProps) => {
  const [isLoading, startLoading, endLoading] = useSwitch();
  const BACKGROUD_COLOR = list.isPinned ? "#ebdcbd" : "#D8DEE9";

  const dispatcher = useTasksListDispatcher();
  const taskDispatcher = useTaskDispatcher();
  const appDraggedItemDispatcher = useAppDraggedItemDispatcher();

  const edit = () => {
    dispatcher.updateTasksList({ ...list, isEditing: true });
  };

  const remove = async () => {
    startLoading();

    const tasksListDto = await removeTasksListAsync(list.id);
    if (tasksListDto) {
      dispatcher.removeTasksList(TasksListDto.toViewModel(tasksListDto));
    }

    endLoading();
  };

  const togglePin = async () => {
    startLoading();

    const listDto = await updateTasksListAsync(list.id, {
      title: list.title,
      isPinned: !list.isPinned,
      boardId: list.boardId,
    });

    if (listDto) {
      dispatcher.updateTasksList(TasksListDto.toViewModel(listDto));
    }

    endLoading();
  };

  const handleListDrop = (draggedItem: IDraggedItem<DraggedItemType.TasksList, TasksListViewModel>) => {
    appDraggedItemDispatcher.setAppDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        rank: list.rank,
      },
    });

    const draggedList = { ...draggedItem.data, rank: list.rank };
    const targetList = { ...list, rank: draggedItem.data.rank };

    dispatcher.moveTasksList(draggedList, targetList);

    const requestBody = [draggedList, targetList].map(TasksListViewModel.toUpdateManyDto);
    debouncedUpdateTasksListMany({
      body: requestBody,
    });
  };

  const handleTaskDrop = (draggedItem: IDraggedItem<DraggedItemType.Task, TaskViewModel>) => {
    taskDispatcher.removeTask(draggedItem.data);
    dispatcher.pushTaskInTasksList(list, draggedItem.data);
    appDraggedItemDispatcher.setAppDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        listId: list.id,
      },
    });

    debouncedUpdateTaskMany({
      body: [TaskViewModel.toUpdateManyDto({ ...draggedItem.data, listId: list.id })],
    });
  };

  const dropOnList = (draggedItem: TAppDraggedItem) => {
    if (draggedItem.type === DraggedItemType.TasksList && draggedItem.data.isPinned === list.isPinned) {
      handleListDrop(draggedItem);
      return;
    }

    if (draggedItem.type !== DraggedItemType.Task || list.tasks.length) {
      return;
    }

    handleTaskDrop(draggedItem);
  };

  const header = (
    <TasksListHeader title={list.title} isPinned={list.isPinned} onRemove={remove} onEdit={edit} onPin={togglePin} />
  );

  const content = (
    <>
      <TasksCardsList boardId={list.boardId} listId={list.id} tasks={list.tasks} isShowAddTask />
      <div style={{ paddingTop: "15px", color: "gray", textAlign: "right" }}>{list.rank}</div>
    </>
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
