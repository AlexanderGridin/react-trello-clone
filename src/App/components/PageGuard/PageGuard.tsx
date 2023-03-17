import { IChildren } from "shared/models";
import { useSelectUser } from "App/store/User/hooks";
import { AppPageLayout } from "App/components/AppPageLayout";

interface IPageGuardProps extends IChildren {}

export const PageGuard = ({ children }: IPageGuardProps) => {
  const user = useSelectUser();

  if (!user) {
    return <AppPageLayout isLoading />;
  }

  return <>{children}</>;
};
