import { ReactNode } from "react";
import style from "./AppLayout.module.css";
import { IChildren } from "shared/models";
import { AppLayoutTestId } from "./static-data/AppLayoutTestId";

interface IAppLayoutProps extends IChildren {
  slotAside?: ReactNode;
}

export const AppLayout = ({ slotAside, children }: IAppLayoutProps) => {
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
