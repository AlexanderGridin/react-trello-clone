import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";
import { BoardPage } from "./pages/BoardPage/BoardPage";
// import { BoardsPage } from "./pages/BoardsPage/BoardsPage";
import { AppStateProvider } from "./state/components/AppStateProvider";

export const App = (): JSX.Element => (
  <DragAndDropProvider>
    <AppStateProvider>
      <BoardPage title="Test Board" />
      {/* <BoardsPage /> */}
    </AppStateProvider>
  </DragAndDropProvider>
);
