import { NavLink } from "react-router-dom";
import { FlexContainer } from "shared/components/FlexContainer";
import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import style from "./AppNavigation.module.css";

export const AppNavigation = () => {
  return (
    <nav>
      <ul className={`plain-list ${style.List}`}>
        <li className={style.ListItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${style.LinkActive} ${style.Link}` : style.Link
            }
          >
            <FlexContainer>
              <Icon className="mr" icon={MaterialIcon.Home} />
              <span> Home</span>
            </FlexContainer>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
