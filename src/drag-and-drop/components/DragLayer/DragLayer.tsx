import { CSSProperties } from "react";
import { XYCoord } from "react-dnd";

import { IChildren } from "shared/models";

import cssStyle from "./DragLayer.module.css";

interface IDragLayerProps extends IChildren {
  previewPosition: XYCoord;
}

export const DragLayer = ({ previewPosition, children }: IDragLayerProps) => {
  const style: CSSProperties = {
    transform: `translate(${previewPosition.x}px, ${previewPosition.y}px)`,
  };

  return (
    <div className={cssStyle.container}>
      <div style={style}>{children}</div>
    </div>
  );
};
