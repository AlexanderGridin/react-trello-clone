import { ReactNode } from "react";
import { AddTaskButton } from "./components/AddTaskButton";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { useAddTaskActions } from "./hooks/useAddTaskActions";
import { useAddTaskState } from "./hooks/useAddTaskState";

export interface AddTaskProps {
  children?: ReactNode;
  onAdd: (content: string) => void;
}

export const AddTask = (props: AddTaskProps): JSX.Element => {
  const { children } = props;
  const state = useAddTaskState();
  const { add, cancel, showForm } = useAddTaskActions(props, state);

  return (
    <>
      {state.isShowForm.value ? (
        <AddTaskForm onAdd={add} onCancel={cancel} />
      ) : (
        <AddTaskButton onClick={showForm}>{children}</AddTaskButton>
      )}
    </>
  );
};
