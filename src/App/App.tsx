import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./routing/router";
import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";
import { store } from "./store";

export const App = () => (
  <DragAndDropProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </DragAndDropProvider>
);
