import styled from "styled-components";
import {
  ColumnContainer,
  ColumnTitle,
  ErrorButton,
  FlexContainer,
} from "styles";
import { AddItem } from "components/AddItem";
import { Card } from "components/Card";
import { Task } from "shared/models/Task.model";
import { useAppState } from "hooks/useAppState";
import { removeList } from "state/actions/list/removeList";
import { addTask } from "state/actions/task/addTask";
import { MaterialIcon } from "./MaterialIcon";
import { Icon } from "shared/enums/Icon";

interface ColumnProps {
  id: string;
  title: string;
  tasks: Array<Task>;
}

const ColumnHeader = styled(FlexContainer)`
  margin-bottom: 12px;
`;

const RemoveListButton = styled(ErrorButton)`
  margin-left: auto;
  margin-right: 0;
  padding: 6px;
`;

export const Column = ({ id, title, tasks }: ColumnProps): JSX.Element => {
  const { dispatch } = useAppState();

  const ADD_ITEM_TEXT = "+ Add new card";
  const addNewTask = (content: string) => dispatch(addTask(content, id));
  const removeCurrentList = () => dispatch(removeList(id));

  return (
    <ColumnContainer>
      <ColumnHeader>
        <ColumnTitle> {title}</ColumnTitle>

        <RemoveListButton onClick={removeCurrentList}>
          <MaterialIcon icon={Icon.Delete} />
        </RemoveListButton>
      </ColumnHeader>

      {tasks.map((task: Task) => (
        <Card key={task.id} id={task.id} listId={id} content={task.text} />
      ))}

      <AddItem buttonText={ADD_ITEM_TEXT} dark onAdd={addNewTask} />
    </ColumnContainer>
  );
};
