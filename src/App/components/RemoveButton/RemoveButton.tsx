import { ButtonType } from "shared/components/Button/enums/ButtonType";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { PropsWithClick } from "shared/models/PropsWithClick";
import style from "./RemoveButton.module.css";

interface RemoveButtonProps extends PropsWithClick {
  className?: string;
}

export const RemoveButton = ({ className, onClick }: RemoveButtonProps) => {
  return (
    <button type={ButtonType.Button} className={`${style.button} ${className}`} onClick={onClick}>
      <Icon icon={MaterialIcon.Delete} className={style.icon} />
    </button>
  );
};
