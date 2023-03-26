import { MaterialIcon, IconButton, Tooltip } from "@alexandergridin/rtc-components-lib";

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
