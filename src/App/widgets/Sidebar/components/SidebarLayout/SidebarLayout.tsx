import { PropsWithChildren, ReactNode } from "react";
import style from "./SidebardLayout.module.css";

export interface SidebarLayoutProps extends PropsWithChildren {
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
