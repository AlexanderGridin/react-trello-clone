import { PropsWithChildren } from "react";
import { XYCoord } from "react-dnd";
import style from "./DragLayer.module.css";

interface DragLayerProps extends PropsWithChildren {
  previewPosition: XYCoord;
}

export const DragLayer = ({ previewPosition, children }: DragLayerProps) => {
  return (
    <div className={style.container}>
      <div
        style={{
          transform: `translate(${previewPosition.x}px, ${previewPosition.y}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
