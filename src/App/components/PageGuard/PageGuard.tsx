import { useAppState } from "App/state/hooks/useAppState";
import { Children } from "shared/models/Children";

interface PageGuardProps extends Children {}

export const PageGuard = ({ children }: PageGuardProps) => {
  const { user } = useAppState();

  if (!user) {
    return null;
  }

  return <>{children}</>;
};
