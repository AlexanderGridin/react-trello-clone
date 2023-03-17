import { Icon } from "shared/components/Icon";
import { IChildren, IClassName } from "shared/models";
import { MaterialIcon } from "shared/components/Icon/enums";
import { StyledFlexRow } from "shared/components/StyledFlexRow";

import style from "./PageTitle.module.css";

interface IPageTitleProps extends IChildren<string>, IClassName {
  icon?: MaterialIcon;
}

export const PageTitle = ({ className = "", icon, children }: IPageTitleProps) => {
  return (
    <StyledFlexRow className={`${style.container} ${className}`}>
      {icon && <Icon icon={icon} className="mr" />}
      <h1 className={style.title}>{children}</h1>
    </StyledFlexRow>
  );
};
