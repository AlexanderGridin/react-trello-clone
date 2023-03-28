import { Card, Chip } from "@alexandergridin/rtc-components-lib";

import { DndCard } from "App/components/DndCard";
import { useSwitch } from "App/hooks";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/types";
import { useTaskDispatcher } from "App/store/OpenedBoard/Task/hooks";
import { useAppDraggedItemDispatcher } from "App/store/AppDraggedItem/hooks";
import { TaskDto, TaskViewModel } from "App/entities/Task/models";
import { debouncedUpdateTaskMany, removeTaskAsync } from "api/Task/services";

import { Task } from "../Task";
import { TaskModal } from "../TaskModal";
import { getTaskPriorityColor } from "./utils";

import style from "./TaskCard.module.css";

interface ITaskCardProps {
  task: TaskViewModel;
  isDragPreview?: boolean;
}

export const TaskCard = ({ task, isDragPreview = false }: ITaskCardProps) => {
  const [isLoading, startLoading, endLoading] = useSwitch();
  const BACKGROUD_COLOR = "#ECEFF4";

  const dispatcher = useTaskDispatcher();
  const appDraggedItemDispatcher = useAppDraggedItemDispatcher();

  const editTask = (task: TaskViewModel) => {
    dispatcher.updateTask({ ...task, isEditing: true });
  };

  const removeTask = async () => {
    startLoading();

    const taskDto = await removeTaskAsync(task.id);
    if (taskDto) {
      dispatcher.removeTask(TaskDto.toViewModel(taskDto));
    }

    endLoading();
  };

  const dropOnTask = (draggedItem: TAppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Task || draggedItem.data.rank === task.rank) {
      return;
    }

    const draggedTask = { ...draggedItem.data, rank: task.rank };
    const targetTask = { ...task, rank: draggedItem.data.rank };

    if (draggedTask.rank === targetTask.rank) {
      return;
    }

    appDraggedItemDispatcher.setAppDraggedItem({
      ...draggedItem,
      data: {
        ...draggedTask,
        listId: task.listId,
      },
    });

    dispatcher.moveTask(draggedTask, targetTask);

    debouncedUpdateTaskMany({
      body: [{ ...draggedTask, listId: task.listId }, targetTask].map(TaskViewModel.toUpdateManyDto),
    });
  };

  if (!task) {
    return null;
  }

  const content = (
    <>
      <Task task={task} onEdit={editTask} onRemove={removeTask} />
      <Chip className={style.user}>{task.user.name}</Chip>
      <div
        style={{
          backgroundColor: getTaskPriorityColor(task.priority),
          position: "absolute",
          left: "0",
          top: "0",
          width: "5px",
          height: "100%",
        }}
      ></div>
      <div style={{ color: "gray", position: "absolute", bottom: "15px", right: "15px" }}>{task.rank}</div>
    </>
  );

  if (isDragPreview || isLoading) {
    return (
      <Card className={isDragPreview ? "drag-preview" : ""} isLoading={isLoading} backgroundColor={BACKGROUD_COLOR}>
        {content}
      </Card>
    );
  }

  return (
    <>
      <DndCard draggedItem={TaskViewModel.toAppDraggedItem(task)} backgroundColor={BACKGROUD_COLOR} onDrop={dropOnTask}>
        {content}
      </DndCard>

      <TaskModal task={task} />
    </>
  );
};
