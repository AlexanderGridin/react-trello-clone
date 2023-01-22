import { ReactNode } from "react";
import { AddListButton } from "./components/AddListButton";
import { AddListForm } from "./components/AddListForm/AddListForm";
import { useAddListActions } from "./hooks/useAddListActions";
import { useAddListState } from "./hooks/useAddListState";

export interface AddListProps {
  children?: ReactNode;
  onAdd: (title: string) => void;
}

export const AddList = (props: AddListProps): JSX.Element => {
  const { children } = props;
  const state = useAddListState();
  const { add, cancel, showForm } = useAddListActions(props, state);

  return (
    <>
      {state.isShowForm.value ? (
        <AddListForm onAdd={add} onCancel={cancel} />
      ) : (
        <AddListButton onClick={showForm}>{children}</AddListButton>
      )}
    </>
  );
};
