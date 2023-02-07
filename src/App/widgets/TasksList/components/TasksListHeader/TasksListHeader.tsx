import { PinButton } from "App/components/PinButton/PinButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { useTasksListFeatures } from "../../hooks/useTasksListFeatures";
import { TasksListHeaderContainer } from "./components/TasksListHeaderContainer";
import { TasksListTitle } from "./components/TasksListTitle";
import style from "./TasksListHeader.module.css";

interface TasksListHeaderProps {
  list: TasksListViewModel;
}
export const TasksListHeader = ({ list }: TasksListHeaderProps) => {
  const { remove, togglePin } = useTasksListFeatures(list);

  return (
    <TasksListHeaderContainer>
      <PinButton isPinned={list.isPinned} onClick={togglePin} />
      <TasksListTitle className={style.Title}>{list.title}</TasksListTitle>
      <RemoveButton className={style.RemoveButton} onClick={remove} />
    </TasksListHeaderContainer>
  );
};
