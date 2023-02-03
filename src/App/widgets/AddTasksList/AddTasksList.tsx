import { AddItemForm } from "App/components/AddItemForm/AddItemForm";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { Card } from "shared/components/Card/Card";
import { AddListButton } from "./components/AddListButton";
import { useAddTasksListFeatures } from "./hooks/useAddTasksListFeatures";
import { useAddTasksListState } from "./hooks/useAddTasksListState";

export interface AddTasksListProps {
  onAdd: (list: TasksListViewModel) => void;
}

export const AddTasksList = (props: AddTasksListProps) => {
  const state = useAddTasksListState();
  const { addList, cancel, showForm } = useAddTasksListFeatures(props, state);

  if (state.isShowForm.value) {
    return (
      <Card backgroundColor="#D8DEE9">
        <AddItemForm onSubmit={addList} onCancel={cancel} />
      </Card>
    );
  }

  return <AddListButton onClick={showForm}>+ Add tasks list</AddListButton>;
};
