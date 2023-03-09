import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./routing/router";
import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";
import { store } from "./store";
import { AppStateProvider } from "./state/components/AppStateProvider";

// TODO: AppStateProvider still needed for tracking dragged item
export const App = () => (
  <DragAndDropProvider>
    <AppStateProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppStateProvider>
  </DragAndDropProvider>
);
