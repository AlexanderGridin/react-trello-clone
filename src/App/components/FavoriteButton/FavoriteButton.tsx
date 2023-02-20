import { ButtonType } from "shared/components/Button/enums/ButtonType";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { PropsWithClick } from "shared/models/PropsWithClick";
import style from "./FavoriteButton.module.css";

interface FavoriteButtonProps extends PropsWithClick {
  isFavorite: boolean;
  className?: string;
}

export const FavoriteButton = ({ isFavorite, className, onClick }: FavoriteButtonProps) => {
  const classNames = `${style.button} ${isFavorite ? style.active : ""} ${className || ""}`;

  return (
    <button type={ButtonType.Button} className={classNames} onClick={onClick}>
      <Icon icon={MaterialIcon.Star} className={style.icon} />
    </button>
  );
};
