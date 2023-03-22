import { IClick, IClassName } from "shared/models";
import { Tooltip } from "shared/components/Tooltip";
import { IconButton } from "shared/components/IconButton";
import { MaterialIcon } from "shared/components";

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
