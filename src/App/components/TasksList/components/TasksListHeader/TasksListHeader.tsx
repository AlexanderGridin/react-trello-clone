import { RemoveButton } from "shared/components/Buttons/RemoveButton";
import { TasksListHeaderContainer } from "./components/TasksListHeaderContainer";
import { TasksListTitle } from "./components/TasksListTitle";

interface TasksListHeaderProps {
  title: string;
  onRemove: () => void;
}
export const TasksListHeader = ({ title, onRemove }: TasksListHeaderProps) => {
  const remove = () => onRemove();

  return (
    <TasksListHeaderContainer>
      <TasksListTitle>{title}</TasksListTitle>
      <RemoveButton className="mr-0" onClick={remove} />
    </TasksListHeaderContainer>
  );
};
