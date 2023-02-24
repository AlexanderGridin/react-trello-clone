import { AppLayout } from "App/components/AppLayout/AppLayout";
import { Sidebar } from "App/widgets/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const AppRoot = () => {
  return (
    <AppLayout slotAside={<Sidebar />}>
      <Outlet />
    </AppLayout>
  );
};
