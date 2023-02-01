import { Icon } from "shared/components/Icon/Icon";
import { ButtonType } from "shared/enums/ButtonType";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import { PropsWithClick } from "shared/models/PropsWithClick";
import style from "./RemoveButton.module.css";

interface RemoveButtonProps extends PropsWithClick {
  className?: string;
}

export const RemoveButton = ({ className, onClick }: RemoveButtonProps) => {
  return (
    <button
      type={ButtonType.Button}
      className={`${style.button} ${className}`}
      onClick={onClick}
    >
      <Icon icon={MaterialIcon.Delete} className={style.icon} />
    </button>
  );
};
