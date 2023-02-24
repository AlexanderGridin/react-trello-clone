import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { Children } from "shared/models/Children";

interface DragAndDropProviderProps extends Children {}

export const DragAndDropProvider = ({ children }: DragAndDropProviderProps) => (
  <DndProvider backend={Backend}>{children}</DndProvider>
);
