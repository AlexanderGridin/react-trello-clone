import { useState } from "react";
import { DndCard } from "App/components/DndCard/DndCard";
import { mapTaskToDraggedItem, mapTaskDtoToViewModel } from "App/entities/Task/mappers";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Card } from "shared/components/Card/Card";
import { removeTask as removeTaskFromApi } from "App/api/Task/services";
import { Task } from "../Task/Task";
import { useAppDraggedItemDispatcher } from "App/entities/AppDraggedItem/state";
import { TaskModal } from "../TaskModal/TaskModal";
import { TaskPriority } from "App/types/TaskPriority";
import { TaskViewModel } from "App/entities/Task/models";
import { AppDraggedItem } from "App/entities/AppDraggedItem/models";
import { Chip } from "shared/components/Chip/Chip";
import style from "./TaskCard.module.css";
import { useTaskDispatcher } from "App/store/BoardPage/Task/hooks/useTaskDispatcher";

interface TaskCardProps {
  task: TaskViewModel;
  isDragPreview?: boolean;
}

const getTaskPriorityColor = (priority: TaskPriority): string => {
  switch (priority) {
    case "regular":
      return "#ECEFF4";

    case "medium":
      return "#D08770";

    case "height":
      return "#BF616A";

    case "low":
      return "#EBCB8B";

    default:
      return "#ECEFF4";
  }
};

export const TaskCard = ({ task, isDragPreview = false }: TaskCardProps) => {
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
      <DndCard draggedItem={mapTaskToDraggedItem(task)} backgroundColor={BACKGROUD_COLOR} onDrop={dropOnTask}>
        {content}
      </DndCard>

      <TaskModal task={task} />
    </>
  );
};
