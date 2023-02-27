import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "App/components/AppLayout/AppLayout";
import { useAppState } from "App/state/hooks/useAppState";
import { Sidebar } from "App/widgets/Sidebar/Sidebar";

export const AppRoot = () => {
  const { user } = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AppLayout slotAside={user && <Sidebar />}>
      <Outlet />
    </AppLayout>
  );
};
