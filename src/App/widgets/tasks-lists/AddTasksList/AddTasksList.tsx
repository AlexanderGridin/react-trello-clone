import { useState } from "react";
import { addTasksList as addTasksListOnApi } from "App/api/TasksList";
import { mapTasksListDtoToViewModel } from "App/entities/TasksList/mappers";
import { Card } from "shared/components/Card/Card";
import { AddListButton } from "./components/AddListButton";
import { TasksListForm, TasksListFormValue } from "../TasksListForm/TasksListForm";
import { TasksListViewModel } from "App/entities/TasksList/models";

export interface AddTasksListProps {
  boardId: string;
  onAdd: (list: TasksListViewModel) => void;
}

export const AddTasksList = ({ boardId, onAdd }: AddTasksListProps) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  const addList = async (formValue: TasksListFormValue) => {
    setIsLoading(true);

    const tasksListDto = await addTasksListOnApi({
      ...formValue,
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
        <TasksListForm onSubmit={addList} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddListButton onClick={showForm}>+ Add tasks list</AddListButton>;
};
