import { AppPageLayout } from "@alexandergridin/rtc-components-lib";

import { IChildren } from "shared/models";
import { useSelectUser } from "store/User/hooks";

interface IPageGuardProps extends IChildren {}

export const PageGuard = ({ children }: IPageGuardProps) => {
  const user = useSelectUser();

  if (!user) {
    return <AppPageLayout isLoading />;
  }

  return <>{children}</>;
};
