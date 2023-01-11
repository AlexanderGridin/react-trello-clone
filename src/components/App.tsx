import { Column } from "components/Column";
import { useAppState } from "hooks/useAppState";
import { TasksList } from "shared/models/TasksList.model";
import { AppContainer } from "styles";
import { AddColumn } from "./AddColumn";

export const App = () => {
  const { tasksLists, getTasksByListId } = useAppState();

  return (
    <AppContainer>
      {tasksLists.map((list: TasksList) => (
        <Column
          key={list.id}
          id={list.id}
          title={list.title}
          tasks={getTasksByListId(list.id)}
        />
      ))}

      <AddColumn />
    </AppContainer>
  );
};
