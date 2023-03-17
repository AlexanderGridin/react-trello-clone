import { Icon } from "shared/components/Icon/Icon";
import { IChildren, IClassName } from "shared/models";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { FlexContainer } from "shared/components/FlexContainer";

import style from "./PageTitle.module.css";

interface IPageTitleProps extends IChildren<string>, IClassName {
  icon?: MaterialIcon;
}

export const PageTitle = ({ className = "", icon, children }: IPageTitleProps) => {
  return (
    <FlexContainer className={`${style.container} ${className}`}>
      {icon && <Icon icon={icon} className="mr" />}
      <h1 className={style.title}>{children}</h1>
    </FlexContainer>
  );
};
