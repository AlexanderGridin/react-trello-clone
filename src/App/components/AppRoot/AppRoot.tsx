import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "App/components/AppLayout/AppLayout";
import { useAppState } from "App/state/hooks/useAppState";
import { Sidebar } from "App/widgets/Sidebar/Sidebar";
import { useUserDispatcher } from "App/entities/User/state";

export const AppRoot = () => {
  const { user } = useAppState();
  const navigate = useNavigate();
  const userDispatcher = useUserDispatcher();

  useEffect(() => {
    if (user) {
      return;
    }

    const userString = localStorage.getItem("user");
    const userFromStorage = userString ? JSON.parse(userString) : null;

    if (!userFromStorage) {
      navigate("/");
      return;
    }

    userDispatcher.setUser(userFromStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AppLayout slotAside={user && <Sidebar />}>
      <Outlet />
    </AppLayout>
  );
};
