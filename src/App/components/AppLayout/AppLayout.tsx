import { ReactNode } from "react";

import { IChildren } from "shared/models";

import { AppLayoutTestId } from "./static-data/AppLayoutTestId";

import style from "./AppLayout.module.css";

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
