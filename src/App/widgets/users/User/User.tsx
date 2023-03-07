import { NavLink } from "react-router-dom";
import { useUserDispatcher, useSelectUser } from "App/entities/User/store/hooks";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import style from "./User.module.css";
import { useBoardDispatcher } from "App/entities/Board/state/hooks/useBoardDispatcher";
import { Tooltip } from "shared/components/Tooltip/Tooltip";

export const User = () => {
  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  const boardDispatcher = useBoardDispatcher();

  const handleSignOutClick = () => {
    boardDispatcher.setBoards([]);
    boardDispatcher.clearBoardsCache();
    localStorage.removeItem("userId");
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
