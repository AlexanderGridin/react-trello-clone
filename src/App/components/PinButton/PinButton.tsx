import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";
import style from "./PinButton.module.css";

interface PinButtonProps extends Click, ClassName {
  isPinned?: boolean;
}

export const PinButton = ({ isPinned = false, className = "", onClick }: PinButtonProps) => {
  const classNames = `${style.button} ${isPinned ? style.button__pinned : ""} ${className}`;

  return (
    <button type="button" onClick={onClick} className={classNames}>
      <Icon className={style.icon} icon={MaterialIcon.Pin} />
    </button>
  );
};
