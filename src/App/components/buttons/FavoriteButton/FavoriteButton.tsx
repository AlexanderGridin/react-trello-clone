import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import { Tooltip } from "shared/components/Tooltip/Tooltip";
import { IClick, IClassName } from "shared/models";

interface IFavoriteButtonProps extends IClick, IClassName {
  isFavorite: boolean;
}

export const FavoriteButton = ({ isFavorite, className, onClick }: IFavoriteButtonProps) => {
  return (
    <Tooltip content="Favorite">
      <IconButton
        icon={MaterialIcon.Star}
        isActive={isFavorite}
        activeColor="#d08770"
        className={className}
        onClick={onClick}
      />
    </Tooltip>
  );
};
