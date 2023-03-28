import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "@alexandergridin/rtc-components-lib";

import { Sidebar } from "App/widgets/Sidebar";
import { useSelectUser, useUserDispatcher } from "App/store/User/hooks";
import { checkUserAuthAsync } from "api/User/services";
import { accessTokenStorage } from "App/local-storage";
import { AuthenticatedUserDto, UserViewModel } from "App/entities/User/models";

export const AppRoot = () => {
  const navigate = useNavigate();

  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  const checkAuth = async () => {
    const accessToken = accessTokenStorage.get();

    if (!accessToken) {
      userDispatcher.setUser({ ...new UserViewModel() });
      navigate("/");

      return;
    }

    const userDto: AuthenticatedUserDto = await checkUserAuthAsync();
    if (userDto._id) {
      accessTokenStorage.set(userDto.accessToken);
      userDispatcher.setUser(AuthenticatedUserDto.toViewModel(userDto));
      return;
    }

    accessTokenStorage.clear();
    userDispatcher.setUser({ ...new UserViewModel() });
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      checkAuth();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AppLayout slotAside={user?.isLoggedIn && <Sidebar />}>
      <Outlet />
    </AppLayout>
  );
};
