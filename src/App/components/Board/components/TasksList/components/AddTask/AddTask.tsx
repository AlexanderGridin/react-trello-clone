import { ReactNode, useState } from "react";
import { AddTaskButton } from "./components/AddTaskButton";
import { AddTaskForm } from "./components/AddTaskForm";

interface AddTaskProps {
  children?: ReactNode;
  onAdd: (content: string) => void;
}

export const AddTask = ({ children, onAdd }: AddTaskProps): JSX.Element => {
  const [isShowForm, setIsShowForm] = useState(false);

  const add = (content: string) => {
    onAdd(content);
    setIsShowForm(false);
  };
  const cancel = () => setIsShowForm(false);
  const showForm = () => setIsShowForm(true);

  return (
    <>
      {isShowForm ? (
        <AddTaskForm onAdd={add} onCancel={cancel} />
      ) : (
        <AddTaskButton onClick={showForm}>{children}</AddTaskButton>
      )}
    </>
  );
};
