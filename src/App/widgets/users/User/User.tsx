import { NavLink } from "react-router-dom";

import { Tooltip } from "shared/components/Tooltip";
import { MaterialIcon, IconButton } from "shared/components";
import { useSelectUser, useUserDispatcher } from "App/store/User/hooks";
import { logoutUserAsync } from "App/api/User/services";
import { accessTokenStorage } from "App/local-storage";
import { useBoardsDispatcher } from "App/store/Boards/hooks";
import { useOpenedBoardDispatcher } from "App/store/OpenedBoard/hooks";
import { useBoardsCacheDispatcher } from "App/store/BoardsCache/hooks";

import style from "./User.module.css";

export const User = () => {
  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  const openedBoardDispatcher = useOpenedBoardDispatcher();
  const boardsDispatcher = useBoardsDispatcher();
  const boardsCahceDispatcher = useBoardsCacheDispatcher();

  const handleSignOutClick = async () => {
    boardsDispatcher.setBoards(null);
    openedBoardDispatcher.setBoard(null);
    boardsCahceDispatcher.clearCache();

    await logoutUserAsync();
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
