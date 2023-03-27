import { Icon, MaterialIcon, StyledFlexRow, AppNavigation } from "@alexandergridin/rtc-components-lib";

import { User } from "App/widgets/users/User";
import { navigationItems } from "App/routing";
import { getFormattedCurrentDate } from "shared/utils";

import { SidebarLayout } from "./components";

const date = getFormattedCurrentDate();

export const Sidebar = () => {
  const footer = (
    <StyledFlexRow style={{ color: "#FFF", padding: "25px" }} align="center">
      <Icon icon={MaterialIcon.Calendar} className="mr" />
      {date}
    </StyledFlexRow>
  );

  return (
    <SidebarLayout slotHeader={<User />} slotFooter={footer}>
      <AppNavigation items={navigationItems} />
    </SidebarLayout>
  );
};
