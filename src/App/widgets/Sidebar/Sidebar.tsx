import { Icon, MaterialIcon } from "shared/components";
import { User } from "App/widgets/users/User";
import { AppNavigation } from "App/components/AppNavigation";
import { StyledFlexRow } from "shared/components";
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
      <AppNavigation />
    </SidebarLayout>
  );
};
