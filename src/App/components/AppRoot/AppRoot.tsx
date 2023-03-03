import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "App/components/AppLayout/AppLayout";
import { useAppState } from "App/state/hooks/useAppState";
import { Sidebar } from "App/widgets/Sidebar/Sidebar";
import { useUserDispatcher } from "App/entities/User/state";
import { getUserById } from "App/api/User/getUserById";
import { mapUserDtoToViewModel } from "App/entities/User/mappers/mapUserDtoToViewModel";
import { UserViewModel } from "App/entities/User/models";

export const AppRoot = () => {
  const { user } = useAppState();
  const navigate = useNavigate();
  const userDispatcher = useUserDispatcher();

  useEffect(() => {
    const loadUser = async () => {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        userDispatcher.setUser(new UserViewModel());
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
