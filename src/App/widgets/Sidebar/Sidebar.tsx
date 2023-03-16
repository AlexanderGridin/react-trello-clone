import { AppNavigation } from "App/components/AppNavigation/AppNavigation";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { getFormattedCurrentDate } from "shared/utils/getFormattedCurrentDate";
import { User } from "../users/User/User";
import { SidebarLayout } from "./components/SidebarLayout/SidebarLayout";

const date = getFormattedCurrentDate();

export const Sidebar = () => {
  const footer = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", padding: "25px" }}>
      <Icon icon={MaterialIcon.Calendar} className="mr" />
      {date}
    </div>
  );

  return (
    <SidebarLayout slotHeader={<User />} slotFooter={footer}>
      <AppNavigation />
    </SidebarLayout>
  );
};
