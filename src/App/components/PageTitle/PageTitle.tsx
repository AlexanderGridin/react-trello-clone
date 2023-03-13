import { IChildren, IClassName } from "shared/models";
import style from "./PageTitle.module.css";

interface IPageTitleProps extends IChildren, IClassName {}

export const PageTitle = ({ className = "", children }: IPageTitleProps) => {
  return <h1 className={`${style.container} ${className}`}>{children}</h1>;
};
