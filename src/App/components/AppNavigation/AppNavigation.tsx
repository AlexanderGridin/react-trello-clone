import { NavLink } from "react-router-dom";

import { Icon } from "shared/components/Icon";
import { StyledFlexRow } from "shared/components/StyledFlexRow";

import { INavigationItem } from "./models";
import { navigationItems } from "./static-data";

import style from "./AppNavigation.module.css";

const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${style.link} ${style.active}` : style.link;

export const AppNavigation = () => {
  return (
    <nav>
      <ul className="plain-list">
        {navigationItems.map(({ to, icon, text }: INavigationItem) => (
          <li key={text}>
            <NavLink to={to} className={getLinkClassName}>
              <StyledFlexRow>
                <Icon className="mr" icon={icon} />
                {text}
              </StyledFlexRow>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
