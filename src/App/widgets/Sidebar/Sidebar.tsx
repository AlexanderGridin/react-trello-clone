import { AppNavigation } from "App/components/AppNavigation/AppNavigation";
import { getFormattedCurrentDate } from "shared/utils/getFormattedCurrentDate";
import { User } from "../User/User";
import { SidebarLayout } from "./components/SidebarLayout/SidebarLayout";

const date = getFormattedCurrentDate();

export const Sidebar = () => {
  return (
    <SidebarLayout
      slotHeader={<User />}
      slotFooter={<div style={{ color: "#FFF", padding: "25px", textAlign: "center" }}>{date}</div>}
    >
      <AppNavigation />
    </SidebarLayout>
  );
};
