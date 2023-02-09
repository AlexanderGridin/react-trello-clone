import { DndCard } from "App/components/DndCard/DndCard";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useAppDraggedItemDispatchers } from "App/entities/AppDraggedItem/state/hooks/useAppDraggedItemDispatchers";
import { mapTaskToDraggedItem } from "App/entities/Task/mappers/mapTaskToDraggedItem";
import { useTaskDispatchers } from "App/entities/Task/state/hooks/useTaskDispatchers";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Task } from "App/widgets/Task/Task";
import { Card } from "shared/components/Card/Card";

interface ListOfTasksListItemProps {
  task: TaskViewModel;
  isDragPreview?: boolean;
}

export const ListOfTasksListItem = ({
  task,
  isDragPreview = false,
}: ListOfTasksListItemProps) => {
  const BACKGROUD_COLOR = "#ECEFF4";

  const { dispatchMoveTask } = useTaskDispatchers();
  const { dispatchSetAppDraggedItem } = useAppDraggedItemDispatchers();

  const dropOnTask = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Task) {
      return;
    }

    const draggedTask: TaskViewModel = draggedItem.data;

    dispatchMoveTask(draggedTask, task);

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

  if (isDragPreview) {
    return (
      <Card className="drag-preview" backgroundColor={BACKGROUD_COLOR}>
        <Task task={task}></Task>
      </Card>
    );
  }

  return (
    <DndCard
      draggedItem={mapTaskToDraggedItem(task)}
      backgroundColor={BACKGROUD_COLOR}
      onDrop={dropOnTask}
    >
      <Task task={task} />
    </DndCard>
  );
};
