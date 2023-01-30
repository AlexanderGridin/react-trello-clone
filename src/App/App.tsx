import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";
import { BoardPage } from "./pages/BoardPage/BoardPage";
import { BoardsPage } from "./pages/BoardsPage/BoardsPage";
import { AppStateProvider } from "./state/components/AppStateProvider";

export const App = () => (
  <DragAndDropProvider>
    <AppStateProvider>
      <BoardPage />
      <BoardsPage />
    </AppStateProvider>
  </DragAndDropProvider>
);
