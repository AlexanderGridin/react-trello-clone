import { PinButton } from "App/components/PinButton/PinButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { useTasksListFeatures } from "../../hooks/useTasksListFeatures";
import style from "./TasksListHeader.module.css";

interface TasksListHeaderProps {
  list: TasksListViewModel;
}
export const TasksListHeader = ({ list }: TasksListHeaderProps) => {
  const { remove, togglePin } = useTasksListFeatures(list);

  return (
    <div className={style.container}>
      <PinButton
        className={style.PinButton}
        isPinned={list.isPinned}
        onClick={togglePin}
      />

      <h3 className={style.title}>{list.title}</h3>

      <RemoveButton className={style.RemoveButton} onClick={remove} />
    </div>
  );
};
