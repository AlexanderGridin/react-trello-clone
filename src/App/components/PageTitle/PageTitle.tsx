import { PropsWithChildren } from "react";
import style from "./PageTitle.module.css";

interface PageTitleProps extends PropsWithChildren {
  className?: string;
}

export const PageTitle = ({ className = "", children }: PageTitleProps) => {
  return <h1 className={`${style.container} ${className}`}>{children}</h1>;
};
