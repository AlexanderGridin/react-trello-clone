import { ReactNode } from "react";
import style from "./AppLayout.module.css";
import { Children } from "shared/models/Children";
import { AppLayoutTestId } from "./static-data/AppLayoutTestId";

interface AppLayoutProps extends Children {
  slotAside?: ReactNode;
}

export const AppLayout = ({ slotAside, children }: AppLayoutProps) => {
  return (
    <div data-testid={AppLayoutTestId.Layout} className={style.container}>
      {slotAside && (
        <aside data-testid={AppLayoutTestId.Aside} className={style.sidebar}>
          {slotAside}
        </aside>
      )}

      {children && (
        <main data-testid={AppLayoutTestId.Main} className={style.main}>
          {children}
        </main>
      )}
    </div>
  );
};
