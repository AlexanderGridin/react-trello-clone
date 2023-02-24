import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";
import style from "./FavoriteButton.module.css";

interface FavoriteButtonProps extends Click, ClassName {
  isFavorite: boolean;
}

export const FavoriteButton = ({ isFavorite, className, onClick }: FavoriteButtonProps) => {
  const classNames = `${style.button} ${isFavorite ? style.active : ""} ${className || ""}`;

  return (
    <button type="button" className={classNames} onClick={onClick}>
      <Icon icon={MaterialIcon.Star} className={style.icon} />
    </button>
  );
};
