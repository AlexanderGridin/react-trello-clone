import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import style from "./Task.module.css";
import { useTaskDispatchers } from "App/entities/Task/state/hooks/useTaskDispatchers";

interface TaskProps {
  task: TaskViewModel;
}

export const Task = ({ task }: TaskProps) => {
  const { dispatchRemoveTask } = useTaskDispatchers();
  const removeTask = () => dispatchRemoveTask(task);

  return (
    <div className={style.container}>
      <div className={style.content}>{task.content}</div>
      <RemoveButton className="mr-0" onClick={removeTask} />
    </div>
  );
};
