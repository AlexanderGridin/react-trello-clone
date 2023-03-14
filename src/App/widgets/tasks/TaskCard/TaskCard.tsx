import { useState } from "react";

import { DndCard } from "App/components/DndCard/DndCard";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Card } from "shared/components/Card/Card";
import { removeTask as removeTaskFromApi } from "App/api/Task/services";
import { useAppDraggedItemDispatcher } from "App/entities/AppDraggedItem/state";
import { TaskDto, TaskViewModel } from "App/entities/Task/models";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";
import { Chip } from "shared/components/Chip/Chip";
import { useTaskDispatcher } from "App/store/OpenedBoard/Task/hooks/useTaskDispatcher";

import { TaskModal } from "../TaskModal/TaskModal";
import style from "./TaskCard.module.css";
import { getTaskPriorityColor } from "./utils";
import { Task } from "../Task/Task";

interface ITaskCardProps {
  task: TaskViewModel;
  isDragPreview?: boolean;
}

export const TaskCard = ({ task, isDragPreview = false }: ITaskCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const BACKGROUD_COLOR = "#ECEFF4";

  const dispatcher = useTaskDispatcher();
  const appDraggedItemDispatcher = useAppDraggedItemDispatcher();

  const editTask = (task: TaskViewModel) => {
    dispatcher.updateTask({ ...task, isEditing: true });
  };

  const removeTask = async () => {
    setIsLoading(true);

    const taskDto = await removeTaskFromApi(task.id);
    if (taskDto) {
      dispatcher.removeTask(TaskDto.toViewModel(taskDto));
    }

    setIsLoading(false);
  };

  const dropOnTask = (draggedItem: TAppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Task) {
      return;
    }

    const draggedTask: TaskViewModel = draggedItem.data;

    dispatcher.moveTask(draggedTask, task);

    if (draggedTask.listId === task.listId) {
      return;
    }

    appDraggedItemDispatcher.setAppDraggedItem({
      ...draggedItem,
      data: {
        ...draggedTask,
        listId: task.listId,
      },
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
