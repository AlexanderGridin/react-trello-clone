import { PropsWithChildren } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

interface DragAndDropProviderProps extends PropsWithChildren {}

export const DragAndDropProvider = ({ children }: DragAndDropProviderProps) => (
  <DndProvider backend={Backend}>{children}</DndProvider>
);
