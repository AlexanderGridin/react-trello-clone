import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import { Tooltip } from "shared/components/Tooltip/Tooltip";
import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";

interface FavoriteButtonProps extends Click, ClassName {
  isFavorite: boolean;
}

export const FavoriteButton = ({ isFavorite, className, onClick }: FavoriteButtonProps) => {
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
