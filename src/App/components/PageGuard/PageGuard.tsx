import { useAppState } from "App/state/hooks/useAppState";
import { Children } from "shared/models/Children";
import { AppPageLayout } from "../AppPageLayout/AppPageLayout";

interface PageGuardProps extends Children {}

export const PageGuard = ({ children }: PageGuardProps) => {
  const { user } = useAppState();

  if (!user) {
    return <AppPageLayout isLoading />;
  }

  return <>{children}</>;
};
