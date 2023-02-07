import { NavLink } from "react-router-dom";
import { FlexContainer } from "shared/components/FlexContainer";
import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import style from "./AppNavigation.module.css";

const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${style.link} ${style.active}` : style.link;

export const AppNavigation = () => {
  return (
    <nav>
      <ul className="plain-list">
        <li>
          <NavLink to="/" className={getLinkClassName}>
            <FlexContainer>
              <Icon className="mr" icon={MaterialIcon.Home} />
              <span> Boards</span>
            </FlexContainer>
          </NavLink>
        </li>

        <li className={style.ListItem}>
          <NavLink to="/boards/favorite" className={getLinkClassName}>
            <FlexContainer>
              <Icon className="mr" icon={MaterialIcon.Star} />
              <span> Favorite boards</span>
            </FlexContainer>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
