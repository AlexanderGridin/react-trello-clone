import { useUserDispatcher } from "App/entities/User/state";
import { useAppState } from "App/state/hooks/useAppState";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import style from "./User.module.css";

export const User = () => {
  const { user } = useAppState();
  const userDispatcher = useUserDispatcher();

  const handleSignOutClick = () => {
    localStorage.removeItem("user");
    userDispatcher.setUser(null);
  };

  if (!user) {
    return <div className={style.container}>No user to display...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={`https://picsum.photos/seed/${user.userName}/75`} alt="user avatar" />
      </div>

      <div className={style.name}>
        <p>{user.userName}</p>

        <IconButton
          icon={MaterialIcon.Logout}
          className={style.logout}
          activeColor="#BF616A"
          onClick={handleSignOutClick}
        />
      </div>
    </div>
  );
};
