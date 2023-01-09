import { ColumnContainer, ColumnTitle } from "styles";
import { AddItem } from "components/AddItem";
import { Card } from "components/Card";
import { Task } from "shared/models/Task.model";

interface ColumnProps {
  id: string;
  title: string;
  tasks: Array<Task>;
}

export const Column = ({ id, title, tasks }: ColumnProps): JSX.Element => {
  return (
    <ColumnContainer>
      <ColumnTitle> {title}</ColumnTitle>

      {tasks.map((task: Task) => (
        <Card key={task.id} id={task.id} content={task.text} />
      ))}

      <AddItem
        buttonText="+ Add new card"
        dark
        onAdd={(text: string) => {
          console.log(text);
        }}
      />
    </ColumnContainer>
  );
};
