import { PropsWithChildren } from "react";
import style from "./PageTitle.module.css";

interface PageTitleProps extends PropsWithChildren {}

export const PageTitle = ({ children }: PageTitleProps) => {
  return <h1 className={style.container}>{children}</h1>;
};
