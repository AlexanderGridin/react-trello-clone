import { ReactNode } from "react";
import style from "./AppLayout.module.css";
import { Children } from "shared/models/Children";

interface AppLayoutProps extends Children {
  slotAside?: ReactNode;
}

export const AppLayout = ({ slotAside, children }: AppLayoutProps) => {
  return (
    <div className={style.container}>
      {slotAside && <aside className={style.sidebar}>{slotAside}</aside>}
      {children && <main className={style.main}>{children}</main>}
    </div>
  );
};
