// import { Board } from "App/components/Board/Board";
import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";
import { BoardsList } from "./components/BoardsList/BoardsList";
import { AppStateProvider } from "./state/components/AppStateProvider";

export const App = (): JSX.Element => (
  <DragAndDropProvider>
    <AppStateProvider>
      <BoardsList></BoardsList>
      {/* <Board title="Test Board" /> */}
    </AppStateProvider>
  </DragAndDropProvider>
);
