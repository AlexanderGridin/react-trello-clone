import { TaskModel } from "./models/TaskModel";
import { TaskContainer } from "./components/TaskContainer";
import { TaskContent } from "./components/TaskContent";
import { RemoveButton } from "../RemoveButton/RemoveButton";

interface TaskProps {
  task: TaskModel;
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
