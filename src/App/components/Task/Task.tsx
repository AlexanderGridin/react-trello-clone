import styled from "styled-components";
import { RemoveButton } from "shared/components/Buttons/RemoveButton";
import { TaskModel } from "./models/TaskModel";

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TaskContent = styled.div`
  flex-grow: 1;
  padding-right: 7px;
`;

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
