import { PropsWithChildren } from "react";
import { AddBoardButton } from "./components/AddBoardButton";
import { AddBoardForm } from "./components/AddBoardForm/AddBoardForm";
import { useAddBoardActions } from "./hooks/useAddBoardActions";
import { useAddBoardState } from "./hooks/useAddBoardState";

export interface AddBoardProps extends PropsWithChildren {
  onAdd: (content: string) => void;
}

export const AddBoard = (props: AddBoardProps): JSX.Element => {
  const { children } = props;
  const state = useAddBoardState();
  const { add, cancel, showForm } = useAddBoardActions(props, state);

  return (
    <>
      {state.isShowForm.value ? (
        <AddBoardForm onAdd={add} onCancel={cancel} />
      ) : (
        <AddBoardButton onClick={showForm}>{children}</AddBoardButton>
      )}
    </>
  );
};
