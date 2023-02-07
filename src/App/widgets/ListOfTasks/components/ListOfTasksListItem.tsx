import { DndCard } from "App/components/DndCard/DndCard";
import { mapTaskToDraggedItem } from "App/entities/Task/mappers/mapTaskToDraggedItem";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { useTaskFeatures } from "App/widgets/Task/hooks/useTaskFeatures";
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
  const { dropOnTask } = useTaskFeatures(task);

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
