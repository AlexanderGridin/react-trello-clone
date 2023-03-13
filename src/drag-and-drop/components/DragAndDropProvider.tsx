import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { IChildren } from "shared/models";

interface IDragAndDropProviderProps extends IChildren {}

export const DragAndDropProvider = ({ children }: IDragAndDropProviderProps) => (
  <DndProvider backend={Backend}>{children}</DndProvider>
);
