import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "App/components/AppLayout/AppLayout";
import { Sidebar } from "App/widgets/Sidebar/Sidebar";
import { getUserById } from "App/api/User/services";
import { mapUserDtoToViewModel } from "App/entities/User/mappers/mapUserDtoToViewModel";
import { UserViewModel } from "App/entities/User/models";
import { useSelectUser, useUserDispatcher } from "App/store/User/hooks";

export const AppRoot = () => {
  const navigate = useNavigate();

  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  useEffect(() => {
    const loadUser = async () => {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        userDispatcher.setUser({ ...new UserViewModel() });
        navigate("/");

        return;
      }

      const userDto = await getUserById(userId);
      if (userDto) {
        userDispatcher.setUser(mapUserDtoToViewModel(userDto));
      }
    };

    if (!user) {
      loadUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AppLayout slotAside={user?.isLoggedIn && <Sidebar />}>
      <Outlet />
    </AppLayout>
  );
};
