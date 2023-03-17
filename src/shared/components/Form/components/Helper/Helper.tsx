import { Icon } from "shared/components/Icon";
import { IChildren } from "shared/models";
import { MaterialIcon } from "shared/components/Icon/enums";

import { IHelperType } from "./models";
import { StyledHelperWrapper } from "./components";

import style from "./Helper.module.css";

interface HelperProps extends IChildren, IHelperType {}

export const Helper = ({ type = "regular", children }: HelperProps) => {
  return (
    <StyledHelperWrapper type={type}>
      <Icon icon={MaterialIcon.Error} className={style.icon} />
      {children}
    </StyledHelperWrapper>
  );
};
