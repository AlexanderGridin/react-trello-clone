import { CSSProperties } from "react";
import { XYCoord } from "react-dnd";
import { Children } from "shared/models/Children";
import cssStyle from "./DragLayer.module.css";

interface DragLayerProps extends Children {
  previewPosition: XYCoord;
}

export const DragLayer = ({ previewPosition, children }: DragLayerProps) => {
  const style: CSSProperties = {
    transform: `translate(${previewPosition.x}px, ${previewPosition.y}px)`,
  };

  return (
    <div className={cssStyle.container}>
      <div style={style}>{children}</div>
    </div>
  );
};
