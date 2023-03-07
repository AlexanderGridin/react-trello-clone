import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppStateProvider } from "./state/components/AppStateProvider";

// TODO: remove AppStateProvider after Redux intergration will be completed
export const App = () => (
  <DragAndDropProvider>
    <AppStateProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppStateProvider>
  </DragAndDropProvider>
);
