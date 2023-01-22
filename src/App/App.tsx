import { Board } from "App/components/Board/Board";
import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";
import { AppStateProvider } from "./state/components/AppStateProvider";

export const App = (): JSX.Element => (
  <DragAndDropProvider>
    <AppStateProvider>
      <Board title="Test Board" />
    </AppStateProvider>
  </DragAndDropProvider>
);
