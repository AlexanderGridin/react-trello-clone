import { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

interface DragAndDropProviderProps {
  children?: ReactNode;
}

export const DragAndDropProvider = ({ children }: DragAndDropProviderProps) => {
  return <DndProvider backend={Backend}>{children}</DndProvider>;
};
