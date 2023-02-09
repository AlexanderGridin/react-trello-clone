import { AddItemForm } from "App/components/AddItemForm/AddItemForm";
import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { useState } from "react";
import { Card } from "shared/components/Card/Card";
import { AddListButton } from "./components/AddListButton";

export interface AddTasksListProps {
  onAdd: (list: TasksListViewModel) => void;
}

export const AddTasksList = ({ onAdd }: AddTasksListProps) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  const addList = (formValue: AddItemFormValue) => {
    onAdd(new TasksListViewModel({ title: formValue.text }));
    hideForm();
  };

  if (isShowForm) {
    return (
      <Card backgroundColor="#D8DEE9">
        <AddItemForm onSubmit={addList} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddListButton onClick={showForm}>+ Add tasks list</AddListButton>;
};
