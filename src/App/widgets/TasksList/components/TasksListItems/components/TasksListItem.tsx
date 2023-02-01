import { DndCard } from "App/components/DndCard/DndCard";
import { mapTaskToDraggedItem } from "App/entities/Task/mappers/mapTaskToDraggedItem";
import { TaskModel } from "App/entities/Task/TaskModel";
import { useTaskFeatures } from "App/widgets/Task/hooks/useTaskFeatures";
import { Task } from "App/widgets/Task/Task";
import { Card } from "shared/components/Card/Card";

interface TasksListItemProps {
  task: TaskModel;
  isDragPreview?: boolean;
}

export const TasksListItem = ({
  task,
  isDragPreview = false,
}: TasksListItemProps) => {
  const { removeTask, dropOnTask } = useTaskFeatures(task);

  if (isDragPreview) {
    return (
      <Card className="drag-preview">
        <Task task={task} onRemove={() => {}}></Task>
      </Card>
    );
  }

  return (
    <li key={task.id} className="mb">
      <DndCard draggedItem={mapTaskToDraggedItem(task)} onDrop={dropOnTask}>
        <Task task={task} onRemove={removeTask} />
      </DndCard>
    </li>
  );
};