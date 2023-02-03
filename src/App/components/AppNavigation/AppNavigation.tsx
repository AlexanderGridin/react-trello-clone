import { NavLink } from "react-router-dom";
import { FlexContainer } from "shared/components/FlexContainer";
import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import style from "./AppNavigation.module.css";

const setClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${style.LinkActive} ${style.Link}` : style.Link;

export const AppNavigation = () => {
  return (
    <nav>
      <ul className={`plain-list ${style.List}`}>
        <li className={style.ListItem}>
          <NavLink to="/" className={setClassName}>
            <FlexContainer>
              <Icon className="mr" icon={MaterialIcon.Home} />
              <span> Boards</span>
            </FlexContainer>
          </NavLink>
        </li>

        <li className={style.ListItem}>
          <NavLink to="/boards/favorite" className={setClassName}>
            <FlexContainer>
              <Icon className="mr" icon={MaterialIcon.Star} />
              <span> Favorite</span>
            </FlexContainer>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
