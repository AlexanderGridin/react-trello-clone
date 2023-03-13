import { useSelectUser } from "App/store/User/hooks";
import { IChildren } from "shared/models";
import { AppPageLayout } from "../AppPageLayout/AppPageLayout";

interface IPageGuardProps extends IChildren {}

export const PageGuard = ({ children }: IPageGuardProps) => {
  const user = useSelectUser();

  if (!user) {
    return <AppPageLayout isLoading />;
  }

  return <>{children}</>;
};
