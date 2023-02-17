import { addTasksList as addTasksListOnApi } from "App/api/TasksList/TasksList.api";
import { AddItemForm } from "App/components/AddItemForm/AddItemForm";
import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { mapTasksListDtoToViewModel } from "App/entities/TasksList/mappers/mapTasksListDtoToViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { useState } from "react";
import { Card } from "shared/components/Card/Card";
import { AddListButton } from "./components/AddListButton";

export interface AddTasksListProps {
  boardId: string;
  onAdd: (list: TasksListViewModel) => void;
}

export const AddTasksList = ({ boardId, onAdd }: AddTasksListProps) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  const addList = async (formValue: AddItemFormValue) => {
    setIsLoading(true);

    const tasksListDto = await addTasksListOnApi({
      title: formValue.text,
      boardId,
    });

    if (tasksListDto) {
      onAdd(mapTasksListDtoToViewModel(tasksListDto));
      hideForm();
    }

    setIsLoading(false);
  };

  if (isShowForm) {
    return (
      <Card backgroundColor="#D8DEE9" isLoading={isLoading}>
        <AddItemForm onSubmit={addList} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddListButton onClick={showForm}>+ Add tasks list</AddListButton>;
};
