import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "App/components/AppLayout/AppLayout";
import { Sidebar } from "App/widgets/Sidebar/Sidebar";
import { mapUserDtoToViewModel } from "App/entities/User/mappers/mapUserDtoToViewModel";
import { UserViewModel } from "App/entities/User/models";
import { useSelectUser, useUserDispatcher } from "App/store/User/hooks";
import { checkAuth } from "App/api/User/services/checkAuth";

export const AppRoot = () => {
  const navigate = useNavigate();

  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  const checkUserAuth = async () => {
    const accessToken = localStorage.getItem("token");

    if (!accessToken) {
      userDispatcher.setUser({ ...new UserViewModel() });
      navigate("/");

      return;
    }

    const userDto = await checkAuth();
    if (userDto._id) {
      localStorage.setItem("token", userDto.accessToken);
      userDispatcher.setUser(mapUserDtoToViewModel(userDto));
      return;
    }

    localStorage.removeItem("token");
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
