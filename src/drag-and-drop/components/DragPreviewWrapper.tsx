import { ReactNode } from "react";
import { XYCoord } from "react-dnd";

interface DragPreviewWrapperProps {
  position: XYCoord;
  children?: ReactNode;
}

export const DragPreviewWrapper = ({
  position,
  children,
}: DragPreviewWrapperProps) => {
  return (
    <div
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};
