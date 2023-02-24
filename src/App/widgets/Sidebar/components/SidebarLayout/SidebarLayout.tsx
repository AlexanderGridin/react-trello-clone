import { ReactNode } from "react";
import { Children } from "shared/models/Children";
import style from "./SidebardLayout.module.css";

export interface SidebarLayoutProps extends Children {
  slotHeader?: ReactNode;
  slotFooter?: ReactNode;
}

export const SidebarLayout = ({ slotHeader, children, slotFooter }: SidebarLayoutProps) => {
  return (
    <div className={style.container}>
      {slotHeader && <div className={style.header}>{slotHeader}</div>}
      {children && <div className={style.content}>{children}</div>}
      {slotFooter && <div className={style.footer}>{slotFooter}</div>}
    </div>
  );
};
