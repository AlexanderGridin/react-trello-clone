import { ReactNode, useState } from "react";
import { AddListForm } from "./components/AddListForm";
import { AddListButton } from "./components/AddListButton";
import { ListContainerTransparent } from "shared/components/List/components/ListContainer";

interface AddListProps {
  children?: ReactNode;
  onAdd: (title: string) => void;
}

export const AddList = ({ children, onAdd }: AddListProps): JSX.Element => {
  const [isShowForm, setIsShowForm] = useState(false);

  const add = (title: string) => {
    onAdd(title);
    setIsShowForm(false);
  };
  const cancel = () => setIsShowForm(false);
  const showForm = () => setIsShowForm(true);

  return (
    <ListContainerTransparent>
      {isShowForm ? (
        <AddListForm onAdd={add} onCancel={cancel} />
      ) : (
        <AddListButton onClick={showForm}>{children}</AddListButton>
      )}
    </ListContainerTransparent>
  );
};
