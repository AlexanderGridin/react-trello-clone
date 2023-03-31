import { Icon, MaterialIcon, StyledFlexRow, AppNavigation } from "@alexandergridin/rtc-components-lib";

import { navigationItems } from "routing";
import { getFormattedCurrentDate } from "shared/utils";

import { User } from "../../widgets/users/User";
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
