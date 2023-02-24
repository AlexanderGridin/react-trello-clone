import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";
import style from "./EditButton.module.css";

interface EditButtonProps extends Click, ClassName {}

export const EditButton = ({ className, onClick }: EditButtonProps) => {
  return (
    <button type="button" className={`${style.button} ${className}`} onClick={onClick}>
      <Icon icon={MaterialIcon.EditSquare} className={style.icon} />
    </button>
  );
};
