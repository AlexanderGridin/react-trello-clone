import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";
import style from "./RemoveButton.module.css";

interface RemoveButtonProps extends Click, ClassName {}

export const RemoveButton = ({ className, onClick }: RemoveButtonProps) => {
  return (
    <button type="button" className={`${style.button} ${className}`} onClick={onClick}>
      <Icon icon={MaterialIcon.Delete} className={style.icon} />
    </button>
  );
};
