import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";
import { AppStateProvider } from "./state/components/AppStateProvider";

export const App = () => (
  <DragAndDropProvider>
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  </DragAndDropProvider>
);
