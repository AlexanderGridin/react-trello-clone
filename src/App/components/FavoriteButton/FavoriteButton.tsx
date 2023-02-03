import { Icon } from "shared/components/Icon/Icon";
import { ButtonType } from "shared/enums/ButtonType";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import { PropsWithClick } from "shared/models/PropsWithClick";
import style from "./FavoriteButton.module.css";

interface FavoriteButtonProps extends PropsWithClick {
  isFavorite: boolean;
  className?: string;
}

export const FavoriteButton = ({
  isFavorite,
  className,
  onClick,
}: FavoriteButtonProps) => {
  const classNames = `${style.button} ${isFavorite ? style.active : ""} ${
    className || ""
  }`;

  return (
    <button type={ButtonType.Button} className={classNames} onClick={onClick}>
      <Icon icon={MaterialIcon.Star} className={style.icon} />
    </button>
  );
};
