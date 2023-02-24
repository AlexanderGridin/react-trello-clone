import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { PropsWithClick } from "shared/models/PropsWithClick";
import style from "./EditButton.module.css";

interface EditButtonProps extends PropsWithClick {
  className?: string;
}

export const EditButton = ({ className, onClick }: EditButtonProps) => {
  return (
    <button type="button" className={`${style.button} ${className}`} onClick={onClick}>
      <Icon icon={MaterialIcon.EditSquare} className={style.icon} />
    </button>
  );
};
