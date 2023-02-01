import { Icon } from "shared/components/Icon/Icon";
import { ButtonType } from "shared/enums/ButtonType";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import { PropsWithClick } from "shared/models/PropsWithClick";
import style from "./PinButton.module.css";

interface PinButtonProps extends PropsWithClick {
  isPinned?: boolean;
  className?: string;
}

export const PinButton = ({
  isPinned = false,
  className = "",
  onClick,
}: PinButtonProps) => {
  const classNames = `${style.button} ${
    isPinned ? style.button__pinned : ""
  } ${className}`;

  return (
    <button type={ButtonType.Button} onClick={onClick} className={classNames}>
      <Icon className={style.icon} icon={MaterialIcon.Pin} />
    </button>
  );
};