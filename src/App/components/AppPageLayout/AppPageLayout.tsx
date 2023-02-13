import { PropsWithChildren, ReactNode } from "react";
import { Spinner } from "shared/components/Spinner/Spinner";
import style from "./AppPageLayout.module.css";

interface AppPageLayoutProps extends PropsWithChildren {
  slotHeader?: ReactNode;
  isLoading?: boolean;
}

export const AppPageLayout = ({
  slotHeader,
  isLoading = false,
  children,
}: AppPageLayoutProps) => {
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
