import { ReactNode } from "react";

import { IChildren } from "shared/models";

import style from "./SidebardLayout.module.css";

export interface ISidebarLayoutProps extends IChildren {
  slotHeader?: ReactNode;
  slotFooter?: ReactNode;
}

export const SidebarLayout = ({ slotHeader, children, slotFooter }: ISidebarLayoutProps) => {
  return (
    <div className={style.container}>
      {slotHeader && <div className={style.header}>{slotHeader}</div>}
      {children && <div className={style.content}>{children}</div>}
      {slotFooter && <div className={style.footer}>{slotFooter}</div>}
    </div>
  );
};
