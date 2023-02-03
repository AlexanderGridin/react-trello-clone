import { AddItemForm } from "App/components/AddItemForm/AddItemForm";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { Card } from "shared/components/Card/Card";
import { AddTaskButton } from "./components/AddTaskButton";
import { useAddTaskFeatures } from "./hooks/useAddTaskFeatures";
import { useAddTaskState } from "./hooks/useAddTaskState";

export interface AddTaskProps {
  onAdd: (task: TaskViewModel) => void;
}

export const AddTask = (props: AddTaskProps) => {
  const state = useAddTaskState();
  const { addTask, cancel, showForm } = useAddTaskFeatures(props, state);

  if (state.isShowForm.value) {
    return (
      <Card>
        <AddItemForm onSubmit={addTask} onCancel={cancel} />
      </Card>
    );
  }

  return <AddTaskButton onClick={showForm}>+ Add task</AddTaskButton>;
};
