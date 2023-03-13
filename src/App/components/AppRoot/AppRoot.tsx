import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "App/components/AppLayout/AppLayout";
import { Sidebar } from "App/widgets/Sidebar/Sidebar";
import { AuthenticatedUserDto, UserViewModel } from "App/entities/User/models";
import { useSelectUser, useUserDispatcher } from "App/store/User/hooks";
import { checUserAuth } from "App/api/User/services";
import { accessTokenStorage } from "App/local-storage";

export const AppRoot = () => {
  const navigate = useNavigate();

  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  const checkUserAuth = async () => {
    const accessToken = accessTokenStorage.get();

    if (!accessToken) {
      userDispatcher.setUser({ ...new UserViewModel() });
      navigate("/");

      return;
    }

    const userDto: AuthenticatedUserDto = await checUserAuth();
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
      checkUserAuth();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AppLayout slotAside={user?.isLoggedIn && <Sidebar />}>
      <Outlet />
    </AppLayout>
  );
};
