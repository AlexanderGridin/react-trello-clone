import { DndCard } from "App/components/DndCard/DndCard";
import { mapTaskToDraggedItem } from "App/entities/Task/mappers/mapTaskToDraggedItem";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { useTaskFeatures } from "App/widgets/Task/hooks/useTaskFeatures";
import { Task } from "App/widgets/Task/Task";
import { Card } from "shared/components/Card/Card";

interface TasksListItemProps {
  task: TaskViewModel;
  isDragPreview?: boolean;
}

export const TasksListItem = ({
  task,
  isDragPreview = false,
}: TasksListItemProps) => {
  const BACKGROUD_COLOR = "#ECEFF4";
  const { dropOnTask } = useTaskFeatures(task);

  if (isDragPreview) {
    return (
      <Card className="drag-preview" backgroundColor={BACKGROUD_COLOR}>
        <Task task={task}></Task>
      </Card>
    );
  }

  return (
    <li key={task.id} className="mb">
      <DndCard
        draggedItem={mapTaskToDraggedItem(task)}
        backgroundColor={BACKGROUD_COLOR}
        onDrop={dropOnTask}
      >
        <Task task={task} />
      </DndCard>
    </li>
  );
};
