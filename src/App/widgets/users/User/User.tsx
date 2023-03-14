import { NavLink } from "react-router-dom";

import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import { Tooltip } from "shared/components/Tooltip/Tooltip";
import { useSelectUser, useUserDispatcher } from "App/store/User/hooks";
import { useOpenedBoardDispatcher } from "App/store/OpenedBoard/hooks";
import { useBoardsPageDispatcher } from "App/store/Boards/hooks";
import { useBoardsCacheDispatcher } from "App/store/BoardsCache/hooks";
import { logoutUser } from "App/api/User/services";
import { accessTokenStorage } from "App/local-storage";

import style from "./User.module.css";

export const User = () => {
  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  const openedBoardDispatcher = useOpenedBoardDispatcher();
  const boardsPageDispatcher = useBoardsPageDispatcher();
  const boardsCahceDispatcher = useBoardsCacheDispatcher();

  const handleSignOutClick = async () => {
    boardsPageDispatcher.setBoards(null);
    openedBoardDispatcher.setBoard(null);
    boardsCahceDispatcher.clearCache();

    await logoutUser();
    accessTokenStorage.clear();
    userDispatcher.setUser(null);
  };

  if (!user) {
    return <div className={style.container}>No user to display...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={`https://picsum.photos/seed/${user.name}/75`} alt="user avatar" />
      </div>

      <div className={style.name}>
        <NavLink to="/" className={style.link}>
          {user.name}
        </NavLink>

        <Tooltip content="Sign out">
          <IconButton
            icon={MaterialIcon.Logout}
            className={style.logout}
            activeColor="#BF616A"
            onClick={handleSignOutClick}
          />
        </Tooltip>
      </div>
    </div>
  );
};
