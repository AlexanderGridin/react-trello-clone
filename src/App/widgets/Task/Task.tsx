import { TaskContainer } from "./components/TaskContainer";
import { TaskContent } from "./components/TaskContent";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { useTaskFeatures } from "./hooks/useTaskFeatures";

interface TaskProps {
  task: TaskViewModel;
}

export const Task = ({ task }: TaskProps) => {
  const { removeTask } = useTaskFeatures(task);

  return (
    <TaskContainer>
      <TaskContent>{task.content}</TaskContent>
      <RemoveButton className="mr-0" onClick={removeTask} />
    </TaskContainer>
  );
};
