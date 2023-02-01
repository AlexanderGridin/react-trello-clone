import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { TasksListHeaderContainer } from "./components/TasksListHeaderContainer";
import { TasksListTitle } from "./components/TasksListTitle";

interface TasksListHeaderProps {
  list: TasksListModel;
  onRemove: () => void;
}
export const TasksListHeader = ({ list, onRemove }: TasksListHeaderProps) => {
  const remove = () => onRemove();

  return (
    <TasksListHeaderContainer>
      <TasksListTitle>{list.title}</TasksListTitle>
      <RemoveButton className="mr-0" onClick={remove} />
    </TasksListHeaderContainer>
  );
};
