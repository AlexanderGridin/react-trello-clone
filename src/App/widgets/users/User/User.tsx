import { NavLink } from "react-router-dom";
import { MaterialIcon, IconButton, Tooltip } from "@alexandergridin/rtc-components-lib";

import { useSelectUser, useUserDispatcher } from "store/User/hooks";
import { logoutUserAsync } from "api/User/services";
import { accessTokenStorage } from "local-storage";
import { useBoardsDispatcher } from "store/Boards/hooks";
import { useOpenedBoardDispatcher } from "store/OpenedBoard/hooks";
import { useBoardsCacheDispatcher } from "store/BoardsCache/hooks";

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
