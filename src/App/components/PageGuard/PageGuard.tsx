import { useSelectUser } from "App/store/User/hooks";
import { Children } from "shared/models/Children";
import { AppPageLayout } from "../AppPageLayout/AppPageLayout";

interface PageGuardProps extends Children {}

export const PageGuard = ({ children }: PageGuardProps) => {
  const user = useSelectUser();

  if (!user) {
    return <AppPageLayout isLoading />;
  }

  return <>{children}</>;
};
