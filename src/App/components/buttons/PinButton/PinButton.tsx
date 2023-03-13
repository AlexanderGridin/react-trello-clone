import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import { Tooltip } from "shared/components/Tooltip/Tooltip";
import { IClick, IClassName } from "shared/models";
import style from "./PinButton.module.css";

interface IPinButtonProps extends IClick, IClassName {
  isPinned?: boolean;
}

export const PinButton = ({ isPinned = false, className = "", onClick }: IPinButtonProps) => {
  const cn = isPinned ? `${className} ${style.pinned}` : className;

  return (
    <Tooltip content={isPinned ? "Unpin" : "Pin"}>
      <IconButton icon={MaterialIcon.Pin} isActive={isPinned} activeColor="#5e81ac" className={cn} onClick={onClick} />
    </Tooltip>
  );
};
