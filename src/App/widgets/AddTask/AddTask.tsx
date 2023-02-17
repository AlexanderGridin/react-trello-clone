import { AddItemForm } from "App/components/AddItemForm/AddItemForm";
import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { useState } from "react";
import { Card } from "shared/components/Card/Card";
import { AddTaskButton } from "./components/AddTaskButton";
import { addTask as addTaskOnApi } from "App/api/Task";
import { mapTaskDtoToViewModel } from "App/entities/Task/mappers/mapTaskDotToViewModel";

export interface AddTaskProps {
  listId: string;
  boardId: string;
  onAdd: (task: TaskViewModel) => void;
}

export const AddTask = ({ listId, boardId, onAdd }: AddTaskProps) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hideForm = () => setIsShowForm(false);
  const showForm = () => setIsShowForm(true);

  const addTask = async (formValue: AddItemFormValue) => {
    setIsLoading(true);

    const taskDto = await addTaskOnApi({
      content: formValue.text,
      listId,
      boardId,
    });

    if (taskDto) {
      onAdd(mapTaskDtoToViewModel(taskDto));
      hideForm();
    }

    setIsLoading(false);
  };

  if (isShowForm) {
    return (
      <Card isLoading={isLoading}>
        <AddItemForm onSubmit={addTask} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddTaskButton onClick={showForm}>+ Add task</AddTaskButton>;
};
