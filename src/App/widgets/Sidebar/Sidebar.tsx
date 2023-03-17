import { Icon } from "shared/components/Icon/Icon";
import { User } from "App/widgets/users/User";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { AppNavigation } from "App/components/AppNavigation";
import { getFormattedCurrentDate } from "shared/utils/getFormattedCurrentDate";

import { SidebarLayout } from "./components";

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
