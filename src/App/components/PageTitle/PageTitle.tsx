import { Children } from "shared/models/Children";
import { ClassName } from "shared/models/ClassName";
import style from "./PageTitle.module.css";

interface PageTitleProps extends Children, ClassName {}

export const PageTitle = ({ className = "", children }: PageTitleProps) => {
  return <h1 className={`${style.container} ${className}`}>{children}</h1>;
};
