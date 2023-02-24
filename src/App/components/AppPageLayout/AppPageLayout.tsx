import { ReactNode } from "react";
import { Spinner } from "shared/components/Spinner/Spinner";
import { Children } from "shared/models/Children";
import style from "./AppPageLayout.module.css";

interface AppPageLayoutProps extends Children {
  slotHeader?: ReactNode;
  isLoading?: boolean;
}

export const AppPageLayout = ({ slotHeader, isLoading = false, children }: AppPageLayoutProps) => {
  return (
    <>
      <section className={style.container}>
        {slotHeader && <header className={style.header}>{slotHeader}</header>}
        <div className={style.content}>
          {children}
          {isLoading && <Spinner />}
        </div>
      </section>
    </>
  );
};
