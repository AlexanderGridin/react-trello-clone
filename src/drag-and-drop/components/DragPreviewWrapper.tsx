import { PropsWithChildren } from "react";
import { XYCoord } from "react-dnd";

interface DragPreviewWrapperProps extends PropsWithChildren {
  position: XYCoord;
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
