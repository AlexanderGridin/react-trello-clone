import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import { Tooltip } from "shared/components/Tooltip/Tooltip";
import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";
import style from "./PinButton.module.css";

interface PinButtonProps extends Click, ClassName {
  isPinned?: boolean;
}

export const PinButton = ({ isPinned = false, className = "", onClick }: PinButtonProps) => {
  const cn = isPinned ? `${className} ${style.pinned}` : className;

  return (
    <Tooltip content={isPinned ? "Unpin" : "Pin"}>
      <IconButton icon={MaterialIcon.Pin} isActive={isPinned} activeColor="#5e81ac" className={cn} onClick={onClick} />
    </Tooltip>
  );
};
