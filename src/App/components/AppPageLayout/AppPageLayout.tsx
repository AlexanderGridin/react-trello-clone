import { ReactNode } from "react";
import { Spinner } from "shared/components/Spinner/Spinner";
import { IChildren } from "shared/models";
import style from "./AppPageLayout.module.css";
import { AppPageLayoutTestId } from "./static-data/AppPageLayoutTestId";

const { Layout: LayoutId, Header: HeaderId, Content: ContentId, Spinner: SpinnerId } = AppPageLayoutTestId;

interface IAppPageLayoutProps extends IChildren {
  slotHeader?: ReactNode;
  isLoading?: boolean;
}

export const AppPageLayout = ({ slotHeader, isLoading = false, children }: IAppPageLayoutProps) => {
  return (
    <section data-testid={LayoutId} className={style.container}>
      {slotHeader && (
        <header data-testid={HeaderId} className={style.header}>
          {slotHeader}
        </header>
      )}

      <div data-testid={ContentId} className={style.content}>
        {children}
        {isLoading && <Spinner data-testid={SpinnerId} />}
      </div>
    </section>
  );
};
