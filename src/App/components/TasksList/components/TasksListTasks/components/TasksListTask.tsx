import { DndCard } from "App/components/DndCard/DndCard";
import { useTaskActions } from "App/components/Task/hooks/useTaskActions";
import { mapTaskToDraggedItem } from "App/components/Task/mappers/mapTaskToDraggedItem";
import { TaskModel } from "App/components/Task/models/TaskModel";
import { Task } from "App/components/Task/Task";
import { Card } from "shared/components/Card/Card";

interface TasksListTaskProps {
  task: TaskModel;
  isDragPreview?: boolean;
}

export const TasksListTask = ({
  task,
  isDragPreview = false,
}: TasksListTaskProps) => {
  const { removeTask, dropOnTask } = useTaskActions(task);

  if (isDragPreview) {
    return (
      <li className="mb">
        <Card>
          <Task task={task} onRemove={() => {}}></Task>
        </Card>
      </li>
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
