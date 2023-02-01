import { TaskContainer } from "./components/TaskContainer";
import { TaskContent } from "./components/TaskContent";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";

interface TaskProps {
  task: TaskViewModel;
  onRemove: () => void;
}

export const Task = ({ task, onRemove }: TaskProps) => {
  const remove = () => onRemove();

  return (
    <TaskContainer>
      <TaskContent>{task.content}</TaskContent>
      <RemoveButton className="mr-0" onClick={remove} />
    </TaskContainer>
  );
};
