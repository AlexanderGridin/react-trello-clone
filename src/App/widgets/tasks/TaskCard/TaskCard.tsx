import { DndCard } from "App/components/DndCard/DndCard";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useAppDraggedItemDispatchers } from "App/entities/AppDraggedItem/state/hooks/useAppDraggedItemDispatchers";
import { mapTaskToDraggedItem } from "App/entities/Task/mappers/mapTaskToDraggedItem";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Card } from "shared/components/Card/Card";
import { removeTask as removeTaskFromApi } from "App/api/Task";
import { useState } from "react";
import { mapTaskDtoToViewModel } from "App/entities/Task/mappers/mapTaskDotToViewModel";
import { Task } from "../Task/Task";
import { useTaskDispatcher } from "App/entities/Task/state";

interface TaskCardProps {
  task: TaskViewModel;
  isDragPreview?: boolean;
}

export const TaskCard = ({ task, isDragPreview = false }: TaskCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const BACKGROUD_COLOR = "#ECEFF4";

  const dispatcher = useTaskDispatcher();
  const { dispatchSetAppDraggedItem } = useAppDraggedItemDispatchers();

  const removeTask = async () => {
    setIsLoading(true);

    const taskDto = await removeTaskFromApi(task.id);
    if (taskDto) {
      dispatcher.removeTask(mapTaskDtoToViewModel(taskDto));
    }

    setIsLoading(false);
  };

  const dropOnTask = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Task) {
      return;
    }

    const draggedTask: TaskViewModel = draggedItem.data;

    dispatcher.moveTask(draggedTask, task);

    if (draggedTask.listId === task.listId) {
      return;
    }

    dispatchSetAppDraggedItem({
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

  if (isDragPreview || isLoading) {
    return (
      <Card
        className={isDragPreview ? "drag-preview" : ""}
        isLoading={isLoading}
        backgroundColor={BACKGROUD_COLOR}
      >
        <Task task={task} onRemove={removeTask} />
      </Card>
    );
  }

  return (
    <DndCard
      draggedItem={mapTaskToDraggedItem(task)}
      backgroundColor={BACKGROUD_COLOR}
      onDrop={dropOnTask}
    >
      <Task task={task} onRemove={removeTask} />
    </DndCard>
  );
};
