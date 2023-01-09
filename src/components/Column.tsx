import { ColumnContainer, ColumnTitle } from "styles";
import { AddItem } from "components/AddItem";
import { Card } from "components/Card";

interface ColumnProps {
  title: string;
}

export const Column = ({ title }: ColumnProps): JSX.Element => {
  return (
    <ColumnContainer>
      <ColumnTitle> {title}</ColumnTitle>

      <Card text="First" />
      <Card text="Second" />

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
