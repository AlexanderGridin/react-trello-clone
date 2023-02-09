import { AddItemForm } from "App/components/AddItemForm/AddItemForm";
import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { useState } from "react";
import { Card } from "shared/components/Card/Card";
import { AddTaskButton } from "./components/AddTaskButton";

export interface AddTaskProps {
  onAdd: (task: TaskViewModel) => void;
}

export const AddTask = ({ onAdd }: AddTaskProps) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const hideForm = () => setIsShowForm(false);
  const showForm = () => setIsShowForm(true);

  const addTask = (formValue: AddItemFormValue) => {
    onAdd(new TaskViewModel({ content: formValue.text }));
    hideForm();
  };

  if (isShowForm) {
    return (
      <Card>
        <AddItemForm onSubmit={addTask} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddTaskButton onClick={showForm}>+ Add task</AddTaskButton>;
};
